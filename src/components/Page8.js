import React from 'react'
import { useState } from 'react';


import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import { Certificates } from './Certificates';
import Projects from './Projects';

export const Page8 = React.memo(() => {

    const [slideContent, setSlideContent] = useState(true);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', zIndex: '1' }} id='page8'>

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(117,102,209,1) 0%, rgba(26,0,45,1) 57%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <div style={{ width: '90%', height: '90%', paddingBottom: '3%', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white', flexDirection: 'row-reverse', position: 'relative', zIndex: '3' }}>

                <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '50%', display: 'flex', flexDirection: 'column', position: 'relative', alignItems: 'center' }}>

                        <div style={{ height: '45%', width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '10%', justifyContent: 'start' }}>
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}>
                                    <p style={{ margin: '0', fontSize: '3vw', fontWeight: 'bold' }}>Certification and Projects</p>
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
                                    <p style={{ display: 'flex', margin: '0', fontSize: '2.1vw', fontWeight: 'bold' }}>My passion reflected&nbsp;
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

                            <div style={{ display: 'flex', fontSize: '1.7vw', fontWeight: 'bold', marginTop: '1%', marginBottom: '-0.5vw' }}>

                                <motion.div style={{ marginRight: '3%', cursor: 'pointer' }}
                                    initial={{ color: '#F46BE6' }}
                                    whileHover={{ scale: 1.1 }}
                                    animate={{
                                        color: slideContent ? '#F46BE6' : 'white',
                                    }}
                                    exit={{ color: 'white' }}
                                >
                                    <p onClick={() => { setSlideContent(true) }}>Certification</p>
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
                                    <p onClick={() => { setSlideContent(false) }}>Projects</p>
                                </motion.div>
                            </div>

                            <hr style={{ margin: '0' }} />
                        </div>

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
                            <div style={{ display: 'flex', width: '85%', justifyContent: 'center', alignItems: 'center' }}>
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

                <div style={{ width: '40%', position: 'relative' }}>
                    <AnimatePresence>
                        <motion.div style={{ position: 'absolute', width: '70%', height: '70%', left: '15%', top: '10%', zIndex: '2' }}
                            initial={{}}
                            //animate
                            whileInView={{
                                y: [100, 200, 100]
                            }}
                            transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}>
                            <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page8wp/boy.webp' alt='' />

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '20%', height: '20%', top: '3%', left: '3%', zIndex: '2' }}
                    //animate
                    whileInView={{
                        y: [50, 150, 50],

                    }}
                    transition={{ ease: "easeInOut", duration: 15, repeat: Infinity }}>
                    <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l1.webp' alt='' />

                </motion.div>
            </AnimatePresence>

            <AnimatePresence>
                <motion.div style={{ position: 'absolute', width: '20%', height: '20%', top: '20%', left: '30%', backgroundSize: 'cover', zIndex: '1' }}
                    //animate
                    whileInView={{
                        y: [50, 150, 50],

                    }}
                    transition={{ ease: "easeInOut", duration: 12, repeat: Infinity }}>
                    <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page4wp/l3.webp' alt='' />

                </motion.div>
            </AnimatePresence>


            <AnimatePresence>
                <motion.div style={{ position: 'absolute', color: 'white', zIndex: 4, fontSize: '4vw', bottom: '4.3%', cursor: 'pointer' }}
                    //animate
                    whileInView={{
                        y: [10, 40, 10],
                    }}
                    transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                    <Link
                        activeClass="active"
                        to="page10"
                        spy={true}
                        smooth={true}
                        ignoreCancelEvents={true}
                        offset={0}
                        duration={3500}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '3.2vm' }}>Next</div>
                            <MdOutlineKeyboardArrowDown style={{ margin: '-1.5rem' }} />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

        </div >
    )
})
