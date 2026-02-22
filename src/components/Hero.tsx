import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="w-full md:w-1/2 text-center md:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-900/40 backdrop-blur-sm p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium text-sm">
                                Welcome to the Cyber Ohana 🌺
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                                Urian <span className="text-blue-400">Cybersecurity</span> League
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100/90 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                                Learn cybersecurity. Protect the digital world. Grow together as one Ohana.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#missions" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
                                    Start Learning
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </a>
                                <a href="#about" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-xl text-white bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all">
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            {/* UCL Logo */}
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden ring-4 ring-accent/30">
                                <img src="/ucl-logo.png" alt="Urian Cybersecurity League Logo" className="w-full h-full object-cover" />
                            </div>

                            {/* Stitch floating badge */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-white p-2 rounded-2xl shadow-lg border border-stitch-light/30"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-stitch-light to-primary flex items-center justify-center overflow-hidden">
                                    <img src="/stitch.png" alt="Stitch" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-white text-2xl">👽</span><span class="absolute bottom-0 text-[8px] text-white/80 font-bold">STITCH</span>'; }} />
                                </div>
                            </motion.div>

                            {/* Lilo floating badge */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white p-2 rounded-2xl shadow-lg border border-secondary/20"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-lilo-sunset flex items-center justify-center overflow-hidden">
                                    <img src="/lilo.png" alt="Lilo" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-white text-2xl">🌺</span><span class="absolute bottom-0 text-[8px] text-white/80 font-bold">LILO</span>'; }} />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
