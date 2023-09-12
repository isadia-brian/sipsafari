"use client";
import { useState } from "react";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { Avatar } from "antd";
import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter();

  const { data: session } = useSession();

  const firstname = session?.user.validateUser.firstName;
  const lastname = session?.user.validateUser.lastName;
  const name = firstname + " " + lastname;
  const email = session?.user.validateUser.email;
  const username = session?.user.validateUser.username;
  const mobile = session?.user.validateUser.mobile;

  return (
    <main className="relative h-full w-full ">
      <div className="relative h-full mt-[70px] px-6 py-8 md:px-12 ">
        <div className="w-full md:w-[600px] md:mx-auto  mt-4 md:my-8 flex h-full  items-center space-x-5 border-b-[0.8px] border-slate-400 pb-5">
          <Avatar style={{ backgroundColor: "white" }} size="large" />
          <p className="font-bold uppercase">{email}</p>
        </div>

        <div className="w-full my-10">
          <div className="w-full flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-bold underline">name</p>
              {name ? <p>{name}</p> : <></>}
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-bold underline">username</p>
              <p>{username}</p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-bold underline">email</p>
              <p>{email}</p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-bold underline">mobile number</p>
              <p>{mobile}</p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <button
            onClick={() => router.push("/profile/edit-profile")}
            className="w-full py-3 border border-slate-400 shadow-lg rounded-3xl font-light text-sm"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
}
