import React, { useEffect, useRef } from "react";
import Container from "../container/Container";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [immageError, setImmageError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  console.log(profilePicture);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Calculate the progress percentage
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        // Update the UI with the rounded progress value
        setImagePercentage(Math.round(progress));
      },
      // Handle error
      (error) => {
        setImmageError(true);
        console.log("Image Error ", error);
      },
      // Handle success
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setProfilePicture(downloadUrl);
        });
      }
    );
  };

  return (
    <Container>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7 ">Profile</h1>

        <form className="flex flex-col gap-4">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={profilePicture || currentUser.user.profilePicture}
            alt="profile"
            className="h-24 w-24  self-center cursor-pointer rounded-full object-cover "
            onClick={() => fileRef.current.click()}
          />

          <p className="text-sm self-center">
            {immageError ? (
              <span className="text-red-800 font-semibold">Error uploading image</span>
            ) : imagePercentage > 0 && imagePercentage < 100 ? (
              <span>{`Uploading: ${imagePercentage}%`}</span>
            ) : imagePercentage === 100 ? (
              <span className="text-green-800 font-semibold">Image upload successfully</span>
            ) : (
              ""
            )}           
          </p>

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
