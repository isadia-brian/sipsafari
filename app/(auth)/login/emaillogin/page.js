"use client";

import Link from "next/link";

import localFont from "next/font/local";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const gtSuper = localFont({
  src: "../../../../public/fonts/gt-super/gt-super.otf",
});

const EmailLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.log(result);
      return null;
    } else {
      alert("success");
      router.push("/home");
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
            className={`${gtSuper.className} text-slate-700 mb-16 font-semibold tracking-wide text-[23px]`}
          >
            Log in with email
          </h4>

          <div className=" w-full flex justify-center items-center  mb-[50px]">
            <form
              className="w-[300px] flex flex-col space-y-8"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="w-full text-slate-500 text-xs"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full border-b-[0.5px] border-black outline-none text-sm px-2  pt-2 "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="w-full text-slate-500 text-xs"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="password"
                  className="w-full border-b-[0.5px] border-black outline-none text-sm px-2 pt-2"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-black rounded-full w-full text-white text-sm py-[14px]"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="mb-[50px]">
            <p className="text-[12px] text-slate-500">
              Did you forget your password?{" "}
              <span>
                <Link href="/resetpassword" className="font-medium underline">
                  Reset Password
                </Link>
              </span>
            </p>
          </div>
          <div>
            <Link
              href="/login"
              className="font-light text-[14px] flex items-center space-x-2"
            >
              <HiOutlineArrowLeft className="" />
              <p>Back to Log in options</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailLogin;
