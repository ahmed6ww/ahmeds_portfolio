import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#000329] opacity-90"></div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white">
          {/* Logo & Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">Ahmed</h3>
            <p className="text-blue-100 max-w-md ">
              Crafting intelligent solutions through AI engineering. Lets build
              something extraordinary together.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              ></Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:ahmed@example.com"
                className="hover:text-blue-200 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#about"
                className="text-blue-100 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-blue-100 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-blue-100">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                ahmed@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-300/20">
          <p className="text-center text-blue-100">
            © {new Date().getFullYear()} Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
