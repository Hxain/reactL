import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const colorModeChanger = () => {
        if (isDarkMode) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-800 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-white no-underline">
                        SOLUTIONS
                    </Link>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                        <button className='bg-black text-white px-4 py-2 rounded' onClick={colorModeChanger}>
                            {isDarkMode ? 'Light' : 'Dark'} Mode
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
