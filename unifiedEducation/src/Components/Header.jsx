import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full  bg-white border-b fixed border-gray-200 shadow-sm">
      <div className="  px-4 sm:px-6 ">
        <div className="flex w-full items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to={"/"} className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </Link>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">UniEdu Portal</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden xs:block">Unified Education Interface</p>
            </div>
          </div>

          {/* Desktop Sign In Button */}
          <button className="hidden sm:block px-4 md:px-6 py-2 text-gray-700 font-medium hover:bg-gray-200 border-2 border-gray-400 cursor-pointer rounded-lg transition-colors duration-200">
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden pb-4 pt-2 border-t border-gray-100 mt-2">
            <button className="w-full px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200 text-left">
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}