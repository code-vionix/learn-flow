'use client'
import { Provider } from "react-redux";
import StudentLayout from "./_components/StudentLayout";
import { store } from "@/store/store";

export default function ProfilePage({ children }) {
  return (
    <>
    <Provider store={store} >
      <StudentLayout />
      <div className="container p-10 mx-auto  mt-5 mb-20">{children}</div>

      </Provider>
    </>
  );
}
