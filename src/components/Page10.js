import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import emailjs from '@emailjs/browser';

import { Link } from 'react-scroll';

import Typewriter from 'typewriter-effect';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';

export const Page10 = () => {

    // useEffect(() => {
    //     let api_key =
    //         "3C79D494C344554C61649064E973B3C39B6284295F03E214419C000144DA15999438D15911F1EDB1A6A4560CB149DEC4";

    //     var client = elasticemail.createClient({
    //         apiKey: api_key,
    //     });

    //     var msg = {
    //         from: "jgabigabi2001@gmail.com",
    //         to: "jgabigabi2001@gmail.com",
    //         subject: "warm grettings",
    //         body_text: "welcome my todomachi",
    //     };

    //     client.mailer.send(msg, function (err, result) {
    //         if (err) {
    //             return console.error(err);
    //         }

    //         console.log(result);
    //     })
    // })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jrto52s', 'template_5o23e7d', form.current, 'fLtp9pirLhYgt4ITW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', zIndex: '1' }} id='page10'>

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(12,22,75,1) 0%, rgba(30,0,52,1) 57%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <div style={{ width: '90%', height: '90%', paddingBottom: '3%', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white', position: 'relative', zIndex: '3' }}>

                <div style={{ width: '50%', display: 'flex', alignItems: 'center' }}>
                    <div style={{}}>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}>
                                <p style={{ margin: '0', fontSize: '3vw', fontWeight: 'bold' }}>Contact Me</p>
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
                                <p style={{ display: 'flex', margin: '0', fontSize: '2.1vw', fontWeight: 'bold' }}>Let's&nbsp;
                                    <span style={{ color: '#F46BE6' }}>
                                        <Typewriter
                                            style={{ fontSize: '2.5vw' }}
                                            options={{
                                                strings: ["Connect", "Chat", "Code"],
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
                                transition={{ duration: 1 }}>
                                <p style={{ fontSize: '1.1vw', fontWeight: '500', textIndent: '1.8vw' }}>
                                    If you're looking for a developer who's not only skilled but also passionate about their craft, let's connect.
                                    I'm excited to contribute my expertise and collaborate on dynamic projects. Whether you're a fellow developer,
                                    potential collaborator, or just someone who shares my enthusiasm for web development, I'd love to hear from you.
                                </p>

                                <p style={{ fontSize: '1.1vw', fontWeight: '500', textIndent: '1.8vw' }}>
                                    Feel free to reach out through email or connect with me on LinkedIn. Let's turn ideas into reality and
                                    Turning code into memorable experiences.
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <motion.div style={{ display: 'flex', fontSize: '1.85vw' }}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <div style={{ margin: '1vw' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://github.com/GabrielNixsonJones'><BsFacebook style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1vw' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://github.com/GabrielNixsonJones'><BsGithub style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1vw' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gabriel-nixson-jones-351b26239'><BsLinkedin style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>

                            <div style={{ margin: '1vw' }}>
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jgabigabi2001@gmail.com'><BiLogoGmail style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                <motion.div style={{ width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '2vw', paddingTop: '3vw' }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>

                    <form ref={form} onSubmit={sendEmail} style={{ width: '100%' }}>

                        <input className='inputText' type="text" name="user_name" placeholder='Enter Your Name' style={{ width: '100%', height: '2.2vw', fontSize: '0.9vw', outline: 'none', textIndent: '0.7vw', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '0.2vw' }} />

                        <input className='inputText' type="email" name="user_email" placeholder='Enter Your Email' style={{ width: '100%', height: '2.2vw', fontSize: '0.9vw', outline: 'none', textIndent: '0.7vw', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '0.2vw' }} />

                        <input className='inputText' type="text" name="user_subject" placeholder='Enter Your Subject' style={{ width: '100%', height: '2.2vw', fontSize: '0.9vw', outline: 'none', textIndent: '0.7vw', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '0.2vw' }} />

                        <textarea name="message" className='inputText' placeholder='Enter Your Message' style={{ width: '100%', height: '6vw', fontSize: '1vw', outline: 'none', textIndent: '0.7vw', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '0.2vw', marginTop: '1vw' }} rows="5"></textarea>

                        <motion.input value="Send" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} type='submit' className='button-63' style={{ width: '100%', margin: '0.2vw', marginLeft: '0.5vw' }}></motion.input>

                    </form>

                </motion.div>

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
                        to="page11"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={3500}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ fontSize: '3.2vw' }}>Next</div>
                            <MdOutlineKeyboardArrowDown style={{ margin: '-1.5rem' }} />
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

        </div >
    )
}
