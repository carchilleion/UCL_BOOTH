import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-secondary/20 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-default"
        >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <h4 className="font-semibold text-gray-800 text-lg">{title}</h4>
        </motion.div>
    );
};

export default FeatureCard;
