import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
