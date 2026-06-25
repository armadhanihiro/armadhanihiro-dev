"use client";

import { motion } from "framer-motion";

type MotionSectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export default function MotionSection({children, className, id}: MotionSectionProps) {
  return (
    <motion.section id={id} className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: "easeOut" }}>
        {children}
    </motion.section>
  );
}