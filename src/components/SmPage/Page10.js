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
                console.log(result);
                if (result.text === 'OK') {
                    alert('message sent succesfully');
                    form.current.reset()
                }
                else {
                    alert('message failed try again')
                }
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'clip', zIndex: '1' }} id='mbp10'>

            <div style={{ position: 'absolute', height: '100%', width: '100%', background: 'linear-gradient(180deg, rgba(12,22,75,1) 0%, rgba(30,0,52,1) 57%)', zIndex: '-2' }}>

            </div>

            <div style={{ position: 'absolute', height: '100%', width: '100%', backgroundImage: `url(/page2wp/p2bg2.webp)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: '-1' }}>

            </div>

            <div style={{ width: '90%', height: '90%', paddingBottom: '3%', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', color: 'white', position: 'relative', zIndex: '3', flexWrap: 'wrap' }}>

                <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{}}>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}>
                                <p style={{ margin: '0', fontSize: '2.5rem', fontWeight: 'bold' }}>Contact Me</p>
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
                                <p style={{ display: 'flex', margin: '0', fontSize: '1.7rem', fontWeight: 'bold' }}>Let's&nbsp;
                                    <span style={{ color: '#F46BE6' }}>
                                        <Typewriter
                                            style={{ fontSize: '2rem' }}
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
                                transition={{ duration: 1 }}
                                style={{ height: '28vh', overflow: 'auto', marginBottom: '1rem', marginTop: '1rem' }}>
                                <p style={{ fontSize: '1.1rem', fontWeight: '400', textIndent: '1rem', margin: '0' }}>
                                    If you're looking for a developer who's not only skilled but also passionate about their craft, let's connect.
                                    I'm excited to contribute my expertise and collaborate on dynamic projects. Whether you're a fellow developer,
                                    potential collaborator, or just someone who shares my enthusiasm for web development, I'd love to hear from you.
                                </p>

                                <p style={{ fontSize: '1.1rem', fontWeight: '400', textIndent: '1rem' }}>
                                    Feel free to reach out through email or connect with me on LinkedIn. Let's turn ideas into reality and
                                    Turning code into memorable experiences.
                                </p>
                            </motion.div>
                        </AnimatePresence>

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
                                    <a style={{ textDecoration: 'none', color: 'inherit' }} target="_blank" rel="noreferrer" href='https://github.com/GabrielNixsonJones'><BsGithub style={{ filter: 'drop-shadow(0px 0px 1rem rgba(0, 152, 247, 10))' }} /></a>
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

                <motion.div style={{ width: '100%', height: '35%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2vw', paddingTop: '3vw' }}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>

                    <form ref={form} onSubmit={sendEmail} style={{ width: '100%', height: '100%', marginBottom: '5rem' }}>

                        <input className='inputText' type="text" name="user_name" placeholder='Enter Your Name' style={{ width: '96%', height: '15%', fontSize: '0.9rem', outline: 'none', textIndent: '0.7rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '2%' }} />

                        <input className='inputText' type="email" name="user_email" placeholder='Enter Your Email' style={{ width: '96%', height: '15%', fontSize: '0.9rem', outline: 'none', textIndent: '0.7rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '2%' }} />

                        <input className='inputText' type="text" name="user_subject" placeholder='Enter Your Subject' style={{ width: '96%', height: '15%', fontSize: '0.9rem', outline: 'none', textIndent: '0.7rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '2%' }} />

                        <textarea name="message" className='inputText' placeholder='Enter Your Message' style={{ width: '96%', height: '30%', fontSize: '1rem', outline: 'none', textIndent: '0.7rem', borderRadius: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', margin: '2%', marginTop: '0.2rem' }} rows="5"></textarea>

                        <input value="Send" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} type='submit' className='button-63' style={{ width: '100%', margin: '0.2rem', marginLeft: '0.3rem' }} />

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
                        to="mbp11"
                        spy={true}
                        smooth={true}
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
