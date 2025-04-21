// lib/auth.js
import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  return { session, status };
};
