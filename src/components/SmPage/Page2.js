import React from 'react'
import { useRef } from 'react';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

import { motion } from 'framer-motion';

export const Page2 = React.memo(() => {

    const ref = useRef(null);



    return (
        <div ref={ref} style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, rgba(26,0,84,1) 5%, rgba(18,0,22,1) 100%)', overflow: 'clip' }} id="mbp2">

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            </div>

            <div style={{ width: '90%', height: '90%', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white', flexWrap: 'wrap' }}>

                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%' }}>
                        <motion.div
                            initial={{
                                y: -50,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{ duration: 1 }}>
                            <p style={{ margin: '0', fontSize: '1.7rem', fontWeight: 'bold' }}>Hello, It's me</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <p style={{ margin: '0', fontSize: '2.2rem', fontWeight: 'bold' }}>Gabriel N.Jones</p>
                        </motion.div>


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
                            <p style={{ display: 'flex', margin: '0', fontSize: '1.55rem', fontWeight: 'bold' }}>And I'm a&nbsp;
                                <span style={{ color: '#F46BE6' }}>
                                    <Typewriter
                                        style={{ fontSize: '2.2rem' }}
                                        options={{
                                            strings: ["Web developer", "FrontEnd Developer", "Fresher"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <p style={{ fontSize: '1.1rem', fontWeight: '400' }}>
                                I'm a passionate full-stack developer, skilled in MERN stack.
                                With a range of hands-on projects, I've sharpened my abilities in
                                creating user-friendly web applications by creating many web sites as an hobby.
                                Eager to learn and collaborate, I'm ready to contribute my fresh
                                perspective and problem-solving skills to dynamic terms.
                            </p>
                        </motion.div>

                        <motion.div style={{ display: 'flex', fontSize: '1.5rem' }}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <div style={{ margin: '1rem' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://github.com/GabrielNixsonJones'><BsFacebook style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1rem' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://github.com/GabrielNixsonJones' ><BsGithub style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1rem' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gabriel-nixson-jones-351b26239'><BsLinkedin style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1rem' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jgabigabi2001@gmail.com'><BiLogoGmail style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div style={{ width: '100%', position: 'relative' }}>
                    <motion.div style={{ position: 'absolute', width: '80%', height: '80%', backgroundImage: `url(/page2wp/spaceBoy.webp)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', left: '25%', top: '-20%' }}
                        initial={{ rotate: -25 }}
                        animate={{
                            y: [-30, 30, -30]
                        }}
                        transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
                    >

                    </motion.div>

                    <motion.div style={{ position: 'absolute', width: '10%', height: '10%', top: '-5%', left: '15%', zIndex: '2' }}
                        animate={{
                            y: [-30, 30, -30],
                            rotate: [30, -30, 30]
                        }}
                        transition={{ ease: "easeInOut", duration: 15, repeat: Infinity }}
                    >
                        <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'cover' }} src='/page2wp/a5.webp' alt='' />

                    </motion.div>

                    <motion.div style={{ position: 'absolute', width: '10%', height: '10%', top: '30%', left: '30%', backgroundSize: 'cover', zIndex: '2' }}
                        animate={{
                            y: [-30, 30, -30],
                            rotate: [45, -30, 45]
                        }}
                        transition={{ ease: "easeInOut", duration: 12, repeat: Infinity }}
                    >
                        <img className='crystal' style={{ width: '100%', height: '100%', objectFit: 'cover' }} src='/page2wp/crystal.webp' alt='' />

                    </motion.div>
                </div>

            </div>



            <motion.div style={{ position: 'absolute', color: 'white', zIndex: 3, fontSize: '4vw', bottom: '4.3%', cursor: 'pointer' }}
                animate={{
                    y: [10, 40, 10],
                }}
                transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                <Link
                    activeClass="active"
                    to="mbp4"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={3500}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '3.2vm' }}>Next</div>
                        <MdOutlineKeyboardArrowDown style={{}} />
                    </div>
                </Link>
            </motion.div>

        </div >


    )
})
