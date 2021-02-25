import mioImg from './img/smartmockups_mio.png';
import artistFindImg from './img/smartmockups_artist-find.png';
import sraImg from './img/smartmockups_spaced-repetition.png';

const store = {
    projects: [
        {
            img: mioImg,
            title: 'Mio',
            description: 'Fullstack application designed to help users track and organize interpersonal relationships',
            techStack: 'React, HTML5, CSS3, PostgreSQL, Express, Node',
            repoLink: 'https://github.com/ZenMnky/mio-client',
            liveLink: 'https://mio-client.vercel.app/',
        },
        {
            img: artistFindImg,
            title: 'Artist Find',
            description: 'Music-artist search-app connected to Spotify API. Collaboratively built as an extracurricular project.',
            techStack: 'React, HTML5, CSS3, JS ES6',
            repoLink: 'https://github.com/ZenMnky/collaborative-spotify-app',
            liveLink: 'https://justin-jenna-music-app.vercel.app/',
        },
        {
            img: sraImg,
            title: 'Spaced Repetition',
            description: 'Korean language learning app, based on a linked list data structure.',
            techStack: 'React, PostgreSQL, Express, Node, HTML5, CSS3, JS ES6',
            repoLink: 'https://github.com/ZenMnky/spaced-repetition',
            liveLink: 'https://spaced-repetition-omega.vercel.app/',
        },
        
    ]
};

export default store;