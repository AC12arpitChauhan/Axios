'use client';

import { motion } from 'framer-motion';

export const Curve = () => {
    return (
        <svg className="absolute top-0 left-0 w-full h-[calc(100vh+600px)] pointer-events-none z-[99]">
            <motion.path 
                initial={{ d: "M0 0 L100% 0 L100% 100% Q50% 100% 0 100% Z" }}
                animate={{ d: "M0 0 L100% 0 L100% 100% Q50% 100% 0 100% Z"}}
                exit={{ d: "M0 0 L100% 0 L100% 85% Q50% 100% 0 85% Z"}}
            />
        </svg>
    )
}

const anim = (variants: any) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants,
    }
}

const SVGHeight = 300;

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <div className='relative'>
            <div 
                className='h-screen w-screen fixed top-0 left-0 z-[100] pointer-events-none bg-black-100'
                id="banner-1"
                style={{ 
                    opacity: 0,
                    transition: 'opacity 0.5s ease-in-out'
                }}
            />
            {children}
            <div 
                className='h-screen w-screen fixed top-0 left-0 z-[100] pointer-events-none bg-teal-500'
                id="banner-2"
                style={{
                    clipPath: 'circle(0% at 50% 50%)',
                    transition: 'clip-path 0.5s ease-in-out'
                }}
            />
        </div>
    );
}
