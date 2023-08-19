import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-scroll';

import { Page2 } from './Page2';
import { Page3 } from './page3';
import { Page4 } from './Page4';
import { Page5 } from './Page5';
import { Page6 } from './Page6';
import { Page7 } from './Page7';
import { Page8 } from './Page8';
import { Page9 } from './Page9';
import { Page10 } from './Page10';
import { FinalPage } from './FinalPage';

import { BsFillMoonStarsFill } from 'react-icons/bs'

import { motion, useScroll, useTransform } from 'framer-motion';

export const HomePage = () => {

    const ref = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });



    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const land = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);


    return (
        <div >


            <div ref={ref} style={{ position: 'relative', width: '100vw', height: '100vh' }} className='scroll-section' id='page1'>

                <div style={{ position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', height: '4vw', alignItems: 'center', zIndex: '1' }}>
                    <div style={{ display: 'flex', marginLeft: '2.5rem' }}>
                        <BsFillMoonStarsFill style={{ fontSize: '2vw', fontWeight: 'bold', paddingTop: '0.4rem', marginRight: '0.5rem' }} /><p style={{ fontSize: '1.6vw', fontWeight: 'bold', margin: '0', paddingTop: '0.3rem' }}>ParallaxFolio</p>
                    </div>

                    <div style={{ display: 'flex', marginRight: '5.5rem', fontSize: '1.2vw', fontWeight: '600' }}>

                        <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                            <Link
                                activeClass="active"
                                to="target-element"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={2000}
                            >
                                <div style={{ marginLeft: '2.3vw', marginRight: '2.3', cursor: 'pointer' }}>
                                    <p>Home</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                            <Link
                                activeClass="active"
                                to="page4"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={3000}
                            >
                                <div style={{ marginLeft: '2.3vw', marginRight: '2.5', cursor: 'pointer' }}>
                                    <p>About</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                            <Link
                                activeClass="active"
                                to="page6"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={4500}
                                ignoreCancelEvents={true}
                            >
                                <div style={{ marginLeft: '2.3vw', marginRight: '2.5', cursor: 'pointer' }}>
                                    <p>Skills</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                            <Link
                                activeClass="active"
                                to="page8"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={5000}
                                ignoreCancelEvents={true}
                            >
                                <div style={{ marginLeft: '2.3vw', marginRight: '2.5', cursor: 'pointer' }}>
                                    <p>Projects</p>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                            <Link
                                activeClass="active"
                                to="page10"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={6500}
                                ignoreCancelEvents={true}
                            >
                                <div style={{ marginLeft: '2.3vw', marginRight: '2.5', cursor: 'pointer' }}>
                                    <p>Contact</p>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <div style={{ position: 'absolute', width: '100%', height: '88%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '-8', flexDirection: 'column' }}>
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Explore Parallax portfolio<br /> Space</h1>
                    </div>
                </div>


                <div style={{ position: 'absolute', zIndex: '1', top: '55%', left: '50%', transform: 'translate(-50%,-55%)' }}>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} >
                        <Link
                            activeClass="active"
                            to="target-element"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={2000}
                        >
                            <button className='button-63'>Explore</button>
                        </Link>
                    </motion.div>
                </div>

                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(/page1wp/l1.webp)`, backgroundSize: 'cover', zIndex: '-9', backgroundPosition: 'center' }}>

                </motion.div>

                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: textY, backgroundImage: `url(page1wp/l2.webp)`, backgroundSize: 'cover', zIndex: '-8', backgroundPosition: 'center' }}>

                </motion.div>

                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: backgroundY, backgroundImage: `url(/page1wp/l3.webp)`, backgroundSize: 'cover', zIndex: '-7', backgroundPosition: 'center' }}>

                </motion.div>

                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: land, backgroundImage: `url(/page1wp/l4.webp)`, backgroundSize: 'cover', zIndex: '-6', backgroundPosition: 'center' }}>

                </motion.div>

                <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', backgroundImage: `url(/page1wp/l5.webp)`, backgroundSize: 'cover', zIndex: '-5', backgroundPosition: 'center' }}>

                </motion.div>
            </div>

            <div>
                <Page2 />
            </div>

            <div>
                <Page3 />
            </div>

            <div>
                <Page4 />
            </div>

            <div>
                <Page5 />
            </div>

            <div>
                <Page6 />
            </div>

            <div>
                <Page7 />
            </div>

            <div>
                <Page8 />
            </div>

            <div>
                <Page9 />
            </div>

            <div>
                <Page10 />
            </div>

            <div>
                <FinalPage />
            </div>

        </div>



    )
}
