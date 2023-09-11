import beer from "./public/images/Beer.png";
import whiskey from "./public/images/whiskey.png";
import rum from "./public/images/rum.png";
import gin from "./public/images/Gin.png";
import brandy from "./public/images/brandy.png";
import vodka from "./public/images/Vodka.png";
import tequila from "./public/images/Tequila.png";
import wine from "./public/images/wine.png";
import gilbeys from "./public/images/gilbeys -.png";
import vat69 from "./public/images/vat69.png";

import {
  HomeIcon,
  UserIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";

import { BiSupport } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { IoNotificationsSharp, IoPricetagSharp } from "react-icons/io5";

export const categories = [
  {
    image: beer,
    title: "Beer",
  },
  {
    image: whiskey,
    title: "Whiskey",
  },
  {
    image: rum,
    title: "Rum",
  },
  {
    image: wine,
    title: "Wine",
  },
  {
    image: tequila,
    title: "Tequila",
  },
  {
    image: vodka,
    title: "Vodka",
  },
  {
    image: gin,
    title: "Gin",
  },
  {
    image: brandy,
    title: "Brandy",
  },
];

export const liqours = [
  {
    title: "Gilbeys Gin",
    amount: "1500",
    quantity: "750 ML",
    image: gilbeys,
    rating: "4.3",
  },
  {
    title: "VAT 69",
    amount: "1800",
    quantity: "750 ML",
    image: vat69,
    rating: "4.6",
  },
];

export const links = [
  {
    title: "Home",
    link: "/home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    title: "Profile",
    link: "/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
  {
    title: "My Orders",
    link: "#",
    icon: <RectangleStackIcon className="h-5 w-5" />,
  },
  {
    title: "Top Deals",
    link: "#",
    icon: <IoPricetagSharp className="h-5 w-5" />,
  },
  {
    title: "Notification",
    link: "#",
    icon: <IoNotificationsSharp className="h-5 w-5" />,
  },
  {
    title: "My Cart",
    link: "#",
    icon: <FaCartShopping className="h-5 w-5" />,
  },
  {
    title: "Support",
    link: "#",
    icon: <BiSupport className="h-5 w-5" />,
  },
];
