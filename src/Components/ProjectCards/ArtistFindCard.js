import React from 'react'
import img from '../../img/smartmockups_artist-find.png';

export default function ArtistFindCard() {

    return (
        <div className="item card" >
                <a href='https://justin-jenna-music-app.vercel.app/'>
                    <img 
                        src={img} 
                        alt={`artist find screenshot`} 
                        className="rounded" 
                    />
                </a>
                
                <h2>Artist Find</h2>

                <h3>The Gist:</h3>
                <p>Music-artist search-app connected to Spotify API.</p>
                <p>Allows users to search for music artist information by keyword, and see top tracks, most recent albums, and similar artists.</p>
                <p>Built as an extracurricular, collaborative 'touchstone' project with my peer <a href="https://www.jennachestnut.com/">Jenna Chestnut</a>, early on in our software development program. </p>
                
                <h3>The Stack:</h3>
                <p>React, HTML5, CSS3, JS ES6</p>
                {/* <button>Project Details</button> */}
                <a href='https://github.com/ZenMnky/collaborative-spotify-app'><button>Repo</button></a>
                <a href='https://justin-jenna-music-app.vercel.app/'><button>Live Demo</button></a>
        </div>  
    )
}
