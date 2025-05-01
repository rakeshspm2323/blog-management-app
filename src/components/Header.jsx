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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/assets/logoBlog.png"
              className="object-cover"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="md:text-3xl text-md font-bold text-black text-nowrap">
              Blog <span className="text-blue-500">Management</span>
            </p>
          </div>
          <div className="lg:block hidden">
            <SearchBar /> 
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
          <div className="lg:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                All Blogs 
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
