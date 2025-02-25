import React from 'react'
import Aboutimg from "../../assets/Profile.png"
import { HERO_CONTENT } from '../../constant/constant'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About Me</h2>
            <div className='flex flex-wrap'>
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x: -100 }}
                    transition={{duration: 0.5}}
                className='w-full lg:w-1/2 '>
                    <div className='flex items-center justify-center'>
                        <img
                        className='rounded-2xl h-[5cm]' src={Aboutimg} alt="" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x: 100 }}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2'>
                    <div className='flex items-center justify-center'>
                        <p className='my-2 max-w-xl text-justify'>
                            {HERO_CONTENT}
                        </p>
                    </div>
                </motion.div>
            </div>
    </div>
  )
}

export default About
