import React from "react";
import Image from "../assets/img/labo-geo.jpg"
import Compteurs from "./Compteurs";

const Competences = () =>{
    return(
        <div className="mt-[5rem] max-w-screen-2xl" id="competences">
            <div>
                <div className="text-center ">
                    <h2 className="text-xl pb-4 lg:text-[1.6rem] text-secondary font-semibold mb-2">NOS DOMAINES DE COMPETENCES</h2>
                    <p className="text-sm pb-6 font-light lg:text-[1.5rem]">Nos équipes expérimentées sont à vos côtés pour vous accompagner dans tous vos projets.</p>
                </div>
                <div className="gap-2 justify-center  items-center sm:grid-cols-2 px-10  grid md:grid-cols-4 lg:grid-cols-4  lg:gap-9">
                    <div className="bg-white p-2 shadow-sm hover:shadow-2xl transition">
                        <img className="object-cover w-full h-[15rem] pb-2" alt="" src={Image}/>
                        <p className="text-[1.4rem] text-secondary">Laboratoire géotechniques</p>
                    </div>
                    <div className="bg-white p-2  shadow-sm  hover:shadow-2xl transition">
                        <img className="object-cover w-full  h-[15rem] pb-2 " alt="" src={Image}/>
                        <p className="text-[1.4rem] text-secondary">Laboratoire géotechniques</p>
                    </div>
                    <div className="bg-white p-2 shadow-sm  hover:shadow-2xl transition">
                        <img className="object-cover w-full h-[15rem] pb-2" alt="" src={Image}/>
                        <p className="text-[1.4rem] text-secondary">Laboratoire géotechniques</p>
                    </div>
                    <div className="bg-white p-2 shadow-sm hover:shadow-2xl transition">
                        <img className="object-cover w-full h-[15rem] pb-2" alt="" src={Image}/>
                        <p className="text-[1.4rem] text-secondary">Laboratoire géotechniques</p>
                    </div>
                </div>
            </div>
            <Compteurs/>
        </div>
    )
}

export default Competences