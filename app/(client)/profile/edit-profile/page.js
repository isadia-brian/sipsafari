"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";

import { BsArrowLeft } from "react-icons/bs";
export default function EditProfile() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const validfirstname = session?.user.validateUser.firstName;
  const validlastname = session?.user.validateUser.lastName;
  const validusername = session?.user.validateUser.username;
  const mobile = session?.user.validateUser.mobile;
  const validUserID = session?.user.validateUser.id;

  const [username, setUsername] = useState(validusername);
  const [firstname, setFirstname] = useState(validfirstname);
  const [lastname, setLastname] = useState(validlastname);
  const [mobileNumber, setMobileNumber] = useState(mobile);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/users", {
        method: "PATCH",
        body: JSON.stringify({
          id: validUserID,
          username,
          firstname,
          lastname,
          mobileNumber,
        }),

        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log("There was an error posting", error);
    }
  };

  return (
    <main className="relative h-full w-full ">
      <div className="relative h-full mt-[70px] px-6 py-8 md:px-12 ">
        <div className="mt-6 mb-7 w-full">
          <Link href="/profile" className="font-light text-2xl  space-x-2">
            <BsArrowLeft className="" />
          </Link>
        </div>
        <div className="w-full md:w-[600px] md:mx-auto md:my-8 flex flex-col justify-center  items-center space-y-3  pb-5">
          <div>
            <h5 className="text-xl font-bold">Edit Profile</h5>
          </div>
          <div className="relative h-28 w-28 rounded-full">
            <Image src="/images/logo.png" fill alt="user_image" />
          </div>
        </div>

        <div className="w-full my-10">
          <form className="w-full flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1 mb-4">
              <label htmlFor="username" className="text-xs">
                username
              </label>
              <input
                type="text"
                className="border-[0.4px] py-2 border-slate-900 px-2 bg-transparent outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-full flex items-center mb-4 space-x-2">
              <div className="flex flex-col space-y-1">
                <label htmlFor="firstname" className="text-xs">
                  firstname
                </label>
                <input
                  type="text"
                  className="border-[0.4px] py-2 border-slate-900 px-2 bg-transparent outline-none w-full"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="lastname" className="text-xs">
                  lastname
                </label>
                <input
                  type="text"
                  className="border-[0.4px] py-2 border-slate-900 px-2 bg-transparent outline-none w-full"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="mobileNumber" className="text-xs">
                mobile number
              </label>
              <input
                type="text"
                className="border-[0.4px] py-2 border-slate-900 px-2 bg-transparent outline-none"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-8">
              <button
                type="submit"
                className="w-full py-3 bg-black font-semibold text-white shadow-2xl text-sm"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
