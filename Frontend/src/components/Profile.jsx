import React from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Container>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7 ">Profile</h1>

        <form className="flex flex-col gap-4">
          <img
            src={currentUser.user.profilePicture}
            alt="profile"
            className="h-24 w-24  self-center cursor-pointer rounded-full object-cover mt-2"
          />

          <input
            defaultValue={currentUser.user.name}
            type="text"
            name=""
            id="name"
            placeholder="Name"
            className="bg-slate-100 rounded-lg p-3"
          />

          <input
            defaultValue={currentUser.user.email}
            type="email"
            name=""
            id="email"
            placeholder="Email"
            className="bg-slate-100 rounded-lg p-3"
          />

          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            className="bg-slate-100 rounded-lg p-3"
          />

          <button className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Update
          </button>
        </form>

        <div className="flex justify-between mt-5">


          <span className="text-red-700 cursor-pointer">Delete Account</span>

          <span className="text-red-700 cursor-pointer">Sign Out</span>
          
          {/* <button className="BtnPrimary bg-[#7543fd] hover:bg-[#9A7AF1] 
          hover:opacity-95">Sign Out</button> */}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
