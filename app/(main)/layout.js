"use client";

import { AuthProvider } from "@/components/AuthProvider";
import { CourseProvider } from "@/povider/CourseProvider";
import { store } from "@/store/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import "../globals.css";
import Footer from "./components/shared/Footer/Footer";
import Navbars from "./components/shared/Navbars";
import Navigation from "./components/shared/navigation/Navigation";

import { ToastContainer } from "react-toastify";

import { SessionProvider } from "next-auth/react";


export default function MainLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <SessionProvider>
      <AuthProvider>
        <Provider store={store}>
          <Navbars />
          <Navigation />
          <CourseProvider>
            <main>{children}</main>
            <ToastContainer />
          </CourseProvider>
          <Footer />
        </Provider>
      </AuthProvider>
     </SessionProvider>
    </Suspense>
  );
}
