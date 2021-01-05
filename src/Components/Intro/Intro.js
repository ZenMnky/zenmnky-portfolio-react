import React from 'react';

const Intro = () => {
    return(
        <div className="container">
            <article id="intro">
                <div className="group">
                    <div className="item">
                        <img 
                            src="https://i.ibb.co/PCFkw2w/Headshot-20201121.jpg" 
                            alt="headshot" 
                            className="main-img rounded"
                        />
                    </div>
                    <div className="item intro-para">
                        <p className="headline"> Hi, I'm Justin Hager.</p>
                        <p>Adept and versatile,  I am experienced in business and program development, organizational leadership, and management of operations, policies and standards</p>
                        <p> I have 7+ years of combined experience as a leader and coach in the not for profit & health and fitness industries.</p>
                    </div>
                </div>            
            </article>
        </div>
    );
};

export default Intro;