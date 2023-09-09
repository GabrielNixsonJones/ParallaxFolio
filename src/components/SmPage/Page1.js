import React from 'react'

import { useRef, useState } from 'react';

import { BsFillMoonStarsFill } from 'react-icons/bs'

import { Squash as Hamburger } from 'hamburger-react'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import { Link } from 'react-scroll';

export const Page1 = () => {

    const ref = useRef(null);

    const [isOpen, setOpen] = useState(false)


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });



    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const land = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);


    return (
        <div ref={ref} style={{ position: 'relative', width: '100vw', height: '100vh' }} className='scroll-section' id='mbp1'>

            <div style={{ position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', height: '8vh', alignItems: 'center', zIndex: '1' }}>
                <div style={{ display: 'flex', marginLeft: '3vw' }}>
                    <BsFillMoonStarsFill style={{ fontSize: '6.5vw', fontWeight: 'bold', paddingTop: '0.4rem', marginRight: '0.5rem' }} /><p style={{ fontSize: '5.5vw', fontWeight: 'bold', margin: '0', paddingTop: '0.3rem' }}>ParallaxFolio</p>
                </div>

                <div style={{ display: 'flex', marginRight: '1.5rem', fontSize: '1.2vw', fontWeight: '600' }}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />

                    {/* <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
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
                        >
                            <div style={{ marginLeft: '2.3vw', marginRight: '2.5', cursor: 'pointer' }}>
                                <p>Contact</p>
                            </div>
                        </Link>
                    </motion.div> */}
                </div>
            </div>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ clipPath: 'inset(10% 50% 90% 50% round 10px)' }}
                            animate={{ clipPath: 'inset(0% 0% 0% 0% round 10px)', type: 'bounce' }}
                            exit={{ clipPath: 'inset(10% 50% 90% 50% round 10px)' }}
                            transition={{ duration: 0.3 }}
                            style={{ position: 'absolute', zIndex: '1', backgroundColor: 'rgba(255, 255, 255, 0.2)', top: '9vh', left: '50%', transform: 'translateX(-50%)', width: '90%', fontSize: '1.2rem', color: 'white', fontWeight: '600', display: 'flex', flexDirection: 'column', gap: '3vh', alignItems: 'center', userSelect: 'none' }}>
                            <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                                <Link
                                    activeClass="active"
                                    to="mbp2"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={2000}
                                    onClick={() => { setOpen(!isOpen) }}
                                >
                                    <p style={{ marginBottom: '0', width: '100%' }}>Home</p>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                                <Link
                                    activeClass="active"
                                    to="mbp4"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={3000}
                                    onClick={() => { setOpen(!isOpen) }}
                                >
                                    <p style={{ margin: '0' }}>About</p>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                                <Link
                                    activeClass="active"
                                    to="mbp6"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={4500}
                                    onClick={() => { setOpen(!isOpen) }}
                                >
                                    <p style={{ margin: '0' }}>Skills</p>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                                <Link
                                    activeClass="active"
                                    to="mbp8"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={5000}
                                    onClick={() => { setOpen(!isOpen) }}
                                >
                                    <p style={{ margin: '0' }}>Projects</p>
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.1, color: '#5D27C3' }} whileTap={{ scale: 0.9 }} >
                                <Link
                                    activeClass="active"
                                    to="mbp10"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={6500}
                                    onClick={() => { setOpen(!isOpen) }}
                                >
                                    <p style={{ marginTop: '0' }}>Contact</p>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <div style={{ position: 'absolute', width: '100%', height: '88%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '-8', flexDirection: 'column' }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Explore Parallax portfolio<br /> Space</h1>
                </div>
            </div>


            <div style={{ position: 'absolute', zIndex: '1', top: '55%', left: '50%', transform: 'translate(-50%,-55%)' }}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} >
                    <Link
                        activeClass="active"
                        to="mbp2"
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

            <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '3%', left: '0', y: textY, backgroundImage: `url(/mbpage1/l2.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '13%', right: '0', y: textY, backgroundImage: `url(/mbpage1/l1.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '50%', height: '40%', top: '60%', left: '2%', y: backgroundY, backgroundImage: `url(/mbpage1/l4.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '25%', height: '40%', top: '48%', right: '2%', y: backgroundY, backgroundImage: `url(/mbpage1/l3.webp)`, backgroundSize: 'contain', zIndex: '-7', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', y: land, backgroundImage: `url(/mbpage1/l5.webp)`, backgroundSize: 'contain', zIndex: '-6', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundPositionY: '100%', backgroundPositionX: '100%' }}>

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '100%', height: '100%', bottom: '0', left: '0', backgroundImage: `url(/mbpage1/l6.webp)`, backgroundSize: 'contain', zIndex: '-5', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundPositionY: '100%', backgroundPositionX: '0%' }}>

            </motion.div>
        </div>
    )
}
