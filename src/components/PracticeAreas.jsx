function PracticeAreas() {
  const practices = [
    {
      title: "Corporate Law",
      description: "Expert guidance on business formation, contracts, mergers, and corporate governance.",
      icon: "🏢"
    },
    {
      title: "Real Estate Law",
      description: "Comprehensive legal services for property transactions, leases, and disputes.",
      icon: "🏠"
    },
    {
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, and family matters.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Criminal Defense",
      description: "Aggressive defense strategies to protect your rights and freedom.",
      icon: "⚖️"
    },
    {
      title: "Estate Planning",
      description: "Secure your legacy with wills, trusts, and estate administration.",
      icon: "📋"
    },
    {
      title: "Personal Injury",
      description: "Fighting for maximum compensation for accident and injury victims.",
      icon: "🏥"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            delivering results with professionalism and dedication.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-lg hover:shadow-xl transition duration-300 border border-slate-200 hover:border-amber-400"
            >
              <div className="text-5xl mb-4">{practice.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {practice.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {practice.description}
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-6 text-amber-600 font-semibold hover:text-amber-700 transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;