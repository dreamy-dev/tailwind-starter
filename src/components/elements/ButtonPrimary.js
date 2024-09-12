import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { ArrowForward } from '../icons/ArrowForward';
import { motion } from 'framer-motion';

export default function ButtonPrimary(props) {
    const containerStyles = {
        display: 'flex',
    };

    const iconVariants = {
        rest: { x: 0 },
        hover: { x: 2 },
    };

    return (
        <div style={containerStyles}>
            <motion.a
                initial="rest"
                whileTap="hover"
                whileHover="hover"
                animate="rest"
                className="cursor-pointer bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
                href={props.href}
            >
                <p>{props.buttonText}</p>
                <motion.span
                    variants={iconVariants}
                    transition={{ type: 'tween', ease: 'easeOut' }}
                >
                    <ArrowForward styles="fill-white w-3 h-3" />
                </motion.span>
            </motion.a>
        </div>
    );
}
