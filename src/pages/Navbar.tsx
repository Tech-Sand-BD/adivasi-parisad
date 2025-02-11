"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { TopNavLanguage } from "@/components/core/TopNavLanguage";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <TopNavLanguage />
      <nav className="  shadow py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center z-[999]">
              <Link href="/" className="text-black text-2xl font-bold">
                <Image src="/logo.png" width={150} height={150} alt="logo" />
              </Link>
            </div>

            {/* Desktop Navbar Items */}
            <div className="hidden md:flex space-x-4 items-center">
              <Link
                href="/"
                className="text-black hover:underline duration-300"
              >
                হোম
              </Link>
              <Link
                href="/our-work"
                className="text-black hover:underline duration-300"
              >
                আমাদের কাজ
              </Link>
              <Link
                href="/who-we-are"
                className="text-black hover:underline duration-300"
              >
                আমরা কারা
              </Link>
              <Link
                href="/projects"
                className="text-black hover:underline duration-300"
              >
                প্রকল্প
              </Link>
              <Link
                href="/news"
                className="text-black hover:underline duration-300"
              >
                খবর
              </Link>
              <Link
                href="/support-us"
                className="text-black hover:underline duration-300"
              >
                আমাদের সমর্থন করুন
              </Link>

              {/* Dropdown Menu for Desktop (on hover) */}
              {/* <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className="text-black flex items-center hover:underline duration-300"
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                    <Link
                      href="/service-1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                    <Link
                      href="/service-2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                    <Link
                      href="/service-3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Service 3
                    </Link>
                  </div>
                )}
              </div> */}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-black focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col items-center bg-[#658431] text-black py-2">
                <Link href="/" className="px-4 py-2">
                  হোম
                </Link>
                <Link href="/out-work" className="px-4 py-2">
                  আমাদের কাজ
                </Link>

                <Link href="/who-we-are" className="px-4 py-2">
                  আমরা কারা
                </Link>
                <Link href="/projects" className="px-4 py-2">
                  প্রকল্প
                </Link>
                <Link href="/news" className="px-4 py-2">
                  খবর
                </Link>
                <Link href="/support-us" className="px-4 py-2">
                  আমাদের সমর্থন করুন
                </Link>
                {/* <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center w-full px-4 py-2"
                  >
                    WHO WE ARE
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="flex flex-col bg-white text-gray-800 w-full rounded-lg mt-2">
                      <Link
                        href="/service-1"
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        Service 1
                      </Link>
                      <Link
                        href="/service-2"
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        Service 2
                      </Link>
                      <Link
                        href="/service-3"
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        Service 3
                      </Link>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
