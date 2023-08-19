import React from 'react'

import { Certificates } from './Certificates';
import { Projects } from './Projects';

import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect, useRef } from 'react';

export const SliderContainer = (props) => {

    const [imagesLoaded, setImagesLoaded] = useState(false);
    const imagesRef = useRef([]);

    const handleImageLoad = () => {

        const allImagesLoaded = imagesRef.current.every((image) => image.complete);

        if (allImagesLoaded) {
            setImagesLoaded(true);
        }
    };

    useEffect(() => {

        imagesRef.current = Array.from(document.querySelectorAll('img'));


        imagesRef.current.forEach((image) => {
            image.addEventListener('load', handleImageLoad);
        });

        return () => {

            imagesRef.current.forEach((image) => {
                image.removeEventListener('load', handleImageLoad);
            });
        };
    }, []);

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            {imagesLoaded ? (
                <AnimatePresence>
                    {props.state ? (
                        <div style={{ display: 'flex', width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                            <motion.div
                                style={{ width: '100%' }}
                                key="first"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
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
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Projects />
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            ) : (
                <h1>Loading images...</h1>
            )}

        </div>
    )
}
