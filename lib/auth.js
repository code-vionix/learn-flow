// // lib/auth.js
// import { useSession } from "next-auth/react";

// export const useAuth = () => {
//   const { data: session, status } = useSession();

//   return { session, status };
// };


// lib/auth.js
// import { useSession } from "next-auth/react";

// export const useAuth = () => {
//   const { data: session, status } = useSession();

//   const accessToken = session?.accessToken;

//   return { session, status, accessToken };
// };


// lib/auth.js
import { setToken } from "@/store/slice/authSlice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.accessToken) {
      dispatch(setToken(session.accessToken));
    }
  }, [session?.accessToken, dispatch]);

  return { session, status, accessToken: session?.accessToken };
};
