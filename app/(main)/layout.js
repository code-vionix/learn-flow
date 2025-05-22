"use client";

import { AuthProvider } from "@/components/AuthProvider";
import { CourseProvider } from "@/povider/CourseProvider";
import { store } from "@/store/store";
import { Suspense } from "react";
import { Provider } from "react-redux";
import "../globals.css";
import Footer from "./components/shared/Footer/Footer";
import Navbars from "./components/shared/Navbars";
import Navigation from "./components/shared/Navigation";

export default function MainLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <Provider store={store}>
          <Navbars />
          <Navigation />
          <CourseProvider>
            <main>{children}</main>
          </CourseProvider>
          <Footer />
        </Provider>
      </AuthProvider>
    </Suspense>
  );
}
