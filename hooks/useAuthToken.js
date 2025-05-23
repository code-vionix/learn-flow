import axios from "axios";
import jwtDecode from "jwt-decode";
import { useCallback, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_ROUTE_URL;

export function useAuthToken(session) {
  const [token, setToken] = useState(session?.accessToken || null);

  // Check if token expired or close to expire (< 60 sec)
  const isTokenExpired = useCallback(() => {
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token);
      const now = Date.now() / 1000;
      return exp < now + 60;
    } catch {
      return true;
    }
  }, [token]);

  // Refresh token API call
  const refreshToken = useCallback(async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/users/access-token`,
        {},
        { withCredentials: true }
      );
      const newToken = res.data.accessToken;
      setToken(newToken);
      return newToken;
    } catch (err) {
      setToken(null);
      throw err;
    }
  }, []);

  // Get valid token, refresh if expired
  const getValidToken = useCallback(async () => {
    if (isTokenExpired()) {
      return await refreshToken();
    }
    return token;
  }, [isTokenExpired, refreshToken, token]);

  return { token, setToken, getValidToken };
}
