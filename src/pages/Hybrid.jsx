import React from "react";
import { hybrid } from "../utils/gvt_schemes";

const Hybrid = () => {
  return (
    <div className="">
      <h1>Hybrid Methods that can help you</h1>
      <div className="flex gap-4 justify-around py-6 items-center h-screen flex-wrap">
        {hybrid.map((item) => (
          <div className="w-1/3  border border-gray-300 p-4 rounded-md">
            <p className="text-justify">{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hybrid;
