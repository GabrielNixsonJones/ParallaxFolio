import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
    return (
        <div style={{ width: '100%', marginTop: '2%' }}>
            <Carousel showArrows={true}>
                <div>
                    <a href='https://movie-pedia-project.netlify.app/' target="_blank" rel="noreferrer">
                        <img style={{ objectFit: 'contain' }} src="projects/MoviePedia.webp" alt='' />
                        <p className="legend" style={{ fontSize: '1rem' }}>MoviePedia</p>
                    </a>
                </div>
            </Carousel>
        </div>
    )
}

export default Projects;