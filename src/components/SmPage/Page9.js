import React from 'react'
import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const Page9 = React.memo(() => {

    const ref2 = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "end start"],

    });

    const planetAni2 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
    const planetAni3 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni4 = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);

    return (
        <div ref={ref2} style={{ position: 'relative', width: '100vw', height: '100vh', overflowX: 'clip' }} id='page5'>
            <motion.div style={{ position: 'absolute', width: '100%', height: '120%', backgroundImage: `url(/page9wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '50%', height: '50%', bottom: '0%', left: '30%', y: planetAni2, backgroundImage: `url(/mbpage9/l4.webp)`, backgroundSize: 'contain', zIndex: '-9', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '35%', height: '15%', top: '0', y: planetAni3, left: '60%', backgroundImage: `url(/mbpage9/l2.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '35%', height: '15%', top: '25%', y: planetAni3, left: '15%', backgroundImage: `url(/mbpage9/l5.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni4, backgroundImage: `url(/mbpage9/l3.webp)`, backgroundSize: 'contain', zIndex: '-6', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundPositionY: '100%', backgroundPositionX: '100%' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '0', backgroundImage: `url(/mbpage9/l1.webp)`, backgroundSize: 'contain', zIndex: '-5', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundPositionY: '100%', backgroundPositionX: '0%' }}>

            </motion.div>



            <div style={{ position: 'absolute', zIndex: '-3', color: '#ffffff', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '0 0 0.5rem black' }}>
                <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Contact</p>
            </div>

        </div>
    )
})
