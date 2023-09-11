import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { AiFillHeart } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

const PopularCard = ({ title, amount, image, quantity }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(true);
  };

  const handleUnFavorite = () => {
    setFavorite(false);
  };

  return (
    <div className="relative h-full bg-white  shadow-lg border border-gray-300 min-w-[180px] py-3 px-3 rounded">
      <div className="grid w-full  justify-items-end ">
        {favorite ? (
          <AiFillHeart
            className="h-6 w-6 text-red-500 "
            onClick={handleUnFavorite}
          />
        ) : (
          <HeartIcon
            className="h-6 w-6 transition duration-150 ease-out "
            onClick={handleFavorite}
          />
        )}
      </div>
      <div className="-mt-6">
        <div className="w-full flex flex-col items-center">
          <div className="relative w-10 h-28">
            <Image src={image} fill alt={title} />
          </div>
        </div>

        <p className="font-medium text-left mt-2">{title}</p>
        <p className="font-light text-xs">{quantity}</p>
        <div className="flex items-center space-x-1">
          {[...Array(4)].map((_, i) => (
            <StarIcon key={i} className={`text-yellow-500 h-3 w-3`} />
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="font-bold text-sm">
          KES {new Intl.NumberFormat().format(amount)}
        </p>
        <ShoppingCartIcon className="h-7 w-7 mt-px mb-px" />
      </div>
    </div>
  );
};

export default PopularCard;
