import './Header.css'

import { Link } from 'react-router';

function Header(){
return(
    <header>
    <div className='title'>
        <h2>ForYourself: Learn and Share about all things self-reliance, homesteading and sustainability!</h2>
        </div>
        <div className='button-line'>
            <Link className="nav-button" to="/">Home</Link>
            <Link className="nav-button" to="/about">About</Link>
            <Link className="nav-button" to="/recipe-finder">Recipe Finder</Link>
            <button> Placeholder</button>
        </div>

    </header>
)
}
export default Header;