import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { cgs_content, cgs_head, sgs_content, sgs_head } from "../utils/gvt_schemes";
const Gvt_schemes = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="space-y-6">
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
            <li id={item.number} className="text-left my-4 p-2 bg-gray-500  rounded-md">
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
            <li id={item.number} className="text-left my-4 p-2 bg-gray-500  rounded-md">
              {item.data}
            </li>
          ))}
        </ul>
      </div>

      {/* <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>General settings</Typography>
          <Typography sx={{ color: "text.secondary" }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
            quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>You are currently not an owner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.
            Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Advanced settings</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
            augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas
            augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};

export default Gvt_schemes;
