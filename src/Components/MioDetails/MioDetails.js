import React from 'react'
import mioImg from '../../img/smartmockups_mio.png';

export default function MioDetails() {
    return (
        <article id='project-details_mio' className='container group'>
            <h1 className='sectionHeader'>Project Details</h1>
            <div className='group'>
                <section className='project-details_intro item bluebox'>
                    <h2 className='sectionHeader'>Introduction</h2>
                    <div className='imgContainer'>
                      <img src={mioImg} alt='mio app screenshot' />
                    </div>
                    <div className='project-details_description'>
                        <h3>Summary</h3>
                        <p>High-level Summary</p>
                        <p>Core functionalities / interesting features</p>
                        <p>Role</p>

                        <h3>Tech Used</h3>
                        <p>svgs go here</p>

                        <p>Links go here</p>

                    </div>
            
                </section>
                <section className='project-details_purpose-goal item bluebox'>
                    <h2 className='sectionHeader'>Purpose and Goal</h2>
                    <p>
                    • Why did you build this project? Why is it important to you?
                    • What was the expected outcome of the project?
                    • What were the initial designs?
                    • Any other preliminary planning that you did which helps build a narrative
                    </p>
                </section>
                <section className='project-details_spotlight item bluebox'>
                    <h2 className='sectionHeader'>Spotlight</h2>
                    <p>
                        • What is the “killer feature” of your project? What feature does it have that took the
                        most work, or was the most technically impressive? Some possible examples:
                            ◦ User authentication
                            ◦ A feed of items fetched from a database
                            ◦ A particularly tricky UI element (eg. autocomplete, calendar, drag-and-drop)
                            ◦ Anything you’re proud of!
                        • What were the technical hurdles that got in your way? Any major problems you hit
                        during development?
                        • How did you solve those problems? What was the solution? Go deep here, and write
                        with a developer in mind
                    </p>
                </section>
                <section className='project-details_learned item bluebox'>
                    <h2 className='sectionHeader'>Lessons Learned</h2>
                    <p>
                        • What did you learn doing this project? Feel free to list multiple things. Also feel free to
                        cover non-technical lessons. It’s great to talk about how you learned to use an
                        advanced feature of a framework or library, but it’s just as valuable to talk about
                        project-management experience, or things you learned about shipping projects.

                        • If you used a framework or other libraries/tools, was it a good choice? How did it
                        help? In which ways was it insufficient?

                        • Is your project accessible? What did you learn about accessibility, while building this
                        project? Describing how you tested your project using keyboard navigation or a screenreader can make for a really compelling story!
                        
                        • How has this affected the work you’ve done since then? Real examples of how this
                        project built your knowledge for future projects is fantastic
                    </p>
                </section>
            </div>
            
            
        </article>
    )
}
