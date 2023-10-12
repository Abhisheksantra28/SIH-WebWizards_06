import React from "react";
import Container from "../container/Container";
import study from "../assets/study.png";

const Features = () => {
  return (
    <Container>
      <div className="my-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/4 px-4">
            <h3 className="text-3xl text-primary font-bold lg:w-2/3 mb-3">
              Why we are better than others
            </h3>
            <p className="text-base text-tartiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint
              nostrum facere animi dolorem dignissimos quibusdam accusamus
              impedit?
            </p>
          </div>

          {/* Features card right side*/}
          <div className="w-full lg:w-3/4">
            <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8  mx-4"> 

              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div >
                  <img src={study} alt="" className=""/>
                  
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-4">
                    Conventient study schedule
                  </h5>
                </div>
              </div>

              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <div >
                  <img src={study} alt=""/>
                  
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-4">
                    Conventient study schedule
                  </h5>
                </div>
              </div>


              <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
                <div >
                  <img src={study} alt=""/>
                  
                  <h5 className="text-xl font-semibold text-primary px-5 text-center mt-4">
                    Conventient study schedule
                  </h5>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
