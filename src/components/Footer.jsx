function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Enriquez Law Group</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Providing exceptional legal services with integrity, expertise, and 
              dedication since 2025. Your trusted partner in navigating complex legal matters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition duration-300">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition duration-300">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition duration-300">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-amber-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-amber-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-amber-400 transition">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-amber-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Practice Areas</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Corporate Law</li>
              <li className="text-slate-300">Real Estate Law</li>
              <li className="text-slate-300">Family Law</li>
              <li className="text-slate-300">Criminal Defense</li>
              <li className="text-slate-300">Estate Planning</li>
              <li className="text-slate-300">Personal Injury</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Enriquez Law Group, PLLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Disclaimer Banner */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-500 text-xs text-center">
            <strong>Disclaimer:</strong> The information on this website is for general information 
            purposes only. Nothing on this site should be taken as legal advice for any individual 
            case or situation. This information is not intended to create, and receipt or viewing 
            does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;