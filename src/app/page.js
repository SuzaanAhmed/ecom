import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="flex flex-col">
      <img
        src="header.png"
        className=""
      />
      <div className="flex flex-row">
        <div className="bg-gray-200 rounded shadow border">
          <img
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1730264744/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/308502_0_rnuueq.png"
            className="w-70 h-70 p-2 m-2"
            
          />
          <p className="text-center justify-center">Headphones</p>
        </div>
        <div className="bg-gray-200 rounded shadow border">
          <img
            src="https://png.pngtree.com/png-clipart/20240306/original/pngtree-microphone-png-image_14516732.png"
            className="w-70 h-70 p-2 m-2"
          />
          <p className="text-center justify-center">Microphone</p>
        </div>
        <div className="bg-gray-200 rounded shadow border">
          <img
            src="https://pngimg.com/d/laptop_PNG101816.png"
            className="w-70 h-70 p-2 m-2"
          />
          <p className="text-center justify-center">Laptop</p>
        </div>
        <div className="bg-gray-200 rounded shadow border">
          <img
            src="https://pngimg.com/d/xbox_PNG17527.png"
            className="w-70 h-70 p-2 m-2"
          />
          <p className="text-center justify-center">Controller</p>
        </div>
        <div className="bg-gray-200 rounded shadow border">
          <img
            src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-mobile-phone-charger-stereo-black-png-image_6855506.png"
            className="w-70 h-70 p-2 m-2"
          />
          <p className="text-center justify-center">Headphones</p>
        </div>
      </div>
      </div>
    </div>
  );
}
