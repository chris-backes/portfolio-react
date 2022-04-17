import React from 'react';
import pic from '../../assets/images/headshot.jpg'
import styles from './about.css'

const About = () => {
    return (
        <section className='about'>
            <div className='about-img'>
                <img src={pic} className='about-img' alt="photograph of author" />
            </div>
            <div className='about-txt'>
                <h2>Christopher Backes</h2>
                <p>
                    Recent graduate from GWA bootcamp for full-stack programming.
                </p>
                <p>
                    HTML/CSS/JavaScipt/SQL and the MERN Stack.
                </p>
            </div>
        </section>
    )
}

export default About