"use client";

import Link from "next/link";
import { useState } from "react";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import axios from "axios";
import { BiErrorCircle } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { Spin } from "antd";

const gtSuper = localFont({
  src: "../../../../public/fonts/gt-super/gt-super.otf",
});

const EmailSign = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);
    setPasswordError(false);

    if (password !== confirmPassword) {
      setLoading(false);
      setPasswordError(true);
      setMessage("Passwords don't match");
      return null;
    }

    const details = {
      email,
      password,
    };

    try {
      await axios.post("http://localhost:3000/api/auth/users", details);
      setLoading(false);
      setSuccess(true);
      setMessage("Succesfully created user");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setMessage("");
        router.push("/login/emaillogin");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setError(true);

      setMessage("An error occured while adding user");
    }
  };
  return (
    <div className="h-screen w-full bg-white ">
      <div className="w-full h-screen flex flex-col items-center">
        <div className="relative w-full z-50 flex justify-end pt-8 pr-5">
          <Link href="/home" className="cursor-pointer">
            <AiOutlineCloseCircle className="text-[28px] text-slate-400" />
          </Link>
        </div>
        <div className="w-full flex flex-col items-center h-full  -mt-16 justify-center ">
          <h4
            className={`${gtSuper.className} text-slate-700 mb-12 font-semibold tracking-wide text-[23px]`}
          >
            Sign up with email
          </h4>

          <div className="relative w-full flex justify-center items-center  mb-[50px]">
            <form onSubmit={handleFormSubmit} className="w-[300px] ">
              <span
                className={`text-sm font-medium  ${
                  (message && error) || passwordError
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {message}
              </span>
              <div className="w-full flex flex-col mt-3 space-y-8">
                <div>
                  <p className="w-full text-slate-500 text-xs">Email</p>
                  <input
                    type="email"
                    className={`w-full border-b-[0.8px]  outline-none text-sm px-2  pt-3 ${
                      error ? "border-red-500" : "border-black"
                    }`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <p className="w-full text-slate-500 text-xs">Password</p>
                  <input
                    type="password"
                    className={`w-full border-b-[0.8px]  outline-none text-sm px-2  pt-3 ${
                      passwordError || error ? "border-red-500" : "border-black"
                    }`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <p className="w-full text-slate-500 text-xs">
                    Confirm Password
                  </p>
                  <input
                    type="password"
                    className={`w-full border-b-[0.8px]  outline-none text-sm px-2  pt-3 ${
                      passwordError || error ? "border-red-500" : "border-black"
                    }`}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-black rounded-full w-full flex justify-center text-white text-sm py-[14px]"
                  >
                    {loading ? (
                      <Spin />
                    ) : error ? (
                      <BiErrorCircle className="text-2xl text-red-500" />
                    ) : success ? (
                      <BsCheckCircleFill className="text-xl " />
                    ) : (
                      <p>Sign Up</p>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <Link
              href="/signup"
              className="font-light text-[14px] flex items-center space-x-2"
            >
              <HiOutlineArrowLeft className="" />
              <p>Back to Sign Up options</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSign;
