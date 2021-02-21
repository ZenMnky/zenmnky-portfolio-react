import React from 'react';

const About = () => {
    return(
        <article id='about'>
            <div className='about-container'>
                <h2>About Me</h2>
                <div className='group'>
                    <div className='item'>
                        <p>I specialize in designing and building solutions and processes from the ground up to support an organization’s objectives, managing solution lifecycles from conceptualization thru operationalization. Involved in web application development since December 2019, I bring creative solutions, organization, and collaboration.</p>
                        <p>I am now seeking to contribute my experience and expertise to a software development project in Portland, Oregon, or remotely.</p>
                        <p>Outside of work, I enjoy physical challenges and mountain adventures. Currently, my main physical discipline is AcroYoga.</p>
                    </div>
                    <div className='item'>
                        <img 
                            src='https://i.ibb.co/jyGTSGM/Acro-Yoga-mid-swing-lexi.png' 
                            alt='acroyoga action shot' 
                            className='rounded' />
                    </div>
                </div>
            </div>
        </article>

    )
};

export default About;