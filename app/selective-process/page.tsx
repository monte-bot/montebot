'use client';

import { motion } from 'framer-motion';
import SelectionForm from './form';

export default function SelectiveProcess() {
    return (
        <div className="container mx-auto px-6 md:px-8 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 rounded-2xl">
                <motion.img
                    src="/arduino.png"
                    alt="Arduino Mega"
                    className="w-[40rem] h-auto"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <SelectionForm />
            </div>
        </div>
    );
}
