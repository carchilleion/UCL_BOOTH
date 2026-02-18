import { Shield, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stitch-dark py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/20 p-2 rounded-full">
                                <Shield className="h-6 w-6 text-stitch-light" />
                            </div>
                            <span className="font-bold text-xl text-white">UCL</span>
                        </div>
                        <p className="text-stitch-light/70 text-sm text-center md:text-left max-w-xs">
                            Empowering students to secure the future, one byte at a time. Join the Cyber Ohana! 🌺
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-sm text-stitch-light/70">
                            <a href="#home" className="hover:text-accent transition-colors">Home</a>
                            <a href="#about" className="hover:text-accent transition-colors">About Us</a>
                            <a href="#missions" className="hover:text-accent transition-colors">Missions</a>
                            <a href="#quiz" className="hover:text-accent transition-colors">Quiz</a>
                            <a href="#community" className="hover:text-accent transition-colors">Community</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://web.facebook.com/UrianCybersecLeague" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary/20 rounded-full shadow-sm text-stitch-light hover:text-accent hover:bg-primary/30 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-primary/20 rounded-full shadow-sm text-stitch-light hover:text-accent hover:bg-primary/30 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-primary/20 rounded-full shadow-sm text-stitch-light hover:text-accent hover:bg-primary/30 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-stitch-light/10 text-center text-sm text-stitch-light/50">
                    © {new Date().getFullYear()} Urian Cybersecurity League. Ohana means family. 🌺
                </div>
            </div>
        </footer>
    );
};

export default Footer;
