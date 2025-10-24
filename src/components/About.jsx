import { Scale, Target, Users, Lightbulb } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About Enriquez Law Group
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded in 2025, the Enriquez Law Group has been providing exceptional legal 
              services to individuals and businesses throughout the region. Our 
              commitment to excellence and client satisfaction has made us a trusted 
              name in the legal community.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With decades of combined experience, our team of dedicated attorneys 
              brings expertise, integrity, and personalized attention to every case. 
              We understand that legal matters can be complex and stressful, which 
              is why we prioritize clear communication and strategic counsel.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">10+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">SO MANY</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">110%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Core Values */}
          <div className="bg-slate-900 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Our Core Values</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Integrity</h4>
                  <p className="text-slate-300">
                    We uphold the highest ethical standards in all our dealings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Excellence</h4>
                  <p className="text-slate-300">
                    We strive for outstanding results in every case we handle.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Client-Focused</h4>
                  <p className="text-slate-300">
                    Your needs and goals are at the center of everything we do.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Innovation</h4>
                  <p className="text-slate-300">
                    We leverage modern strategies to achieve the best outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;