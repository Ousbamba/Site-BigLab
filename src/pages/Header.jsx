import React, { useState } from "react"
import Logo from '../assets/img/logoLab.jpg'
// import d'icons
import {FaWhatsapp } from "react-icons/fa";
// import de menu fermante
import { FaXmark,  FaBars} from "react-icons/fa6";
// import de scroll dans react
import {Link} from 'react-scroll'

const Header = () =>{
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {link: "Accueil", path: "accueil"},
        {link: "Qui sommes-nous ?", path: "quiSommesNous"},
        {link: "Nos prestations", path: "competences"},
        {link: "Nos contacts", path: "contacterNous"},
    ]
    return(
        <>
            <nav className="bg-white px-6 py-2 z-20 shadow-sm max-w-screen-2xl fixed top-0 right-0 left-0 mx-auto">
                <div className="flex items-center justify-between">
                    
                    {/* navigations et logo */}
                    <div className="flex items-center space-x-20 " >
                        <a href="/"  >
                            <img src={Logo} alt="" className="w-[12rem] flex-1"/>
                        </a>
                        <ul className="md:flex items-center hidden cursor-pointer space-x-6 text-xl font-semibold text-secondary ">
                        {
                            navItems.map(({link, path}) => 
                            <Link key={link} to={path} className="hover:text-primary transition" activeClass='active' smooth={true} spy={true} offset={100}>{link}</Link>)
                        } 
                        </ul>
                    </div>

                    <div className="bg-primary md:flex hidden items-center text-secondary hover:bg-secondary  hover:text-primary  transition font-semibold rounded-lg ">
                        <a href="https://wa.me/+2250506711849" className="flex px-3 h-[3rem]  items-center gap-1 text-[1.1rem]"><FaWhatsapp className="text-[1.3rem]" />Chat Whatsapp</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-secondary focus:outline-none text-[2rem]">
                            {
                                isMenuOpen ? (<FaXmark className="w-6 h-6 text-secondary"/>) : (<FaBars/>)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-5 pb-5 bg-white ${ isMenuOpen ? "block border-2 border-b-primary fixed z-20 top-20 right-0 left-0" : "hidden"}`}>

                {
                    navItems.map(({link, path}) =>  
                    <Link key={link} to={path} className="block text-[1.3rem] hover:text-primary transition" activeClass='active' onClick={toggleMenu} smooth={true} spy={true} offset={-100}>{link}</Link> 
                )
                } 
                
            </div>
        </>
    )
}

export default Header