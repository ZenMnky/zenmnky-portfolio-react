import React from 'react';
import setInputHeight from '../../services/setInputHeight';

const Contact = () => {
    return(
        <article className="container" id="contact">
            <h2 className='sectionHeader'>Contact</h2>
            <div className="group">
                <div className="item">
                    <form action="https://formspree.io/f/mknpjjoz" method="POST">
                        <fieldset>
                            <legend>Send me an email</legend>
                            <label htmlFor="contact-sender_name">Name</label>
                            <input name="sender_name" id="contact-sender_name" type="text" 
                                required />
        
                            <label htmlFor="contact-reply_email">Email</label>
                            <input name="reply_email" id="contact-reply_email" type="email" required />

                            <label htmlFor="contact-message">Message</label>
                            <textarea 
                                name="message" 
                                id="contact-message" 
                                placeholder="Let's build something beautiful together..." 
                                required 
                                onChange={e => setInputHeight(e, '100px')}
                            />

                            <button type="submit">Submit</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </article>
    );
};

export default Contact;