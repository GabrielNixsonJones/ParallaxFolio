import React from 'react'
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const Page7 = React.memo(() => {

    const ref2 = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "end start"],

    });

    const planetAni1 = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
    const planetAni2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni3 = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

    return (
        <div ref={ref2} style={{ position: 'relative', width: '100vw', height: '100vh', overflowX: 'clip' }} id='page5'>
            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(/page7wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '13%', right: '0', y: planetAni1, backgroundImage: `url(/mbpage7/l3.webp)`, backgroundSize: 'contain', zIndex: '-8', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '40%', height: '40%', top: '0%', left: '2%', y: planetAni2, backgroundImage: `url(/page6wp/planet1.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '70%', left: '35%', y: planetAni3, backgroundImage: `url(/mbpage7/l2.webp)`, backgroundSize: 'contain', zIndex: '-6', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '0', backgroundImage: `url(/mbpage7/l1.webp)`, backgroundSize: 'contain', zIndex: '-5', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundPositionY: '100%', backgroundPositionX: '0%' }}>

            </motion.div>



            <div style={{ position: 'absolute', zIndex: '-3', color: '#ffffff', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0 0 0.5rem black' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Certificates & projects</p>
            </div>

        </div>
    )
})
