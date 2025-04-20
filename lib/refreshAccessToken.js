// Refresh Access Token Helper
export async function refreshAccessToken(token) {
  try {
    const res = await fetch("http://localhost:3000/api/v1/users/access-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });

    const data = await res.json();

    if (!res.ok)
      throw new Error(data.message || "Failed to refresh access token");

    return {
      ...token,
      accessToken: data.accessToken,
      accessTokenExpires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}
