import { refreshAccessToken } from "@/lib/refreshAccessToken";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:3000/api/v1/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();
        console.log(user);

        if (res.ok && user?.accessToken) {
          const decoded = jwtDecode(user.accessToken);

          return {
            id: user._id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
            accessTokenExpires: decoded.exp * 1000, // convert to ms
          };
        }

        throw new Error(user.message || "Login failed");
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const res = await fetch(
            "http://localhost:3000/api/v1/users/oauth-login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: user.email,
                name: user.name,
                image: user.image,
              }),
            }
          );

          const data = await res.json();

          if (!res.ok || !data?.accessToken) {
            throw new Error("OAuth login failed");
          }

          const decoded = jwtDecode(data.accessToken);

          user.id = data.id;
          user.email = data.email;
          user.name = data.name;
          user.image = data.imageUrl;
          user.role = data.role;
          user.accessToken = data.accessToken;
          user.refreshToken = data.refreshToken;
          user.accessTokenExpires = decoded.exp * 1000;

          return true;
        } catch (err) {
          console.error("Google signIn error:", err);
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      // Initial login
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          role: user.role,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: user.accessTokenExpires,
        };
      }

      // Token still valid
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      // Token expired → refresh it
      try {
        const refreshed = await refreshAccessToken(token);

        return {
          ...token,
          accessToken: refreshed.accessToken,
          refreshToken: refreshed.refreshToken ?? token.refreshToken,
          accessTokenExpires: refreshed.accessTokenExpires,
        };
      } catch (error) {
        return {
          ...token,
          error: "AccessTokenRefreshFailed",
        };
      }
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.image;
      session.user.role = token.role;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error;
      return session;
    },

    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
