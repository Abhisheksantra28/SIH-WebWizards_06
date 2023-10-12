import React from "react";
import Container from "../container/Container";
import banner from "../assets/banner.png";
import Banner from "../Shared/Banner";

const Home = () => {
  return (
    <Container>
      <div className="w-full ">
        <Banner
          banner={banner}
          heading="Develop your skills without dilligence"
          subHeading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            aliquam recusandae alias est numquam earum adipisci reiciendis rem."
          btn1="Get Started"
          btn2="Discount"
        />
      </div>
    </Container>
  );
};

export default Home;
