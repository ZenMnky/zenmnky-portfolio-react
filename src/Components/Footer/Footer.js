import React from 'react';
import ContactIconGroup from '../ContactIconGroup/ContactIconGroup';

const Footer = () => {
    return(
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <ContactIconGroup />
                    <div className='copyright container'>
                        <p>&copy; Justin Hager. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;