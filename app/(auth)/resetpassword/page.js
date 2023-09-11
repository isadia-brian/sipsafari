"use client";

import Link from "next/link";

import localFont from "next/font/local";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const gtSuper = localFont({
  src: "../../../public/fonts/gt-super/gt-super.otf",
});

const ResetPassword = () => {
  return (
    <div className="h-screen w-full bg-white ">
      <div className="w-full h-screen flex flex-col items-center">
        <div className="relative w-full z-50 flex justify-end pt-8 pr-5">
          <Link href="/home" className="cursor-pointer">
            <AiOutlineCloseCircle className="text-[28px] text-slate-400" />
          </Link>
        </div>
        <div className="w-full flex flex-col items-center h-full  -mt-16 mb-16 justify-center ">
          <h4
            className={`${gtSuper.className} text-slate-700 pb-2 font-semibold tracking-wide text-[23px]`}
          >
            Reset password
          </h4>
          <p className="text-sm text-slate-600 pb-10">
            Enter your email below to reset your password
          </p>

          <div className=" w-full flex justify-center items-center  mb-[50px]">
            <form className="w-[300px] flex flex-col space-y-8">
              <div>
                <p className="w-full text-slate-500 text-xs">Email</p>
                <input
                  type="email"
                  className="w-full border-b-[0.5px] border-black outline-none text-sm px-2  pt-3 "
                  required
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

          <div>
            <Link
              href="/login/emaillogin"
              className="font-light text-[14px] flex items-center space-x-2"
            >
              <HiOutlineArrowLeft className="" />
              <p>Back to Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
