import React from 'react';
import pic from '../../assets/images/headshot.jpg'

const About = () => {
    return (
        <section className='about'>
            <div className='about-img'>
                <img src={pic} className='about-img' alt="photograph of author" />
            </div>
            <div className='about-txt'>
                <h2>About Me</h2>
                <p>
                    Recent graduate from GWA bootcamp for full-stack programming. 
                    You can check out my GitHub to see the projects I've done. 
                    Learning to be more proficient in React, as well as working on 
                    a couple of my own projects. 
                    <br/>In addition to this, I have an NPM package (found in the 
                    portfolio) that handles floating point errors in JavaScript. 
                    <br/>I also have been working through various algorithms, and I'm 
                    trying to work throuh the first 100 problems on
                    <a href="https://projecteuler.net"> Project Euler</a>.
                    <br/>You can check out my YouTube (link below) channel for my 
                    solutions to the first ten problems, as well as some other 
                    projects of mine.
                </p>
                <p className='about-end'>
                    HTML/CSS/JavaScipt/SQL and the MERN Stack.
                </p>
            </div>
        </section>
    )
}

export default About