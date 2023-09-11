"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cloudName = "isadia94";
      const uploadPreset = "sipsafari";
      let imageUrl;

      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", uploadPreset);

      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      imageUrl = uploadResponse.data.secure_url;

      try {
        const formDataWithImage = {
          name: title,
          image: imageUrl,
        };

        console.log(formDataWithImage);
      } catch (error) {
        console.log("Error", error);
      }
    } catch (error) {
      console.error(error, "An error occured");
    }
  };

  useEffect(() => {
    function getImage() {
      console.log("useEffect run");
      console.log(title);
    }

    getImage();
  }, [selectedImage, title]);

  return (
    <div className="">
      <div className="mb-20">
        <h1 className="text-2xl font-medium">Hi, Brian!</h1>
        <p className="text-sm text-slate-400 -mt-1">
          Here are categories of products in your website
        </p>
      </div>

      <div>
        <h3 className="text-3xl font-black uppercase underline underline-offset-2">
          Categories
        </h3>
      </div>
      <div className="mt-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 w-[300px]"
        >
          <div className="flex flex-col space-y-[1px]">
            <label htmlFor="name" className="text-xs">
              Name
            </label>
            <input
              type="text"
              className="outline-none border-[0.5px] border-slate-300 px-2 py-[6px] placeholder:text-sm"
              placeholder="e.g beer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-[1px]">
            <label htmlFor="name" className="text-xs">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={!selectedImage || title === ""}
              className="border-[0.6px] border-slate-300 outline-none px-5 py-2 disabled:bg-gray-300 disabled:text-slate-400 disabled:cursor-not-allowed bg-amber-500 text-black uppercase font-medium text-sm hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Categories;
