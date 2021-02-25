import React from 'react'
import mioImg from '../../img/smartmockups_mio.png';

export default function MioCard() {
    return (
        <div className="item card" >
                <img 
                    src={mioImg} 
                    alt={`mio application screenshot`} 
                    className="rounded" 
                />
                <h2>Mio</h2>

                <h3>The Gist:</h3>
                <p>Fullstack application designed to help users track and organize interpersonal relationships</p>
                <p>Allows users to create, edit, update, and delete relationship profiles.</p>
                <p>First fullstack application built. This project tied together all the different processes, tools, and technologies we had learned up to this point.</p>
                
                <h3>The Stack:</h3>
                <p>React, PostgreSQL, Express, Node, HTML5, CSS3, JS ES6</p>
                {/* <button>Project Details</button> */}
                <a href='https://github.com/ZenMnky/mio-client'><button>Repo</button></a>
                <a href='https://mio-client.vercel.app/'><button>Live Demo</button></a>
            </div>  
    )
}
