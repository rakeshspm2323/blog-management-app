import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="bg-white shadow-md w-full">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/logoBlog.png"
              className="object-cover"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="md:text-3xl text-md font-bold text-black text-nowrap">
              Blog <span className="text-blue-500">Ease</span>
            </p>
          </div>
          <div className="lg:flex gap-5 hidden">
            <SearchBar /> 
            <Link href="/blog/new"
              className="bg-blue-500 text-sm text-nowrap text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-300"
            >
              Post Your Blog
            </Link>
          </div>
          {/* Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    !isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute z-50 w-full left-0 lg:hidden md:px-10 px-4 py-4 bg-gray-100 h-96 max-h-96">
            <nav className="flex flex-col space-y-4">
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Home
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  About
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Contact
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Support
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Terms & Conditions
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Privacy Policy
              </Link>
              <Link
                href="/blog"
                className="text-center text-white bg-green-500 hover:bg-green-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
              >
                All Blogs 
              </Link>
              <Link
                href="/blog/new"
                className="text-center text-white bg-blue-500 hover:bg-blue-400 px-7 py-1.5 text-sm font-medium rounded-md shadow-md transition ease-in-out"
              >
                Post Your Blog 
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
