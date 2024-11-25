import React from "react";
import logo from '../assets/img/logoLab.jpg'
// import des icons
import { IoLocationSharp } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () =>{
    return(
        <div className="bg-secondary mt-[6rem]"> 
            <div className="  py-4 md:px-14 px-5 flex flex-col md:flex-row lg:flex-row items-start justify-between">
            <div className="md:w-1/4 mt-5">
                <div className="space-y-4">
                    <h3 className="text-xl mb-3 text-[1.6rem] text-primary">À Propos de BIG BTP</h3>
                    <a href="/">
                    <img src={logo} className="w-[9rem]" alt="" />
                    </a>
                    <p className="text-start text-ms text-xl text-white md:text-base lg:text-lg">
                    Big Lab, est Une entreprise dynamique tournée vers les travaux, études et services divers dans le domaine de la géomatique, l’immobilier, du bâtiment et des travaux publics.
                    </p>
                </div>
            </div>
            <div>
                <div className="space-y-4 mt-5">
                    <h3 className="text-xl text-[1.6rem] text-primary">Liens Utiles</h3>
                    <ul className="space-y-3">
                        <a href="#accueil" className="block hover:text-primary text-white text-[1.2rem]">Accueil</a>
                        <a href="#quiSommesNous" className="block hover:text-primary text-white text-[1.2rem]">Qui sommes-nous</a>
                        <a href="#competences" className="block hover:text-primary text-white text-[1.2rem]">Nos prestations</a>
                        <a href="#contacterNous" className="block hover:text-primary text-white text-[1.2rem]">Nos contacts</a>
                    </ul>
                </div>
            </div>
            <div>
                <div className="space-y-4 mt-5">
                    <h3 className="text-xl text-[1.6rem] text-primary">Nos Contacts</h3>
                    <ul className="space-y-3 block">
                        <a href="/" className="text-white text-[1.2rem] hover:text-primary flex items-center gap-2"><IoLocationSharp className="size-6"/> Côte d'Ivoire, Abidjan</a>
                        <a href="tel: +225 07 59 09 00 00" className=" text-white hover:text-primary flex items-center gap-2 text-[1.2rem]"><LuPhone className="size-6"/>  +225 07 59 09 00 00</a>
                        <a href="mailto: ousbamba@gmail.com" className=" hover:text-primary flex items-center gap-2 text-white text-[1.2rem]"><MdOutlineEmail className="size-6"/> ousbamba@gmail.com</a>
                    </ul>
                </div>
            </div>
            </div>
            <hr />
            <div className="flex flex-col md:px-14 px-6 py-2 md:flex-row lg:flex-row items-center justify-between">
                <p className="text-white text-[1.1rem]">Copyright © 2024 Tous droits réservés. Design by <span className="text-red-500">Bamba Ousmane</span></p>
                <div className="px-2 flex items-center gap-4 md:py-5">
                    <a href="/" className="flex items-center gap-x-1 text-[2rem] text-white hover:text-primary"><FaFacebookSquare /></a>
                    <a href="/" className="flex items-center gap-x-1 text-[2rem] text-white hover:text-primary"><FaLinkedin /></a>
                </div>
            </div>
        </div> 
    )
}

export default Footer