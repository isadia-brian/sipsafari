import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ForYouCard = ({ image, amount, quantity, title, rating }) => {
  return (
    <div className="bg-white h-full w-full p-2 rounded-md shadow-md items-center flex space-x-5">
      <div className="relative w-10 h-28">
        <Image src={image} alt={title} fill />
      </div>
      <div className="flex flex-col flex-grow mt-2">
        <h5 className="font-medium text-left ">{title}</h5>
        <p className="text-[9px] mb-2">{quantity}</p>
        <p className="font-black">
          KES {new Intl.NumberFormat().format(amount)}
        </p>
      </div>
      <div className="mr-5 w-[60px] flex bg-yellow-700 justify-center px-2 space-x-1">
        <h1 className="font-medium text-white">{rating}</h1>
        <StarIcon className="h-5 w-4 text-yellow-500" />
      </div>
    </div>
  );
};

export default ForYouCard;
