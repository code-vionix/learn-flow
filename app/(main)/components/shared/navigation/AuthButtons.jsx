"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <>
      <Link href="/register">
        <Button className="text-primary-500 rounded-none hover:text-orange-600 px-4 py-2 bg-primary-100 hover:bg-primary-200">
          Create Account
        </Button>
      </Link>
      <Link href="/login">
        <Button className="bg-primary-500 rounded-none text-white px-4 py-2 hover:bg-primary-600">
          Sign in
        </Button>
      </Link>
    </>
  );
}
