import React from "react";

const Banner = ({banner , heading, subHeading, btn1 , btn2}) => {
  return (
    <div className=" gradient-bg rounded-xl rounded-br-[60px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* Bannner image */}
        <div>
          <img src={banner} alt="" className="lg:h-[386px] bg-transparent" />
        </div>

        {/* banner content  */}
        <div className="md:w-3/5">
          <h2 className="md:text-4xl lg:text-6xl text-3xl font-bold text-white mb-5 leading-relaxed ">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] md:text-xl text-[1rem] mb-5">
            {subHeading}
          </p>

          <div className="space-x-5 space-y-4 ">
            <button className="BtnPrimary">{btn1}</button>
            <button className="BtnPrimary">{btn2}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
