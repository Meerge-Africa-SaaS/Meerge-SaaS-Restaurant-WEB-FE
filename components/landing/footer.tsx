import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

const footerSections: FooterSection[] = [
  {
    title: "About Us",
    links: [
      { text: "Company", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Support", href: "#" },
      { text: "FAQs", href: "#" },
      { text: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { text: "Pricing", href: "#" },
      { text: "Earnings", href: "#" },
      { text: "Growth", href: "#" },
    ],
  },
  {
    title: "Partners",
    links: [
      { text: "Aidi Venture", href: "#" },
      { text: "Sell It Off", href: "#" },
      { text: "Megadel Farm", href: "#" },
      { text: "Sell Dome", href: "#" },
      { text: "SpeedMeals Culinary School", href: "#" },
      { text: "Reddish Culinary School", href: "#" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    icon: "/assets/instagram-icon.svg",
    href: "https://www.instagram.com/meergeafrica",
  },
  { platform: "Facebook", icon: "/assets/facebook-icon.svg", href: "#" },
  {
    platform: "X",
    icon: "/assets/X-icon.svg",
    href: "https://www.x.com/meergeafrica",
  },
  {
    platform: "LinkedIn",
    icon: "/assets/lin.png",
    href: "https://www.linkedin.com/company/meerge-africa/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 py-12">
      {/* Mobile Footer */}
      <div className="md:hidden space-y-6">
        <Link href="/" className="logo">
          <Image
            src="/assets/Meerge-logo.svg"
            alt="Meerge Logo"
            width={80}
            height={40}
            className="w-20 h-auto ml-4"
          />
        </Link>

        <Accordion type="single" collapsible>
          {footerSections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold text-lg text-gray-800">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 pb-4 space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="block text-gray-600 hover:text-primary transition"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="border-t pt-4">
          <h3 className="font-semibold text-lg text-gray-800">Contact</h3>
          <div className="space-y-1 text-gray-600">
            <p>hello@meergeafrica.com</p>
            <p>+234 813 918 8935</p>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:grid grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="block">
            <Image
              src="/assets/Meerge-logo.svg"
              alt="Meerge Africa Logo"
              width={160}
              height={50}
              className="w-40"
            />
          </Link>

          <div className="text-gray-600 space-y-2">
            <h3 className="font-semibold text-lg text-gray-800">Contact</h3>
            <p>hello@meergeafrica.com</p>
            <p>+234 813 918 8935</p>
          </div>
        </div>

        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-3">Socials</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="hover:scale-110 transition transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={`${social.platform} icon`}
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center md:text-right text-sm text-gray-600 mt-6 md:mt-0">
          <p>© 2024 Meerge Africa. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-primary transition">
              Terms of Use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
