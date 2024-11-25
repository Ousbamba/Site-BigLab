import React, { useState } from "react";
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const Compteurs = () => {

  const [counterOn, setCounterOn] = useState(false);

  return(
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="flex flex-col min-h-[400px] md:flex-row bg-white items-center justify-center mt-[2rem] py-5 md:gap-x-40 md:py-10">
        <div className="text-primary">
          {counterOn && <h1 className="md:text-[4rem] lg:text-[4.2rem] text-[3.4rem] text-center font-semibold text-secondary"><span>+</span><CountUp start={0} end={10} duration={3} delay={0}/></h1>}
          <div className="md:text-[1.7rem] lg:text-[1.7rem] text-[1.5rem] font-semibold text-secondary"> Projets réalisés</div>
        </div>
        <div className="text-primary">
          {counterOn && <h1 className="md:text-[4rem] lg:text-[4.2rem] text-[3.4rem] text-center font-semibold text-secondary"><span>+</span><CountUp start={0} end={9} duration={3} delay={0}/></h1>}
          <div className="md:text-[1.7rem] lg:text-[1.7rem] text-[1.5rem] font-semibold text-secondary">Projets en cours</div>
        </div>
        <div className="text-primary">
          {counterOn && <h1 className="md:text-[4rem] lg:text-[4.2rem] text-[3.4rem] text-center font-semibold text-secondary"><span>+</span><CountUp start={0} end={101} duration={3} delay={0}/></h1>}
          <div className="md:text-[1.7rem] lg:text-[1.7rem] text-[1.5rem] font-semibold text-secondary">Clients satisfaits</div>
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default Compteurs