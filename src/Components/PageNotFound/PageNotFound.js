import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class PageNotFound extends Component {
  render() {
    return (
      <div className='notfound-page bluebox container'>
        <div className='item container'>
          <h1 className='sectionHeader'>Sorry! We couldn't find the page you were looking for.</h1>
          <iframe src="https://giphy.com/embed/u2Zl6MxdEsHp6" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/wave-chicken-waving-u2Zl6MxdEsHp6">via GIPHY</a></p>
          <button>
            <Link to='/'>
              Get Me Outta Here
            </Link>
          </button>
        </div>
          
      </div>
    );
  }
}

export default PageNotFound;