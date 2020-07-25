import React from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Menu = () => {
    return (
        <div className='menuGridContainer'>
            <div className='menuContainer'>
                {/* <div className='menuElement'><Link to='/'>Home</Link></div> */}
                <div className='menuElement'><Link to='about' smooth={true} duration={1000}>O nas</Link></div>
                <div className='menuElement'><Link to='menu' smooth={true} duration={2000}>Menu</Link></div>
                <div className='menuElement'><Link to='gallery' smooth={true} duration={3000}>Galeria</Link></div>
                <div className='menuElement'><Link to='contact' smooth={true} duration={2000}>Kontakt</Link></div>
            </div>
            <div className='bigContainer'>
                <div className='titleBoxerTwo'>
                    <h1 className='titleTwo'>Nerunhaus</h1>
                    <h2 className='subtitleTwo'>WARSZAWA</h2>
                </div>
                <h2 className='menuContainerText'>Witaj w naszej restauracji! Nie zwlekaj i odkryj pełnię smaku naszych autorskich potraw!</h2>
            </div>
        </div>
    )
}

export default Menu;
