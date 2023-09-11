"use client";
import { useEffect, useState } from "react";
import SplashScreen from "@/app/components/SplashScreen";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { categories, liqours } from "../../../data";
import HighlightCard from "@/app/components/HighlightCard";
import CategoryCard from "@/app/components/CategoryCard";
import PopularCard from "@/app/components/PopularCard";
import ForYouCard from "@/app/components/ForYouCard";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Avatar } from "antd";
export default function Profile() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const email = session.user.validateUser.email;

  return (
    <main className="relative h-full w-full ">
      <div className="relative h-full mt-[70px] px-6 py-8 md:px-12 ">
        <div className="w-full md:w-[600px] md:mx-auto  my-4 mb-4 md:my-8 flex h-full  items-center space-x-5 border-b-[0.8px] border-slate-400 pb-5">
          <Avatar style={{ backgroundColor: "white" }} size="large" />
          <p className="font-bold uppercase">{email}</p>
        </div>
      </div>
    </main>
  );
}
