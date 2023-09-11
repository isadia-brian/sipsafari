import Image from "next/image";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="h-[80px] pt-2 bg-white border border-gray-200 cursor-pointer rounded-md shadow-lg grid justify-items-center">
      <div className="relative h-[50px] w-[23px] ">
        <Image src={image} alt={title} fill />
      </div>
      <p className="font-bold text-xs text-black text-center uppercase">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
