"use client";

import { Bell, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function NavIcons() {
  return (
    <>
      <Bell className="size-5 text-gray-600 cursor-pointer" />
      <Link href="/student/wishlist" aria-label="Wishlist">
        <Heart className="size-5 text-gray-600 cursor-pointer" />
      </Link>
      <Link href="/shopping-cart" aria-label="Shopping Cart">
        <ShoppingCart className="size-5 text-gray-600 cursor-pointer" />
      </Link>
    </>
  );
}
