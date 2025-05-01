import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faSearch  } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function SearchBar() {
  const words = [ 'Colleges', 'Schools',  'Programs', 'Countries', 'Students', 'Streams', 'Courses', 'Exams',];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full">
      <div className="flex items-center justify-end gap-5 w-full ">
        {/* Search Icon */}
        <div className="flex items-center gap-2 border-b">
          <div className="w-6 h-6 flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-600 w-5 h-5" />
          </div>
          <div className="text-lg font-medium text-gray-800 mr-16">
            Search Globally Among <span className="font-semibold">1720+</span>{" "}
            <span className="relative overflow-hidden h-6">
              <span
                key={currentIndex}
                className="absolute animate-slide-up text-blue-500 font-semibold"
              >
                {words[currentIndex]}
              </span>
            </span>
          </div>
        </div>
        {/* Sun & Avatar Icon */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 17.95l-1.414-1.414M6.05 6.05l-1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-pink-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-6 h-6"
            >
              <circle cx="32" cy="32" r="30" fill="#f9c2d1" />
              <path
                d="M32 12c-6 0-11 5-11 11 0 3 1 6 3 8-3 2-5 5-5 9v4h26v-4c0-4-2-7-5-9 2-2 3-5 3-8 0-6-5-11-11-11z"
                fill="#fff"
              />
              <path d="M32 36c-6 0-11 5-11 11h22c0-6-5-11-11-11z" fill="#fff" />
              <circle cx="24" cy="23" r="2" fill="#333" />
              <circle cx="40" cy="23" r="2" fill="#333" />
              <path
                d="M28 28c1 1 2 1 4 1s3 0 4-1"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* Language button */}
        <button className="font-medium flex items-center gap-2 px-3 py-1.5 cursor-pointer border text-sm rounded-lg text-blue-500 hover:bg-blue-50">
          <span>Ind - Eng</span>
        </button>
      </div>
    </div>
  );
}
