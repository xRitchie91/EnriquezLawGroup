import { useState } from 'react';
import { Scale } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Scale className="w-8 h-8 text-amber-400 mr-3" />
            <h1 className="text-2xl font-bold">Enriquez Law Group</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#services" className="hover:text-amber-400 transition">Practice Areas</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 hover:bg-slate-700 rounded">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-slate-700 rounded">About</a>
            <a href="#services" className="block px-3 py-2 hover:bg-slate-700 rounded">Practice Areas</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-slate-700 rounded">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;