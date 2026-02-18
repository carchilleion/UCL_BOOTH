import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface MissionCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    delay?: number;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, description, icon: Icon, color, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center h-full"
        >
            <div className={`p-4 rounded-full ${color} mb-4`}>
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default MissionCard;
