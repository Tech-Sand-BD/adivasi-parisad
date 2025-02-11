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
            <Image src="/logo.png" width={250} height={250} alt="logo" />
          </Link>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">যোগাযোগ</h3>
          <p>
            জাতীয় আদিবাসী পরিষদের <br />
            <strong>ঠিকানা:</strong> ঢাকা বাংলাদেশ <br />
            <strong>ফোন নম্বর: </strong> +88 017xxxxxxxx <br />
            <strong>ইমেল: </strong> jap.info@jap.org:
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">সংযোগ করুন</h3>
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
              হোম
            </a>
            <a href="#" className="hover:text-gray-400 block">
              আমাদের কাজ
            </a>
            <a href="#" className="hover:text-gray-400 block">
              আমরা কারা
            </a>
            <a href="#" className="hover:text-gray-400 block">
              প্রকল্প
            </a>
            <a href="#" className="hover:text-gray-400 block">
              খবর
            </a>
            <a href="#" className="hover:text-gray-400 block">
              আমাদের সমর্থন করুন
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
              বাংলা
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 জাতীয় আদিবাসী পরিষদ, সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
