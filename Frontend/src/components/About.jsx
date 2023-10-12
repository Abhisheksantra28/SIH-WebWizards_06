import Container from "../container/Container";
import React from "react";
import planning from "../assets/planning.png"

const About = () => {
  return (
    <Container>
      <div className="w-full">

        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          <div className=" md:w-2/5 ">
            
            <img src={planning} alt="planning img"/>
            
          </div>

          {/* about content */}
           
           <div className=" md:w-3/5 ">
            <h2 className="md:text-[2.6rem] text-2xl  font-bold text-primary mb-5 leading-normal">We have been improving our product <span>for many years.</span></h2>
            <p className=" w-full text-tartiary text-lg mb-6 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, aliquid cum. Possimus quod nobis voluptatum numquam fugiat tempora.</p>
            <button className="BtnPrimary">Get Started</button>
           </div>
           
        </div>


      </div>
    </Container>

    
  );
};

export default About;
