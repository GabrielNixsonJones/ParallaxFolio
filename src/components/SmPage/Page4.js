import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import resume from '../resume/Gabrie_J_Resume.pdf'

export const Page4 = () => {

    const handleDownload = () => {
        const pdfUrl = resume;

        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.target = '_blank';
        anchor.download = 'your-pdf-file.pdf';
        anchor.click();
        window.open(pdfUrl, '_blank');
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', zIndex: '1' }} id='mbp4'>

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(83,16,38,1) 0%, rgba(162,72,123,1) 68%, rgba(252,135,219,1) 100%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <div style={{ width: '90%', height: '90%', paddingBottom: '3%', borderRadius: '1rem', display: 'flex', color: 'white', position: 'relative', zIndex: '3', flexWrap: 'wrap' }}>

                <div style={{ width: '100%', height: '70%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{}}>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}>
                                <p style={{ margin: '0', fontSize: '2.2rem', fontWeight: 'bold' }}>About Me</p>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence>
                            <motion.div
                                initial={{
                                    y: 50,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{ duration: 1 }}>
                                <p style={{ display: 'flex', margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>Introduction&nbsp;
                                    <span style={{ color: '#F46BE6' }}>
                                        <Typewriter
                                            style={{ fontSize: '2rem' }}
                                            options={{
                                                strings: ["About Me", "To My approach"],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                style={{ height: '35.6vh', overflow: 'auto', marginTop: '1rem', paddingRight: '0.2rem' }}>
                                <p style={{ fontSize: '1.1rem', fontWeight: '400', textIndent: '1rem', margin: '0' }}>
                                    Hey there! I'm Gabriel, a passionate and motivated Full Stack Web Developer with a strong knowledge towards the MERN stack.
                                    As a fresher in the web development world, I'm excited to create immersive web experiences that engage users and solve real-world problems.
                                    My journey into the world of web development started with a curious mind and a desire to bring my creative ideas to life.
                                    I immersed myself in learning front-end technologies like HTML, CSS, and JavaScript, manifest the art of crafting visually appealing and interactive user interfaces.
                                    As I develop deeper, I realized that the true magic happens when the front-end and back-end seamlessly collaborate. This discovery led me to explore the MERN stack MongoDB, Express, React, and Node.js

                                    <p style={{ fontSize: '1.1rem', fontWeight: '400', textIndent: '1rem' }}>
                                        I approach every project with curiosity and a commitment to continuous learning. I believe that the best solutions come from collaboration and a deep understanding of user needs.
                                        I'm not afraid to step out of my comfort zone and tackle new challenges head-on, whether it's learning a new framework or exploring innovative design patterns
                                    </p>

                                    <p style={{ fontSize: '1.1rem', fontWeight: '400', textIndent: '1rem' }}>
                                        feel free to reach out! I'm excited to connect with like-minded individuals and continue growing in this dynamic field
                                    </p>
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* <AnimatePresence>
                            <motion.div style={{ position: 'absolute', zIndex: '3' }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} >
                                <button onClick={handleDownload} className='button-63' style={{ backgroundImage: 'linear-gradient(144deg, #97156C, #5C0A47 50%, #BB249C)' }}>Download Resume</button>
                            </motion.div>
                        </AnimatePresence> */}
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <button onClick={handleDownload} className='button-63' style={{ backgroundImage: 'linear-gradient(144deg, #97156C, #5C0A47 50%, #BB249C)' }}>Download Resume</button>
                    </div>

                </div>

                <div style={{ width: '100%', position: 'relative', height: '30%' }}>
                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '70%', height: '70%', left: '15%', top: '25%', zIndex: '2' }}
                            initial={{}}
                            //animate
                            whileInView={{
                                y: [-20, 20, -20]
                            }}
                            transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l4.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '3%', left: '13%', zIndex: '2' }}
                            //animate
                            whileInView={{
                                y: [20, -20, 20],

                            }}
                            transition={{ ease: "easeInOut", duration: 15, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l1.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '30%', height: '30%', top: '20%', left: '65%', backgroundSize: 'cover', zIndex: '1' }}
                            //animate
                            whileInView={{
                                y: [20, -20, 20],

                            }}
                            transition={{ ease: "easeInOut", duration: 12, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l3.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', color: 'white', zIndex: 4, fontSize: '4vw', bottom: '4.3%', cursor: 'pointer' }}
                    //animate
                    whileInView={{
                        y: [10, 40, 10],
                    }}
                    transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                    <Link
                        activeClass="active"
                        to="mbp6"
                        spy={true}
                        smooth={true}
                        ignoreCancelEvents={true}
                        offset={0}
                        duration={3500}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '3.2vw' }}>Next</div>
                            <MdOutlineKeyboardArrowDown style={{}} />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

        </div >
    )
}
