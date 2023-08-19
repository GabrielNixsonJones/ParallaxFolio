import React from 'react'
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

import { Link } from 'react-scroll';

export const FinalPage = React.memo(() => {

    const ref2 = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "end start"],

    });

    const planetAni2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni4 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

    return (
        <div ref={ref2} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }} id='page11'>
            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(/page11wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni2, backgroundImage: `url(/page11wp/l2.webp)`, backgroundSize: 'cover', zIndex: '-9', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page11wp/l3.webp)`, backgroundSize: 'cover', zIndex: '-8', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni4, zIndex: '-3' }}>
                <img className='crystal' style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='/page11wp/l4.webp' alt='' />

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page11wp/l5.webp)`, backgroundSize: 'cover', zIndex: '-2', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', zIndex: '-1' }}>
                <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='/page11wp/l6.webp' alt='' className='planetGlow2' />
            </motion.div>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', color: 'white', zIndex: 4, fontSize: '4vw', bottom: '30%', cursor: 'pointer' }}

                    whileInView={{
                        y: [10, 40, 10],
                    }}
                    transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                    <Link
                        activeClass="active"
                        to="page1"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={7000}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '3.2vw' }}>Scroll Back</div>
                            <MdKeyboardDoubleArrowUp style={{ margin: '-1.5rem' }} />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', zIndex: '-3', left: '10%' }}
                initial={{ y: -1000, x: 1000 }}
                //animate
                animate={{
                    y: [-1000, 1000],
                    x: [1000, -1000]
                }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.5, delay: 1 }}>
                <img className='planetGlow2' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page11wp/star.webp' alt='' />
            </motion.div>

            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', zIndex: '-4', left: '70%' }}
                initial={{ y: -1000, x: 1000 }}
                //animate
                animate={{
                    y: [-1000, 1000],
                    x: [1000, -1000]
                }}
                transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 2.3, delay: 2.5 }}>
                <img className='planetGlow2' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page11wp/star.webp' alt='' />
            </motion.div>


            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', zIndex: '-3', left: '35%' }}
                initial={{ y: -1000, x: 1000 }}
                //animate
                animate={{
                    y: [-1000, 1000],
                    x: [1000, -1000]
                }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 3, delay: 4 }}>
                <img className='planetGlow2' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page11wp/star.webp' alt='' />
            </motion.div>

            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', zIndex: '-4', left: '48%' }}
                initial={{ y: -1000, x: 1000 }}
                //animate
                animate={{
                    y: [-1000, 1000],
                    x: [1000, -1000]
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.8, delay: 3.5 }}>
                <img className='planetGlow2' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page11wp/star.webp' alt='' />
            </motion.div>

        </div>
    )
})
