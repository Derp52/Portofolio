import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiHtml5 } from 'react-icons/di'
import { SiVite } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { RiTailwindCssLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { DiPostgresql } from 'react-icons/di'
import { SiHasura } from 'react-icons/si'

const iconMove = (duration) => ({
    initial: { y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType: "reverse"
        },
    },
});

const Use = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y: -100}}
        transition={{duration:1.5}} 
        className='my-20 text-center text-4xl'>
            Technologies
        </motion.h2>
            <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div 
                variants={iconMove(2.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl'/>
                </motion.div>
                <motion.div 
                variants={iconMove(3)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiHtml5 className='text-7xl'/>
                </motion.div>
                <motion.div 
                variants={iconMove(3.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiVite className='text-7xl '/>
                </motion.div>
                <motion.div 
                variants={iconMove(4)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl '/>
                </motion.div>
                <motion.div 
                variants={iconMove(4.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMysql className='text-7xl '/>
                </motion.div>
                <motion.div 
                variants={iconMove(5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssLine className='text-7xl '/>
                </motion.div>
                <motion.div 
                variants={iconMove(6)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiPostgresql className='text-7xl '/>
                </motion.div>
                <motion.div 
                variants={iconMove(7)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiHasura className='text-7xl '/>
                </motion.div>
            </motion.div>
    </div>
  )
}

export default Use
