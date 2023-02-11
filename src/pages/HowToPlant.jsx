import React from "react";
import { useLocation } from "react-router-dom";
import { data } from "../utils/helper";

const HowToPlant = () => {
  const location = useLocation();
  const crop = location.pathname.split("/").pop();
  const cropData = data(crop);

  return (
    <div className="space-y-4 mt-24">
      <h1 className="text-3xl">{crop}</h1>
      <h3 className="font-medium">How to Plant {crop}</h3>
      <ul className="space-y-4">
        {cropData?.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default HowToPlant;
