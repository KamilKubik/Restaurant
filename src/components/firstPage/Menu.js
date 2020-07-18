import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Menu = () => {
    return (
        <div className='menuGridContainer'>
            <div className='menuContainer'>
                {/* <div className='menuElement'><Link to='/'>Home</Link></div> */}
                <div className='menuElement'><Link to='about' smooth={true} duration={1000}>About us</Link></div>
                <div className='menuElement'><Link to='menu' smooth={true} duration={2000}>Menu</Link></div>
                <div className='menuElement'><Link to='gallery' smooth={true} duration={3000}>Gallery</Link></div>
                <div className='menuElement'><Link to='contact' smooth={true} duration={2000}>Contact</Link></div>
            </div>
            <div className='bigContainer'>
                <div className='titleBoxerTwo'>
                    <h1 className='titleTwo'>Nerunhaus</h1>
                    <h2 className='subtitleTwo'>WARSAW</h2>
                </div>
                <h2 className='menuContainerText'>Welcome to our restaurant, feel free to discover our history and taste our specialties</h2>
            </div>
        </div>
    )
}

export default Menu;
