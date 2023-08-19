import React from 'react'
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const Page5 = React.memo(() => {

    const ref2 = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "end start"],

    });

    const planetAni1 = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
    const planetAni2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni3 = useTransform(scrollYProgress, [0, 1], ["-80%", "80%"]);
    const planetAni4 = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);

    return (
        <div ref={ref2} style={{ position: 'relative', width: '100vw', height: '100vh', overflowX: 'clip' }} id='page5'>
            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(/page5wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni1, backgroundImage: `url(/page5wp/l2.webp)`, backgroundSize: 'cover', zIndex: '-9', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni2, backgroundImage: `url(/page5wp/l3.webp)`, backgroundSize: 'cover', zIndex: '-8', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni3, backgroundImage: `url(/page5wp/l4.webp)`, backgroundSize: 'cover', zIndex: '-7', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni4, backgroundImage: `url(/page5wp/l5.webp)`, backgroundSize: 'cover', zIndex: '-5', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni4, zIndex: '-5' }}>
                <img src='/page5wp/l6.webp' alt='' className='glowSpots2' />

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page5wp/l7.webp)`, backgroundSize: 'cover', zIndex: '-4', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', zIndex: '-2' }}>
                <img src='/page5wp/l8.webp' alt='' className='glowSpots' />
            </motion.div>



            <div style={{ position: 'absolute', zIndex: '-3', color: '#ffffff', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0 0 0.5rem black' }}>
                <p style={{ fontSize: '3vw', fontWeight: 'bold' }}>My skills</p>
            </div>

        </div>
    )
})
