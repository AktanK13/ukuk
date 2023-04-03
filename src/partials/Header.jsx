import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';

function Header({home}) {

    console.log(home)
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const trigger = useRef(null);
    const mobileNav = useRef(null);

    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close the mobile menu if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!mobileNavOpen || keyCode !== 27) return;
            setMobileNavOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mt-10 mx-auto px-4 sm:px-6 min-[320px]:mt-3 max-[600px]:mt-3">
                <div className="flex items-center justify-between h-20">

                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Cruip">
                            <img src={Logo} alt="logo" className='w-14'/>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    {
                        home ?
                            <nav className="hidden md:flex md:grow">


                                <ul className="flex grow justify-end flex-wrap items-center">
                                    <li>
                                        <a href="#aboutus"
                                           className="font-medium text-white hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
                                            О нас</a>
                                    </li>
                                    <li>
                                        <a href="#skills"
                                           className="font-medium text-white hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
                                            Наши функции</a>
                                    </li>
                                    <li>
                                        <a href="#partners"
                                           className="font-medium text-white hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
                                            Наши партнеры</a>
                                    </li>
                                    <li>
                                        <a href="#contacts"
                                           className="font-medium text-white hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer">
                                            Контакты</a>
                                    </li>
                                </ul>

                            </nav>
                            :
                            <></>
                    }

                    {/* Mobile menu */}
                    {
                        home ?
                            <div className="md:hidden">
                                {/* Hamburger button */}
                                <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`}
                                        aria-controls="mobile-nav" aria-expanded={mobileNavOpen}
                                        onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                                    <span className="sr-only">Menu</span>
                                    <svg
                                        className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="4" width="24" height="2" rx="1"/>
                                        <rect y="11" width="24" height="2" rx="1"/>
                                        <rect y="18" width="24" height="2" rx="1"/>
                                    </svg>
                                </button>
                                {/*Mobile navigation */}
                                <nav id="mobile-nav" ref={mobileNav}
                                     className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                                     style={mobileNavOpen ? {
                                         maxHeight: '500px',
                                         opacity: 1
                                     } : {maxHeight: 0, opacity: .8}}>
                                    <ul className="bg-gray-800 px-4 py-6">
                                        <li>
                                            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#aboutus"
                                               className="flex font-medium text-lg w-full text-white py-5 justify-center">
                                                О нас</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#skills"
                                               className="flex font-medium text-lg w-full text-white py-5 justify-center">
                                                Наши функции</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#partners"
                                               className="flex font-medium text-lg w-full text-white py-5 justify-center">
                                                Наши партнеры</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#contacts"
                                               className="flex font-medium text-lg w-full text-white py-5 justify-center">
                                                Контакты</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            :
                            <></>
                    }


                </div>
            </div>
        </header>
    );
}

export default Header;
