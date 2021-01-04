import React from 'react';

const Contact = () => {
    return(
        <article className="container" id="contact">
            <h2>Contact</h2>
            <div className="group">
                <div className="item">
                    <form action="https://formspree.io/f/mknpjjoz" method="POST">
                        <fieldset>
                            <legend>Send me an email</legend>
                            <label for="contact-sender_name">Name</label>
                            <input name="sender_name" id="contact-sender_name" type="text" 
                                required />
        
                            <label for="contact-reply_email">Email</label>
                            <input name="reply_email" id="contact-reply_email" type="email" required />

                            <label for="contact-message">Message</label>
                            <textarea name="message" id="contact-message" 
                                placeholder="Let's build something beautiful together..." required></textarea>

                            <button type="submit">Submit</button>
                        </fieldset>
                        
                    </form>
                </div>
            </div>
        </article>
    );
};

export default Contact;