'use client'
import React from "react";
import "../../globals.css";
import Logo from "./_components/Logo";
import DashboardNavbar from "./_components/DashboardNavbar";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardFooter from "./_components/DashboardFooter";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/AuthProvider";

const InstructorDashboardLayout = ({ children }) => {
  return (
    <AuthProvider>
    <Provider store={store}>
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-72 bg-gray-900 fixed h-full z-50 flex flex-col">
        <div className="w-full h-[1px] top-20 left-0 bg-white/30 absolute"></div>
        <Logo />
        <DashboardNavbar />
      </aside>
      <div className="flex flex-col w-full pl-72 overflow-hidden">
        <div className="bg-white w-full fixed z-40 top-0 pl-72 right-0 shadow-sm">
          <DashboardHeader />
        </div>
          <div className="mt-32 container px-10 mx-auto">
            {children}
          <Toaster />
          </div>
        <div className="mt-auto py-6">
          <DashboardFooter />
        </div>
      </div>
    </div>
    </Provider>
    </AuthProvider>
  );
};

export default InstructorDashboardLayout;
