import { getSession } from "next-auth/react";

export async function fetchWithAuth(url, options = {}) {
  const session = await getSession(); // always gets fresh session
  const token = session?.accessToken;

  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "", // ✅ fix: template string
    "Content-Type": "application/json",
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });

  // Optional: handle 401 or token expiry
  if (res.status === 401) {
    console.warn("Unauthorized, maybe refresh token logic needed");
    // Optionally trigger signOut() or redirect here
  }

  return res;
}
