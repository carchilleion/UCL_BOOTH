import { Shield, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Shield className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-bold text-xl text-gray-800">UCL</span>
                        </div>
                        <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
                            Empowering students to secure the future, one byte at a time. Join the Cyber Ohana! 🌊
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            <a href="#home" className="hover:text-primary transition-colors">Home</a>
                            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
                            <a href="#missions" className="hover:text-primary transition-colors">Missions</a>
                            <a href="#community" className="hover:text-primary transition-colors">Community</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Urian Cybersecurity League. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
