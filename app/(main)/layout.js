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

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export default function MainLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider>
        <AuthProvider>
          <Provider store={store}>
            <Navbars />
            <Navigation />
            <CourseProvider>
              <main>
                <NextTopLoader color="#FF6738" height={3} showSpinner={false} />
                {children}
              </main>
            </CourseProvider>
            <Footer />
          </Provider>
        </AuthProvider>
      </SessionProvider>
    </Suspense>
  );
}
