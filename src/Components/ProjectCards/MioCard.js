import React from 'react'
import mioImg from '../../img/smartmockups_mio.png';

export default function MioCard() {
    return (
        <div className="item card" >
                <a href='https://mio-client.vercel.app/'>
                    <img 
                        src={mioImg} 
                        alt={`mio application screenshot`} 
                        className="rounded" 
                    />
                </a>
                
                <h2>Mio</h2>

                <h3>The Gist:</h3>
                <p>Fullstack application designed to help users track and organize interpersonal relationships</p>
                <p>Allows users to create, edit, update, and delete relationship profiles.</p>
                <p>First fullstack application built. This project tied together all the different processes, tools, and technologies we had learned up to this point.</p>
                
                <h3>The Stack:</h3>
                <p>React, HTML5, CSS3, JavaScript ES6 | PostgreSQL, Node, Express, Knex, Mocha/Chai</p>
                {/* <button>Project Details</button> */}
                <a href='https://github.com/ZenMnky/mio-client'><button>Repo</button></a>
                <a href='https://mio-client.vercel.app/'><button>Live Demo</button></a>
            </div>  
    )
}
