"use client";

import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";

const gtSuper = localFont({
  src: "../../../public/fonts/gt-super/gt-super.otf",
});

const Signup = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-full bg-white ">
      <div className="w-full h-screen flex flex-col items-center justify-between">
        <div className="w-full flex justify-end pt-8 pr-5">
          <Link href="/home" className="cursor-pointer">
            <AiOutlineCloseCircle className="text-[28px] text-slate-400" />
          </Link>
        </div>
        <div className="w-full flex flex-col items-center  ">
          <h4
            className={`${gtSuper.className} text-slate-700 mb-2 font-semibold tracking-wide text-[26px]`}
          >
            Join Sipsafari
          </h4>
          <p className="text-sm text-slate-600 mb-10">
            Choose one of the options below to get started.
          </p>
          <div className=" w-full flex justify-center items-center flex-col space-y-4 mb-8">
            <Link
              href="#"
              className="flex items-center  px-3  py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/google.png"
                width={18}
                height={18}
                className="object-cover"
              />
              <p className="text-center w-full">Sign up with Google</p>
            </Link>
            <Link
              href="#"
              className="flex items-center  px-3 py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/facebook.png"
                width={20}
                height={20}
                className="object-cover"
              />
              <p className="text-center w-full">Sign up with Facebook</p>
            </Link>
            <Link
              href="/signup/emailsignup"
              className="flex items-center  px-3 py-[14px] border-[0.2px] w-[280px] border-slate-400 rounded-full"
            >
              <Image
                src="/images/mailer.png"
                width={22}
                height={22}
                className="object-cover"
              />
              <p className="text-center w-full"> Sign up with Email</p>
            </Link>
          </div>
          <div>
            <p className="text-[15px] text-slate-900">
              Already have an account?{" "}
              <span>
                <Link href="/login" className="font-bold">
                  Log in
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center pb-24">
          <p className="text-xs max-w-[250px] text-center leading-relaxed text-slate-500">
            Click "Sign Up" to agree to Sipsafari's{" "}
            <span>
              <Link href="#" className="underline">
                Terms of Service
              </Link>
            </span>{" "}
            and acknowledge that Sipsafari's{" "}
            <span>
              <Link href="#" className="underline">
                Privacy Policy{" "}
              </Link>
            </span>
            applies to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
