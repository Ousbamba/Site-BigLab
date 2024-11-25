import React from "react";


const MiniHero = () =>{
    return(
        <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col md:flex-row lg:flex-row justify-between gap-4 lg:gap-x-4 relative lg:-top-4 lg:shadow-1 bg-white items-center lg:bg-transparent  lg:backdrop-blur rounded-lg">
            <div className="border-2 border-secondary px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition text-secondary text-[1.1rem] font-semibold">
                <a href="#DescriptionDg" target="" rel="" className="" activeClass='active' smooth={true} spy={true} offset={100}>
                    SAVOIR PLUS
                </a>
            </div>
            <div className="border-2 hover:bg-primary hover:text-secondary hover:border-primary transition  border-secondary font-semibold px-4 py-2 rounded-full text-primary bg-secondary">
                <a href="#contacterNous" target="" rel="" className="">
                    NOUS CONTACTER
                </a>
            </div>
        </div>
    )
}

export default MiniHero