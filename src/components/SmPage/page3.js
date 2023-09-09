import React from 'react'
import { useRef } from 'react';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export const Page3 = React.memo(({ parentRef }) => {



    const ref = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],

    });

    const planetAni1 = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);
    const planetAni2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni3 = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);
    const planetAni4 = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);
    const planetAni5 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
    const planetAni6 = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);
    const rockesAni = useTransform(scrollYProgress, [0, 1], ["0", "2"]);


    return (
        <div ref={ref} style={{ position: 'relative', width: '100vw', height: '100vh', overflowX: 'clip' }} id='page3'>
            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(page3wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-10', backgroundPosition: 'center' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni1, backgroundImage: `url(/page3wp/l2.webp)`, backgroundSize: 'cover', zIndex: '-9', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni2, backgroundImage: `url(/page3wp/l3.webp')`, backgroundSize: 'cover', zIndex: '-8', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni3, backgroundImage: `url(/page3wp/l4.webp)`, backgroundSize: 'cover', zIndex: '-7', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni4, backgroundImage: `url(/page3wp/l5.webp)`, backgroundSize: 'cover', zIndex: '-5', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni5, backgroundImage: `url(/page3wp/l6.webp)`, backgroundSize: 'cover', zIndex: '-5', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: planetAni6, backgroundImage: `url(/page3wp/l7.webp)`, backgroundSize: 'cover', zIndex: '-4', backgroundPosition: 'center', willChange: 'transform' }}>

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', scale: rockesAni, backgroundImage: `url(/page3wp/l8.webp)`, backgroundSize: 'cover', zIndex: '-2', backgroundPosition: 'center', willChange: 'scale' }}>

                </motion.div>
            </AnimatePresence>

            <div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page3wp/l9.webp)`, backgroundSize: 'contain', zIndex: '-1', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>

            </div>

            <div style={{ position: 'absolute', zIndex: '-3', color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p style={{ fontSize: '2.3rem', fontWeight: 'bold' }}>About Me</p>
            </div>

        </div>
    )
})
