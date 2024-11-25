import React, { useCallback, useEffect, useState } from "react";
import Slider01 from "../assets/img/hero-01.jpg"
import Slider02 from "../assets/img/hero-02.jpg"
import Slider03 from "../assets/img/hero-03.jpg"
//import Slider04 from "../assets/img/hero-04.jpg"

// import de motion
import { motion } from "motion/react"
import { fadeIn } from "../variants";


const Hero = () =>{

    const SliderImage = [Slider01, Slider02, Slider03];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === SliderImage.length - 1 ? 0 : prevIndex + 1));
      }, [SliderImage.length]);

      useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change d'image toutes les 3 secondes
        return () => clearInterval(interval); // Nettoie l'intervalle lors du démontage du composant
      }, [nextSlide]);

    return(
        <div className="relative w-full max-w-full" id="accueil">
            <div className="">
                 {/* Inserttion des images */}
                <div className="w-full h-[75vh] overflow-hidden sm:h-full md:h-[75vh] lg:h-full bg-cover bg-center flex justify-center items-center">
                    <img
                    src={SliderImage[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once:false, amount: 0.7 }}
                className="absolute top-[45%] bg-opacity-70 left-4 px-6 py-4 bg-secondary w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[50%] rounded-lg shadow-lg">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-start mb-4">BIG LAB</h1>
                    <p className="text-start text-ms text-xl text-white md:text-base lg:text-lg">
                    Une entreprise dynamique tournée vers les travaux, études et services divers dans le domaine de la géomatique, l’immobilier, du bâtiment et des travaux publics.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero