import React from 'react'

import { Page1 } from './Page1';
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
import { MobileView } from './MobileView';

import { motion } from 'framer-motion';


export const HomePage = () => {

    return (
        <div style={{ position: 'relative', overflowX: 'hidden', overflowY: 'hidden' }}>


            <motion.div className='intro'
                initial={{ display: "flex", opacity: 1 }}
                animate={{
                    display: 'none',
                    opacity: 0
                }}
                transition={{ delay: 4, opacity: { delay: 2.3, duration: 1 } }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{ ease: "easeInOut", duration: 2 }}
                >
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{
                            scale: 50,
                        }}
                        transition={{ ease: "easeInOut", duration: 2, delay: 2 }}>
                        <h1>Hello!</h1>
                    </motion.div>
                </motion.div>
            </motion.div>


            <div className='actualContainer'>
                <div>
                    <Page1 />
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

            <div className='mobileContainer'>
                <MobileView />
            </div>

        </div>



    )
}
