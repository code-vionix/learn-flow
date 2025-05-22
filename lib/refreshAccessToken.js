import { jwtDecode } from "jwt-decode";

export async function refreshAccessToken(token) {
  try {
    const res = await fetch("http://localhost:3000/api/v1/users/access-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });

    const data = await res.json();

    if (!res.ok || !data?.accessToken) throw new Error("Refresh token failed");

    const decoded = jwtDecode(data.accessToken);

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken ?? token.refreshToken,
      accessTokenExpires: decoded.exp * 1000,
    };
  } catch (err) {
    console.error("Failed to refresh token", err);
    throw err;
  }
}
