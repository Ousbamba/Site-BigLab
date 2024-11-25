import React from "react";
import Image from "../assets/img/hero-01.jpg"

// import de motion
import { motion } from "motion/react"
import { fadeIn } from "../variants";

const QuiSomesNous = () =>{
    return(
        <div id="quiSommesNous" className="items-start max-w-screen-2xl md:py-14 py-4 justify-center flex flex-col md:flex-row  bg-white p-9 gap-x-6 mt-[6rem]">
            <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false, amount: 0.2 }}
            className="flex-1 h-full">
                <img src={Image} className="object-cover h-[70vh]" alt=""/>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false, amount: 0.2 }} 
            className="flex-1">
                <h2 className="text-xl lg:text-[1.6rem] text-secondary font-semibold mb-3">QUI SOMMES-NOUS ?</h2>
                <div className=" space-y-4 text-xl font-light mb-[2rem]">
                    <p><span className="leading-relaxed text-secondary  font-semibold">BIG LAB</span> est une entreprise dans le domaine du Bâtiment et des Travaux publics en Ingénierie ayant comme activités les études, le Contrôle, la Surveillance et la Réalisation des travaux qui nous sont confiés par nos clients.</p>
                    <p>Nos domaines d’intervention sont variés et concernent le Secteur de l’eau, l’Assainissement, la Topographie, le Génie Civil, le suivi de chantier grâce aux drones et aux GPS différentiels etc.</p>
                    <p>Par le présent dossier technique, nous venons
                    manifester notre intérêt à collaborer avec vous dans les secteurs sus cités afin de vous assister
                    éventuellement dans la mise en œuvre des projets dont vous êtes attributaires.</p>
                </div>
                <div className="border-2 border-secondary text-center px-4 py-2 rounded-full justify-center items-center w-full lg:max-w-[162px] flex hover:bg-secondary hover:text-white transition text-secondary text-[1.1rem] font-semibold">
                    <a href="DescriptionDg" target="" rel="" className="">
                        SAVOIR PLUS
                    </a>
                </div>
            </motion.div>
        </div>
    )
}

export default QuiSomesNous