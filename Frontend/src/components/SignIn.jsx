import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/user/signin",
        { email, password },
        {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
          },
        }
      );

      setEmail("");
      setPassword("");

      toast.success(data.message);
      setLoading(false);
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 ">     

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

        <button disabled={loading} className="BtnPrimary uppercase">
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-500"> Sign Up</span>
        </Link>
      </div>

      <Toaster />
    </div>
  );
};

export default SignIn;
