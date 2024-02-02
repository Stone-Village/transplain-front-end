import React from 'react';
import { useState } from 'react';

//chatGPT was consulted in making the hamburger menu

const HamburgerMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {menuOpen && (
                <div className='menu-content'>
                    <a href="">About</a>
                    <a href="">Suggestion Box</a>
                </div>
            )}
        </div>
    )
}

export default HamburgerMenu;