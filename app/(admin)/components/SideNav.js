"use client";
import Link from "next/link";
import { VscHome } from "react-icons/vsc";
import { TbCategory } from "react-icons/tb";
import { GoVersions } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiChats } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { usePathname } from "next/navigation";
const Links = [
  {
    name: "Home",
    href: "/admin",
    icon: <VscHome />,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: <TbCategory />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <GoVersions />,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: <AiOutlineDollarCircle />,
  },
  {
    name: "Chat",
    href: "/chat",
    icon: <PiChats />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <IoSettingsOutline />,
  },
  {
    name: "Users",
    href: "/users",
    icon: <HiOutlineUsers />,
  },
];

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen border-r-[0.6px] w-[200px] border-slate-300 flex flex-col items-center ">
      <div className="border-b-[0.4px] border-slate-300 w-full flex justify-center ">
        <h1 className="font-black text-2xl py-6 ">SIPSAFARI</h1>
      </div>
      <div className="pt-16 flex flex-col ">
        <ul className="flex flex-col space-y-4 mb-[60px]">
          {Links.slice(0, 5).map((item, index) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1  pl-3 pr-5 py-[10px] rounded-xl hover:bg-amber-500/50 hover:text-black hover:scale-105 transition duration-200 ease-in-out ${
                    isActive ? "bg-black text-white" : " text-slate-500"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-sm font-light ">{item.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-sm font-normal text-slate-500 mb-4">Tools</p>
        <ul className="flex flex-col space-y-4 relative mb-40">
          {Links.slice(5, 7).map((item, index) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1  pl-3 pr-5 py-[10px] rounded-xl hover:bg-amber-500 hover:text-black hover:scale-105 transition duration-200 ease-in-out ${
                    isActive ? "bg-black text-white" : " text-slate-500"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-sm font-light ">{item.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border-t-[0.8px] border-slate-300 w-full flex justify-center py-10">
        <button className="flex items-center space-x-1 -ml-7 text-slate-500">
          <span className="text-lg">
            <HiArrowRightOnRectangle />
          </span>
          <p className="text-sm font-light">Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
