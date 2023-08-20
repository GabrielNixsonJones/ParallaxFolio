import React from 'react'
import { useRef } from 'react';

import { motion } from 'framer-motion';

export const MobileView = React.memo(() => {

    const ref2 = useRef(null);

    return (
        <div ref={ref2} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }} id='page11'>
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(/page11wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

            </div>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page11wp/l2.webp)`, backgroundSize: 'cover', zIndex: '-9', backgroundPosition: 'center' }}>

            </div>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page11wp/l3.webp)`, backgroundSize: 'cover', zIndex: '-8', backgroundPosition: 'center' }}>

            </div>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', zIndex: '-3' }}>
                <img className='crystal' style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='/page11wp/l4.webp' alt='' />

            </div>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page11wp/l5.webp)`, backgroundSize: 'cover', zIndex: '-2', backgroundPosition: 'center' }}>

            </div>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', zIndex: '-1' }}>
                <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src='/page11wp/l6.webp' alt='' className='planetGlow2' />
            </div>

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

            <div style={{ width: '90%', position: 'absolute', zIndex: '1', color: '#ffffff', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0 0 0.5rem black' }}>
                <motion.div
                    whileInView={{
                        y: [10, 40, 10],
                    }}
                    transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                    <p style={{ fontSize: '5vw', fontWeight: 'bold', textAlign: 'center' }}>parallaxfolio mobile version is under Development Please visit site in PC or Desktop</p>
                </motion.div>
            </div>


        </div>
    )
})
