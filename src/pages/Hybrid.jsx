import React from "react";
import { hybrid } from "../utils/gvt_schemes";

const Hybrid = () => {
  return (
    <div className=" py-36 ">
      <h1 className="text-center text-2xl font-semibold">Hybrid Methods that can help you</h1>
      <div className="flex gap-4 justify-evenly py-6 items-center  flex-wrap">
        {hybrid.map((item) => (
          <figure className="lg:w-1/3 border border-gray-300 p-4 rounded-md space-y-3">
            <img src={item.Image} alt="img" className="max-h-36 rounded-md" />
            <figcaption className="text-justify">{item.data}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Hybrid;
