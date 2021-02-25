import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1 className="logo">
                <Link to='/'>
                    Justin Hager
                </Link>
            </h1>
    
            <nav className="nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;