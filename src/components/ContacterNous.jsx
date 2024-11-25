import React from "react";
import Swal from 'sweetalert2'

// import de motion
import { motion } from "motion/react"
import { fadeIn } from "../variants";

const ContacterNous = () =>{

    const onSubmit = async (event) => {

        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "05e9ea85-dc98-4a12-b9d0-305a81285b7b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Succes!",
                text: "Merci pour votre confaince!",
                icon: "success"
              });
        }
      };

    return(
        <div className="bg-white gap-x-6 gap-y-4 md:py-14 py-3 flex flex-col-reverse max-w-screen-2xl md:flex-row lg:flex-row items-start px-10" id="contacterNous">
            
            <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:false, amount: 0.7 }}
            className="flex-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9996429134645!2d2.294481315675994!3d48.858370079287616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef8d22cb1ed%3A0x54d4d42c41f63460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1614879451732!5m2!1sfr!2sfr" className="w-full h-[75vh] rounded-lg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </motion.div>

            <form onSubmit={onSubmit} className="flex-1 h-full">
                <h1 className="text-center text-secondary font-semibold text-[1.5rem] mb-[1.5rem]">FORMULAIRE DE CONTACT</h1>
                <div className="flex flex-col md:flex-row lg:flex-row gap-4">
                    <div className="flex-1">
                        <p className="text-secondary text-[1.3rem] ">Nom ou Entreprise</p>
                        <input type="text" required name="Nom ou Entreprise" id="" className="border-2 border-secondary w-full h-[2rem] px-2 py-1 mb-3 rounded-lg text-secondary text-[1.1rem] focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Nom ou Entreprise" />
                    </div>
                    <div className="flex-1 ">
                        <p className="text-secondary text-[1.3rem] ">Numero Telephone</p>
                        <input type="tel" required name="telephone" id="" className="border-2 border-secondary w-full h-[2rem] px-2 py-1 mb-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg text-secondary text-[1.1rem]" placeholder="0500000001" />
                    </div>
                </div>
                <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
                    <div className="flex-1">
                        <p className="text-secondary text-[1.3rem]">Objet</p>
                        <input type="text" required name="Objet" id="" className="border-2 border-secondary w-full h-[2rem] px-2 py-1 mb-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg text-secondary text-[1.1rem]" placeholder="Objet" />
                    </div>
                    <div className="flex-1">
                        <p className="text-secondary text-[1.3rem] ">E-mail</p>
                        <input type="email" required name="Email" id="" className="border-2 border-secondary w-full h-[2rem] px-2 py-1 mb-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg text-secondary text-[1.1rem]" placeholder="exemple@gmail.com"/>
                    </div>
                </div>
                <div>
                    <p className="text-secondary text-[1.3rem] pb-[.5rem]">Message</p>
                    <textarea className="border-2 required border-secondary w-full h-[6rem] px-2 py-1 rounded-lg text-secondary text-[1.1rem] focus:outline-none focus:ring-2 focus:ring-primary mb-3 resize-none leading-2 required" name="Message" placeholder="Message..."></textarea>
                </div>
                <div className="flex flex-col gap-5 md:flex-row lg:flex-row items-center justify-between gap-x-6 mt-4">
                    <button  type="submit" className="w-full h-[2.5rem] hover:bg-blue-800 rounded-lg bg-secondary text-center text-white text-[1.3rem]">Soumettre</button>
                    <a href="https://wa.me/+2250506711849" className="w-full h-[2.5rem] text-[1.3rem] border-2 rounded-lg border-primary text-primary  hover:text-secondary hover:bg-primary flex items-center justify-center" >Whatsapp</a>
                </div>
            </form>
        </div>
    )
}

export default ContacterNous