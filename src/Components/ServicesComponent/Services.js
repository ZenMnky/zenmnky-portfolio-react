import React from 'react';

const Services = () => {
    return(
        <article id='services'>
            <div className='container'>
                <h2>Services</h2>
                <div className='group'>
                    <div className='item'>
                        <img 
                            src='https://i.ibb.co/TY5XhHX/webdev.jpg' 
                            alt='developer in action' 
                            className='rounded' 
                        />
                    </div>
                    <div className='item-double'>
                        <p className='headline headline-2'>Client-focused and customer-centric web application development services.</p>
                        <p>As an application developer, I utilize today’s latest frameworks and technologies to build user friendly, responsive and scalable web applications.</p>
                        <p><a href='#contact'>Contact me</a> to learn more about how we can work together to build something beautiful.</p>
                    </div>
                </div>
            </div>
        </article>

    );
};

export default Services;    