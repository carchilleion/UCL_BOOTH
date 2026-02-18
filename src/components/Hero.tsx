import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <div className="w-full md:w-1/2 text-center md:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                                Welcome to the Cyber Ohana 🌺
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Urian <span className="text-primary">Cybersecurity</span> League
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Learn cybersecurity. Protect the digital world. Grow together as one community.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a href="#missions" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Start Learning
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </a>
                                <a href="#about" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm">
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
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                                <img src="/ucl-logo.png" alt="Urian Cybersecurity League Logo" className="w-full h-full object-cover" />
                            </div>

                            {/* Stitch placeholder */}
                            <motion.div
                                className="absolute -top-6 -right-6 bg-white p-2 rounded-2xl shadow-lg"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center overflow-hidden">
                                    {/* Replace src with your Stitch image */}
                                    <img src="/stitch.png" alt="Stitch" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-white text-2xl">�</span><span class="absolute bottom-0 text-[8px] text-white/80 font-bold">STITCH</span>'; }} />
                                </div>
                            </motion.div>

                            {/* Lilo placeholder */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white p-2 rounded-2xl shadow-lg"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-400 to-orange-400 flex items-center justify-center overflow-hidden">
                                    {/* Replace src with your Lilo image */}
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
