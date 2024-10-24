import React from 'react'
import { motion } from 'framer-motion'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0, 
    opacity: 1,
    transition: {duration: 0.5, delay: delay},
  },
});

function Body() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible" 
                    className=' pb-3 text-2xl font-thin lg:mt-16 tracking-tight lg:text-8xl'>
                        Hi, I'm David Ezra Prasetyo
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                         a Junior Front End Engineer
                        </motion.span>
                </div>
            </div> 
        </div>
      
    </div>
  )
}

export default Body

