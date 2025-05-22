"use client";

import { SessionProvider,useSession } from "next-auth/react";

export function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
