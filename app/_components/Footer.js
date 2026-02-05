import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, href: "#" },
    { icon: <Linkedin size={24} />, href: "#" },
    { icon: <Twitter size={24} />, href: "#" },
  ];

  return (
    <footer className="bg-charcoal-900 text-offwhite-100">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand / Logo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            <Logo />
          </h2>
          <p className="opacity-80 max-w-xs">
            Crafting brands people remember through strategy, design, and
            storytelling.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-gold-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 opacity-80">
            <li>Email: hello@cultreboat.com</li>
            <li>Phone: +91 1234 567 890</li>
            <li>Address: 123 Brand St, Creative City</li>
          </ul>
        </div>

        {/* Social / Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="hover:text-gold-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal-700 mt-8"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 py-6 text-center opacity-70">
        © {new Date().getFullYear()} Cultre Boat & Ankit Bhardwaj. All rights
        reserved. Designed & built by Ankit Bhardwaj.
      </div>
    </footer>
  );
}

export default Footer;
