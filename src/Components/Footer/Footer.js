import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return(
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className=' footer-group'>
                        <a href='https://www.linkedin.com/in/developerjustinhager/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} className='fa' />
                        </a>
                        
                        <a href='https://github.com/zenmnky' target='_blank' rel='noreferrer'>
                            {/* <i className='fa fa-lg fa-github item'></i> */}
                            <FontAwesomeIcon icon={faGithub} className='fa'/>
                        </a>
                        
                        <a href='mailto:DeveloperJustinHager@Gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} className='fa'/>
                        </a>
                        
                    </div>
                    
                    <div className='copyright container'>
                        <p>&copy; Justin Hager. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;