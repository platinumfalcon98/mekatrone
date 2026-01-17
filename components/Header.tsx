"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Club", href: "/club" },
    { name: "Training", href: "/training" },
    { name: "Repair", href: "/repair" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="w-full px-5 py-5">
      <div className="max-w-[1546px] mx-auto">
        <nav className="bg-white rounded-[42px] px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Mekatrone Logo"
                width={84}
                height={52}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* User Account */}
              <button className="text-black hover:text-primary transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Shopping Cart */}
              <Link href="/cart" className="text-black hover:text-primary transition-colors relative">
                <Image
                  src="/images/icons/Cart.png"
                  alt="Cart"
                  width={24}
                  height={24}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image
                src="/images/icons/menu.png"
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-black hover:text-primary transition-colors text-sm font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <button className="text-black hover:text-primary transition-colors">
                    Account
                  </button>
                  <Link href="/cart" className="text-black hover:text-primary transition-colors">
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
