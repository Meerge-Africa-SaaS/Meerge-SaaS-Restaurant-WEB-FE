"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LoginBtn from "../btns/login-btn";

interface NavLink {
  text: string;
  href: string;
  isButton?: boolean;
}

const navLinks: NavLink[] = [
  { text: "Features", href: "#features" },
  { text: "Products", href: "#products" },
  { text: "Company", href: "#company" },
  { text: "Partners", href: "#partners" },
  {
    text: "Request Demo",
    href: "https://forms.gle/PVNCmsyiQgdUC7KG9",
    isButton: true,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const routeToMemoForm = () => {
    window.open("/restaurant/memoForm", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-colors ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/assets/Meerge-logo.svg"
            alt="Meerge Logo"
            width={80}
            height={40}
            className="w-20 h-auto ml-4"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) =>
            link.isButton ? (
              <Button
                key={index}
                variant="secondary"
                className={`px-8 py-2 text-white ${ !isScrolled ? "bg-[#FF4101] hover:bg-[#0E2254] transition-colors" :"bg-[#0E2254] hover:bg-[#FF4101] transition-colors"}`}
                asChild
                onClick={routeToMemoForm}
              >
                <Link href={""}>{link.text}</Link>
              </Button>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={`desktop-menu-link transition-colors ${
                  !isScrolled
                    ? "text-white font-semibold"
                    : "text-black font-semibold"
                }`}
              >
                {link.text}
              </Link>
            )
          )}
          <LoginBtn isScrolled={isScrolled}/>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link, index) =>
                link.isButton ? (
                  <Button
                    key={index}
                    variant="secondary"
                    className="w-full text-white hover:bg-secondary/50 transition-colors"
                    asChild
                    onClick={routeToMemoForm}
                  >
                    {/* <Link href={link.href}>{link.text}</Link> */}
                  </Button>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="mobile-menu-link text-foreground hover:text-secondary transition-colors"
                  >
                    {link.text}
                  </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
