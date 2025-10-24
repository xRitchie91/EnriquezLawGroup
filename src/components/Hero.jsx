function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 text-white">
        
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted Legal Counsel
            <span className="block text-amber-400 mt-2">Since 2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Providing exceptional legal services with integrity, expertise, and dedication to our clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-lg transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;