import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import GoogleAuth from "./GoogleAuth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/user/signup",
        { name, email, password },
        {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        }
      );

      setName("");
      setEmail("");
      setPassword("");

      toast.success(data.message);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="bg-slate-100 p-3 rounded-lg "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="bg-slate-100 p-3 rounded-lg "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg "
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loading} className="BtnPrimary rounded-lg uppercase">
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <GoogleAuth />
      </form>

      <div className="flex gap-2 mt-5">
        <p>Don&apos;t Have an account?</p>
        <Link to={"/signin"}>
          {" "}
          <span className="text-blue-500"> Sign In</span>
        </Link>
      </div>

      <Toaster />
    </div>
  );
};

export default SignUp;
