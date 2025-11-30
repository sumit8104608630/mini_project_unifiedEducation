import { GraduationCap, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Sample college data - replace with your actual data source or API
  const colleges = [
    { id: 1, name: 'Massachusetts Institute of Technology', location: 'Cambridge, MA', type: 'Private' },
    { id: 2, name: 'Stanford University', location: 'Stanford, CA', type: 'Private' },
    { id: 3, name: 'Harvard University', location: 'Cambridge, MA', type: 'Private' },
    { id: 4, name: 'University of California Berkeley', location: 'Berkeley, CA', type: 'Public' },
    { id: 5, name: 'California Institute of Technology', location: 'Pasadena, CA', type: 'Private' },
    { id: 6, name: 'University of Michigan', location: 'Ann Arbor, MI', type: 'Public' },
    { id: 7, name: 'Columbia University', location: 'New York, NY', type: 'Private' },
    { id: 8, name: 'Yale University', location: 'New Haven, CT', type: 'Private' },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim().length > 0) {
      setIsSearching(true);
      // Simulate search - replace with actual API call
      setTimeout(() => {
        const filtered = colleges.filter(college =>
          college.name.toLowerCase().includes(query.toLowerCase()) ||
          college.location.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResults(true);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSelectCollege = (college) => {
    console.log('Selected college:', college);
    setSearchQuery('');
    setShowResults(false);
    // Add your navigation or action here
    // e.g., navigate(`/college/${college.id}`)
  };

  return (
    <>
    <header className="w-full bg-white border-b fixed top-0 z-50 border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6">
        <div className="flex w-full items-center justify-between gap-4 h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link to={"/"} className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </Link>
            <div className="flex flex-col hidden md:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">UniEdu Portal</h1>
              <p className="text-xs sm:text-sm text-gray-500 hidden xs:block">Unified Education Interface</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden sm:block flex-1 max-w-xl mx-4 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {searchResults.map((college) => (
                  <button
                    key={college.id}
                    onClick={() => handleSelectCollege(college)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{college.name}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {college.location} • {college.type}
                    </div>
                  </button>
                ))}
              </div>
            )}
            
            {showResults && searchQuery && searchResults.length === 0 && !isSearching && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                <p className="text-gray-500 text-center">No colleges found</p>
              </div>
            )}
          </div>

          {/* Desktop Sign In Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="hidden sm:block px-4 md:px-6 py-2 text-gray-700 font-medium hover:bg-gray-200 border-2 border-gray-400 cursor-pointer rounded-lg transition-colors duration-200 flex-shrink-0"
          >
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
            {/* Mobile Search */}
            <div className="mb-3 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowResults(true)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Search Results */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                  {searchResults.map((college) => (
                    <button
                      key={college.id}
                      onClick={() => {
                        handleSelectCollege(college);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-medium text-gray-900 text-sm">{college.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {college.location} • {college.type}
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {showResults && searchQuery && searchResults.length === 0 && !isSearching && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                  <p className="text-gray-500 text-center text-sm">No colleges found</p>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsOpen(true)} 
              className="w-full px-4 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200 text-left"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      
      {/* Backdrop for closing search results */}
      {showResults && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowResults(false)}
        />
      )}
      
      {isOpen && <Login isOpen={isOpen} setIsOpen={setIsOpen} />}
    </header>




    {/* // student header
     <header className="bg-white border-b hidden border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Home className="w-5 h-5 text-gray-600" />
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">Student Portal</h1>
                  <p className="text-sm text-gray-500">Welcome back, {studentData.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <Bell className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                  <User className="w-5 h-5 text-gray-600" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition">
                  <LogOut className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-700">Logout</span>
                </button>
              </div>
            </div>
          </header> */}
          </>
  );
}