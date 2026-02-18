import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionWrapper from './components/SectionWrapper';
import MissionCard from './components/MissionCard';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import { BookOpen, Users, Terminal, TrendingUp } from 'lucide-react';

function App() {
  const missions = [
    {
      title: "Learning Mission",
      description: "Provide structured learning opportunities through training sessions, workshops, and awareness campaigns. Students gain foundational and practical cybersecurity knowledge step by step.",
      icon: BookOpen,
      color: "bg-blue-500",
      delay: 0.1
    },
    {
      title: "Ohana Collaboration Hub",
      description: "Create an inclusive learning environment where members collaborate, share insights, and practice ethical cybersecurity together. Focus on teamwork and shared growth.",
      icon: Users,
      color: "bg-indigo-500",
      delay: 0.2
    },
    {
      title: "Training Lab",
      description: "Offer educational experiences beyond traditional classroom learning. Members develop critical thinking, analytical skills, and problem solving skills through guided cybersecurity scenarios.",
      icon: Terminal,
      color: "bg-purple-500",
      delay: 0.3
    },
    {
      title: "Growth Journey",
      description: "Encourage discipline, responsibility, and ethical standards in the cybersecurity profession while supporting personal and professional development.",
      icon: TrendingUp,
      color: "bg-green-500",
      delay: 0.4
    }
  ];

  const features = [
    "Cybersecurity Basics",
    "Phishing Awareness",
    "Password Security",
    "Hands-on Mini Labs",
    "Progress Tracking"
  ];

  return (
    <div className="min-h-screen bg-background text-gray-800 font-sans selection:bg-secondary/30">
      <Navbar />

      <main>
        <Hero />

        {/* About Section */}
        <SectionWrapper id="about" className="bg-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Urian Cybersecurity League is a student-driven organization focused on cybersecurity education, ethical practice, and technical growth at Father Saturnino Urios University. The organization builds a safe and collaborative space where beginners and enthusiasts develop real-world cybersecurity skills through guided learning, hands-on activities, and competitions.
            </p>
          </div>
        </SectionWrapper>

        {/* Vision Section */}
        <SectionWrapper id="vision" className="bg-secondary/10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Vision</h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-tr-full -ml-8 -mb-8"></div>

              <p className="text-xl md:text-2xl font-medium text-gray-800 italic relative z-10">
                “To be a leading community of cybersecurity enthusiasts dedicated to fostering a safe digital environment through education, innovation, and collaboration, empowering individuals to navigate and secure the complexities of the cyber world.”
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Missions Section */}
        <SectionWrapper id="missions" className="bg-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We are dedicated to building a strong foundation for future cybersecurity professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <MissionCard key={index} {...mission} />
            ))}
          </div>
        </SectionWrapper>

        {/* Learning Features Section */}
        <SectionWrapper id="learning" className="bg-gradient-to-b from-background to-secondary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our curriculum is designed for beginners to start their journey safely.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature} delay={index * 0.1} />
            ))}
          </div>
        </SectionWrapper>

        {/* Google Interland Section */}
        <SectionWrapper id="interland" className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-100 text-green-700 font-medium text-sm">
              🎮 Interactive Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Play Google Interland</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Learn internet safety through a fun, adventure-packed game. Explore four worlds and become an Internet Awesome champion!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 p-1">
                <div className="bg-white rounded-t-2xl p-8 md:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { name: "Kind Kingdom", emoji: "💙", color: "from-blue-400 to-blue-600", desc: "Be kind online" },
                      { name: "Reality River", emoji: "🌊", color: "from-green-400 to-teal-600", desc: "Don't fall for fake" },
                      { name: "Mindful Mountain", emoji: "⛰️", color: "from-orange-400 to-red-500", desc: "Share with care" },
                      { name: "Tower of Treasure", emoji: "🏰", color: "from-purple-400 to-indigo-600", desc: "Secure your secrets" },
                    ].map((world, index) => (
                      <div key={index} className="group text-center">
                        <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${world.color} flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                          <span className="text-4xl">{world.emoji}</span>
                        </div>
                        <p className="mt-2 font-semibold text-sm text-gray-800">{world.name}</p>
                        <p className="text-xs text-gray-500">{world.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href="https://beinternetawesome.withgoogle.com/en_us/interland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                    >
                      🚀 Play Interland Now
                    </a>
                    <p className="mt-3 text-sm text-gray-400">Free game by Google — no account needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Community Section */}
        <SectionWrapper id="community" className="bg-white">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cyber Ohana Community 🌺</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A welcoming student community focused on collaboration, ethical cybersecurity learning, and beginner-friendly knowledge sharing. We believe that we grow faster when we grow together.
              </p>
              <button className="px-8 py-3 bg-secondary text-primary font-bold rounded-xl hover:bg-secondary/80 transition-colors">
                Join our Discord
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              {/* Stitch & Lilo - Ohana Theme */}
              <div className="flex gap-6 items-end">
                {/* Stitch */}
                <div className="group relative">
                  <div className="w-40 h-48 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg overflow-hidden flex items-center justify-center transition-transform hover:scale-105 hover:-rotate-2">
                    <img src="/stitch.png" alt="Stitch" className="w-full h-full object-cover" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex flex-col items-center gap-2"><span class="text-5xl">🛸</span><span class="text-white font-bold text-sm">Stitch</span><span class="text-white/60 text-xs">Add stitch.png</span></div>'; }} />
                  </div>
                  <p className="text-center mt-2 text-sm font-semibold text-gray-600">Stitch</p>
                </div>
                {/* Lilo */}
                <div className="group relative -mb-4">
                  <div className="w-40 h-48 rounded-2xl bg-gradient-to-br from-rose-400 to-orange-400 shadow-lg overflow-hidden flex items-center justify-center transition-transform hover:scale-105 hover:rotate-2">
                    <img src="/lilo.png" alt="Lilo" className="w-full h-full object-cover" onError={(e: React.SyntheticEvent<HTMLImageElement>) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="flex flex-col items-center gap-2"><span class="text-5xl">🌺</span><span class="text-white font-bold text-sm">Lilo</span><span class="text-white/60 text-xs">Add lilo.png</span></div>'; }} />
                  </div>
                  <p className="text-center mt-2 text-sm font-semibold text-gray-600">Lilo</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

      </main>

      <Footer />
    </div>
  );
}

export default App;
