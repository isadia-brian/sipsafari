"use client";

import { links } from "@/data";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Navigation from "../components/Navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ClientLayout({ children }) {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => {
    setOpenNav(!openNav);
  };

  const handleSignOff = (e) => {
    e.preventDefault();
    signOut();
    router.push("/login");
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
          <div className="flex space-x-3 text-white pb-9 border-b-[0.5px] border-gray-400">
            <div className="h-[90px] w-[90px] rounded-lg shadow-2xl bg-white"></div>
            <div className="flex flex-col">
              <p className="font-semibold text-lg">Brian</p>
              <div className="flex items-center space-x-4">
                <p className="font-light text-xs">+254 796661363</p>
                <p className="font-light text-xs">brian@gmail.com</p>
              </div>
              <div className="mt-3">
                <button className="bg-gradient-to-r from-blue-500 to-pink-500 shadow-xl rounded-3xl px-3 py-2 flex items-center justify-between text-sm">
                  Edit Profile
                </button>
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
        </div>
      ) : (
        <div className="">{children}</div>
      )}
    </main>
  );
}
