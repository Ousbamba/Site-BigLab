import React from "react";
//import Header from "./Header"
import Images from '../assets/img/image_dg.jpg'

const DescriptionDg = ({ children }) =>{
    return( 
        <div className="items-start max-w-screen-2xl md:py-14 py-4 justify-center flex flex-col md:flex-row  bg-white p-9 gap-x-6 gap-y-4" id="DescriptionDg">
            <div className="flex-1" >
                <img src={Images} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1">
            <p className="text-gray-700 text-justify text-[1.2rem]">BIG-LAB (Bureau International de la Géomatique, Laboratary) est une entreprise dynamique tournée vers les travaux, études et services divers dans le domaine de la géomatique, l’immobilier, du bâtiment et des travaux publics. 
                C’est une entreprise privée, disposant de ressources humaines compétentes, familiarisées avec les techniques modernes de travail et capable de travailler dans un environnement très concurrentiel.
                Elle dispose également d’un grand réseau de collaborateurs extérieurs.
                BIG-BTP s’appuie sur l’expérience de son personnel et celle de ses partenaires qui sont des bureaux d’études nationaux et internationaux très éprouvés.</p>
            </div>
        </div>
    );
}

export default DescriptionDg