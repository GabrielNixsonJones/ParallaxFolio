import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export const Page6 = React.memo(() => {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', color: 'white', flexDirection: 'column', textAlign: 'center' }} id="page6">

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(64,27,115,1) 0%, rgba(42,30,129,1) 88%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <motion.div style={{ position: 'absolute', width: '40%', height: '40%', zIndex: '2' }}
                initial={{}}
                //animate
                whileInView={{
                    y: [0, 100, 0]
                }}
                transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}>
                <img className='landGlow' style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='/page6wp/boy.webp' alt='' />

            </motion.div>

            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', top: '9%', left: '-2%' }}
                animate={{
                    y: [50, 100, 50],

                }}
                transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}>
                <img className='Glow' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/planet 2.webp' alt='' />
            </motion.div>

            <motion.div style={{ position: 'absolute', width: '20%', height: '20%', top: '75%', left: '80%' }}
                animate={{
                    y: [0, -100, 0],

                }}
                transition={{ ease: "easeInOut", duration: 7, repeat: Infinity }}>
                <img className='planetGlow2' style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/planet1.webp' alt='' />
            </motion.div>

            <motion.div style={{ position: 'absolute', width: '10%', height: '10%', zIndex: '-1' }}
                initial={{ y: 600, x: -600 }}
                //animate
                animate={{
                    y: [600, -600],
                    x: [-600, 600]
                }}
                transition={{ ease: "easeInOut", duration: 5, repeat: Infinity, repeatDelay: 2 }}>
                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/rocket.webp' alt='' />
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
                <p style={{ display: 'flex', margin: '2rem', fontSize: '3.4vw', fontWeight: 'bold' }}>My&nbsp;
                    <span style={{ color: '#F46BE6' }}>
                        <Typewriter
                            style={{ fontSize: '2.8rem' }}
                            options={{
                                strings: ["Skills", "Experties", "Strength"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </p>
            </motion.div>

            <div style={{ height: '100%', width: '90%', display: 'flex', justifyContent: 'space-between' }}>

                <div style={{ width: '50%', height: '100%', justifyContent: 'center' }}>

                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <h1>Technical skills</h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(1rem, 5.5rem))', gridColumnGap: '8vw', justifyContent: 'center', fontWeight: 'bold', fontSize: '1vw' }}>
                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/html.webp' alt='' />
                            </div>
                            <p>HTML</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/css.webp' alt='' />
                            </div>
                            <p>CSS</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/javascript.webp' alt='' />
                            </div>
                            <p>JavaScript</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/Bootstrap.webp' alt='' />
                            </div>
                            <p>Bootstrap</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/react.webp' alt='' />
                            </div>
                            <p>React</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/Node.webp' alt='' />
                            </div>
                            <p>Node.js</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/MongoDB.webp' alt='' />
                            </div>
                            <p>MongoDB</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/github.webp' alt='' />
                            </div>
                            <p>GitHub</p>
                        </div>
                    </div>


                </div>

                <div style={{ width: '50%', height: '100%' }}>

                    <div style={{ textAlign: 'center' }}>
                        <h1>Professional skills</h1>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(1rem, 9rem))', gridColumnGap: '6.5vw', justifyContent: 'center', fontWeight: 'bold', fontSize: '1vw' }}>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/teamWork.webp' alt='' />
                            </div>
                            <p>Team Player</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/creativity.webp' alt='' />
                            </div>
                            <p>creative</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/problemSolving.webp' alt='' />
                            </div>
                            <p>Problem Solving</p>
                        </div>

                        <div style={{ aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <div style={{ aspectRatio: '1/1' }}>
                                <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src='/page6wp/communication.webp' alt='' />
                            </div>
                            <p>communicative</p>
                        </div>

                    </div>


                </div>
            </div>

            <motion.div style={{ position: 'absolute', color: 'white', zIndex: 4, fontSize: '4vw', bottom: '4.3%', cursor: 'pointer' }}
                // animate
                whileInView={{
                    y: [10, 40, 10],
                }}
                transition={{ ease: "easeInOut", duration: 4, repeat: Infinity }}>
                <Link
                    activeClass="active"
                    to="page8"
                    spy={true}
                    smooth={true}
                    ignoreCancelEvents={true}
                    offset={0}
                    duration={3500}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '3.2vw' }}>Next</div>
                        <MdOutlineKeyboardArrowDown style={{ margin: '-1.5rem' }} />
                    </div>
                </Link>
            </motion.div>

        </div>
    )
})
