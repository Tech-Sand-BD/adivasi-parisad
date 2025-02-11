import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-black text-2xl font-bold">
            <Image src="/footer-logo.png" width={250} height={250} alt="logo" />
          </Link>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">CONTACT</h3>
          <p>
            FSC Indigenous Foundation <br />
            <strong>Address:</strong> Calle Gustavo Lara, Edificio 155 A/B,{" "}
            <br />
            Ciudad del Saber, Clayton, Ciudad de Panamá, Panamá. <br />
            <strong>Phone Number:</strong> +507 310 2554 <br />
            <strong>Email:</strong> fsc.if@fsc.org
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">CONNECT</h3>
          <div className="flex space-x-4 mb-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-gray-400">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <nav className="space-y-2">
            <a href="#" className="hover:text-gray-400 block">
              HOME
            </a>
            <a href="#" className="hover:text-gray-400 block">
              OUR WORK
            </a>
            <a href="#" className="hover:text-gray-400 block">
              WHO WE ARE
            </a>
            <a href="#" className="hover:text-gray-400 block">
              PROJECTS
            </a>
            <a href="#" className="hover:text-gray-400 block">
              NEWS
            </a>
            <a href="#" className="hover:text-gray-400 block">
              SUPPORT US
            </a>
          </nav>
        </div>
      </div>

      {/* Language Selection and Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              ENGLISH
            </a>
            <a href="#" className="hover:text-gray-400">
              ESPAÑOL
            </a>
            <a href="#" className="hover:text-gray-400">
              FRANÇAIS
            </a>
            <a href="#" className="hover:text-gray-400">
              PORTUGUÊS
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 FSC Indigenous Foundation, some rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
