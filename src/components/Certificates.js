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
                    <img style={{ objectFit: 'contain' }} src="certificates/fulstack.webp" alt='' loading='lazy' />
                    <p className="legend">Full Stack Web Development</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/htmlcss.webp" alt='' loading='lazy' />
                    <p className="legend">Html & CSS</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/javascriptr.webp" alt='' loading='lazy' />
                    <p className="legend">javascript</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/reactjs.webp" alt='' loading='lazy' />
                    <p className="legend">React.js</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/node.webp" alt='' loading='lazy' />
                    <p className="legend">Node.js</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/mongodb.webp" alt='' loading='lazy' />
                    <p className="legend">MongoDB</p>
                </div>
                <div>
                    <img style={{ objectFit: 'contain' }} src="certificates/expressjs.webp" alt='' loading='lazy' />
                    <p className="legend">Express.js</p>
                </div>
            </Carousel>
        </div>
    )
})