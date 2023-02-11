import React from "react";
import { cgs_content, cgs_head, sgs_content, sgs_head } from "../utils/gvt_schemes";
const Gvt_schemes = () => {
  return (
    <div className="space-y-6 ">
      <div>
        <h1 className="text-white text-3xl py-2">Central Government Schemes</h1>
        <ul className="text-left">
          {cgs_head.map((item, i) => (
            <a href={`#a${i + 1}`}>
              <li className="py-1 list-disc">{item}</li>
            </a>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-white text-3xl py-2">State Government Schemes</h1>
        <ul className="text-left">
          {sgs_head.map((item, i) => (
            <a href={`#b${i + 1}`}>
              <li className="py-1 list-disc">{item}</li>
            </a>
          ))}
        </ul>
      </div>
      <hr />

      <div>
        <h1 className="text-white text-2xl py-2">Central Government Schemes</h1>
        <ul>
          {cgs_content.map((item) => (
            <li id={item.number} className="text-left  my-4 p-3 bg-gray-300  rounded-md">
              {item.data}
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <div>
        <h1 className="text-white text-2xl py-2">State Government Schemes</h1>
        <ul>
          {sgs_content.map((item) => (
            <li id={item.number} className="text-left my-4 p-3 bg-gray-300  rounded-md">
              {item.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gvt_schemes;
