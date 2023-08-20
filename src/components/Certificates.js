import React from 'react'
import { useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Certificates = React.memo(() => {

    useEffect(() => {
        const imagesToPreload = ['certificates/fulstack.webp', 'certificates/htmlcss.webp', 'certificates/javascriptr.webp', 'certificates/reactjs.webp', 'certificates/node.webp', 'certificates/mongodb.webp', 'certificates/expressjs.webp'];

        imagesToPreload.forEach((image) => {
            const img = new Image();
            img.src = `${process.env.PUBLIC_URL}/${image}`;
        });
    }, []);

    return (
        <div style={{ width: '70%', marginTop: '2%' }}>
            <Carousel showArrows={true}>
                <div>
                    <a href='https://cert.shapeai.tech/verify/ZKNzUm' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/fulstack.webp" alt='' loading='lazy' />
                        <p className="legend">Full Stack Web Development</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/Z2d3fBg' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/htmlcss.webp" alt='' loading='lazy' />
                        <p className="legend">Html & CSS</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/ZsX1BL' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/javascriptr.webp" alt='' loading='lazy' />
                        <p className="legend">javascript</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/1TQzRF' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/reactjs.webp" alt='' loading='lazy' />
                        <p className="legend">React.js</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/1bD4L0' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/node.webp" alt='' loading='lazy' />
                        <p className="legend">Node.js</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/1RkB1k' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/mongodb.webp" alt='' loading='lazy' />
                        <p className="legend">MongoDB</p>
                    </a>
                </div>
                <div>
                    <a href='https://cert.shapeai.tech/verify/EU70m' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="certificates/expressjs.webp" alt='' loading='lazy' />
                        <p className="legend">Express.js</p>
                    </a>
                </div>
            </Carousel>
        </div>
    )
})