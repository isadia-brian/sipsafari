"use client";

import { links } from "@/data";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LiaUserAltSolid } from "react-icons/lia";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const { data: session } = useSession();
  const email = session?.user.validateUser.email;

  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => {
    setOpenNav(!openNav);
  };

  const handleSignOff = (e) => {
    e.preventDefault();
    signOut();
    router.push("/login/emaillogin");
  };

  return (
    <main className="relative">
      {!openNav && <Navigation handleOpen={handleOpen} />}

      {openNav ? (
        <div className="absolute z-20 top-0 left-0 px-5  h-screen py-10 w-full bg-gradient-to-br from-pink-600 to-yellow-500 ">
          <div className="absolute right-5 top-5 md:top-[60px] rounded-full bg-white">
            <XMarkIcon
              className="h-7 w-7 cursor-pointer"
              onClick={() => setOpenNav(false)}
            />
          </div>
          {session ? (
            <>
              <div className="flex space-x-3 text-white pb-9 border-b-[0.5px] border-gray-400">
                <div className="h-[90px] w-[90px] rounded-lg shadow-2xl bg-white"></div>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">Brian</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <p className="font-light text-xs">0796661363</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-light text-xs">{email}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col space-y-8 w-full">
                {links.map(({ title, link, icon }, index) => {
                  return (
                    <Link
                      href={link}
                      key={index}
                      className="text-white font-medium uppercase flex space-x-4 w-full"
                      onClick={() => setOpenNav(false)}
                    >
                      <p>{icon}</p>
                      <p>{title}</p>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-10">
                <button
                  onClick={handleSignOff}
                  className="bg-gray-500 w-fit rounded-lg text-white px-3 py-2 flex items-center justify-center space-x-4 text-sm"
                >
                  <p>SIGN OUT</p>

                  <p className="text-white">
                    <ArrowRightOnRectangleIcon className="h-5 w-5 text-white " />
                  </p>
                </button>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col text-white   justify-center items-center -mt-8">
              <LiaUserAltSolid className="text-[130px] mb-1 " />
              <p className="mb-5">Log In or Sign Up for an Account </p>
              <div className="flex flex-col space-y-3 w-[220px]">
                <Link
                  href="/login"
                  className="bg-white font-semibold text-black w-full py-3 rounded-2xl flex items-center justify-center"
                >
                  Log in
                </Link>
                <div className="w-full text-center">
                  <p>Or</p>
                </div>
                <Link
                  href="/signup"
                  className="bg-white font-semibold text-black w-full py-3 rounded-2xl flex items-center justify-center"
                >
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="">{children}</div>
      )}
    </main>
  );
}
