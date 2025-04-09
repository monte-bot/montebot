'use client';

import { motion } from 'framer-motion';
import SelectionForm from './form';

export default function SelectiveProcess() {
    return (
        <div className="container mx-auto px-4 md:px-10 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-gesrics md:text-5xl font-bold mb-4">Proecesso Seletivo</h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>                
            </div>
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
