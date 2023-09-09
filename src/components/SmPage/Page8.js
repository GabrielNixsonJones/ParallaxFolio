import React from 'react'
import { useState } from 'react';


import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { Certificates } from './CertificatesCopy';
import Projects from './ProjectsCopy';

export const Page8 = React.memo(() => {

    const [slideContent, setSlideContent] = useState(true);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', zIndex: '1' }} id='mbp8'>

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(117,102,209,1) 0%, rgba(26,0,45,1) 57%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <div style={{ width: '90%', height: '90%', paddingBottom: '3%', borderRadius: '1rem', display: 'flex', color: 'white', flexDirection: 'row-reverse', position: 'relative', zIndex: '3', flexWrap: 'wrap' }}>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '80%', display: 'flex', flexDirection: 'column', position: 'relative' }}>


                        <div>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}>
                                    <p style={{ margin: '0', fontSize: '2.2rem', fontWeight: 'bold' }}>Certification and Projects</p>
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
                                    <p style={{ margin: '0', fontSize: '1.7rem', fontWeight: 'bold' }}>My passion reflected&nbsp;
                                        <span style={{ color: '#F46BE6' }}>
                                            <Typewriter
                                                style={{ fontSize: '2.8rem' }}
                                                options={{
                                                    strings: ["As Project", "As Course"],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div style={{ width: '100%' }}>
                            <div style={{ display: 'flex', fontSize: '1.5rem', fontWeight: 'bold', justifyContent: 'start', margin: '1rem' }}>

                                <motion.div style={{ marginRight: '3%', cursor: 'pointer' }}
                                    initial={{ color: '#F46BE6' }}
                                    whileHover={{ scale: 1.1 }}
                                    animate={{
                                        color: slideContent ? '#F46BE6' : 'white',
                                    }}
                                    exit={{ color: 'white' }}
                                >
                                    <p style={{ margin: '0' }} onClick={() => { setSlideContent(true) }}>Certification</p>
                                </motion.div>

                                <motion.div
                                    style={{ cursor: 'pointer' }}
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ color: 'white' }}
                                    animate={{
                                        color: slideContent ? 'white' : '#F46BE6',
                                    }}
                                    exit={{ color: 'white' }}
                                >
                                    <p style={{ margin: '0' }} onClick={() => { setSlideContent(false) }}>Projects</p>
                                </motion.div>
                            </div>

                            <hr />

                        </div>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



                            {slideContent ? (
                                <div style={{ display: 'flex', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                                    <motion.div
                                        style={{ width: '100%' }}
                                        key="first"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}

                                        transition={{ duration: 0.5 }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>


                                            <Certificates />

                                        </div>
                                    </motion.div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <motion.div
                                        style={{ width: '100%' }}
                                        key="second"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}

                                        transition={{ duration: 0.5 }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                                            <Projects />

                                        </div>
                                    </motion.div>
                                </div>
                            )}

                        </div>

                    </div>


                </div>

                <div style={{ width: '100%', position: 'relative' }}>
                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '100%', height: '100%', left: '5%', top: '-10%', zIndex: '2' }}
                            initial={{}}
                            //animate
                            whileInView={{
                                y: [20, -20, 20]
                            }}
                            transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '95%', height: '95%', objectFit: 'contain' }} src='/page8wp/boy.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '45%', height: '45%', top: '-40%', left: '5%', zIndex: '2' }}
                            //animate
                            whileInView={{
                                y: [20, -20, 20],

                            }}
                            transition={{ ease: "easeInOut", duration: 15, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l1.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '45%', height: '45%', top: '-30%', left: '55%', backgroundSize: 'cover', zIndex: '1' }}
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
                        to="mbp10"
                        spy={true}
                        smooth={true}
                        ignoreCancelEvents={true}
                        offset={0}
                        duration={3500}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '3.2vm' }}>Next</div>
                            <MdOutlineKeyboardArrowDown style={{}} />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

        </div >
    )
})
