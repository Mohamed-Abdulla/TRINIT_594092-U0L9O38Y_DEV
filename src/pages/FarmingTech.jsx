import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PA from "../assets/precison_agriculture.jpg";
import drones from "../assets/drones.jpg";
import IMS from "../assets/IrrigationMS.jpg";
import LMS from "../assets/LiveStockMS.jpg";
import SS from "../assets/SeedSelection.jpg";
import WF from "../assets/WeatherForcast.jpg";
import tractors from "../assets/tractors.jpg";
import feed from "../assets/liveStockfeed.jpg";
import mobile from "../assets/mobileAPP.jpg";

const FarmingTech = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="mb-4 text-2xl font-medium">Farming Technology that can help farmers</h1>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Precision Agriculture</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={PA} className="w-40 h-40 rounded-md mb-2" alt="" />
          <Typography>
            Precision agriculture involves using high-tech tools and techniques to gather information about crop
            conditions and soil health. This information is used to make more informed decisions about planting,
            fertilizing, and harvesting crops. Precision agriculture can help farmers reduce waste, increase efficiency,
            and optimize yields. For example, by using satellite imagery and mapping tools, farmers can identify areas
            of their fields that are underperforming and apply fertilizer or irrigation only where it is needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Drones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={drones} className="w-40 h-40 rounded-md mb-2" alt="" />
          <Typography>
            Drones equipped with sensors and cameras can be used for a variety of tasks in agriculture. For example,
            drones can be used to gather information about crop health and growth, to map and survey fields, and to
            spray pesticides and fertilizers more precisely. The use of drones can help farmers save time, reduce costs,
            and increase efficiency.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Irrigation Management Systems</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={IMS} className="w-40 h-40 rounded-md mb-2" alt="" />
          <Typography>
            These systems use sensors, weather data, and other information to optimize irrigation schedules and reduce
            water waste. For example, by monitoring soil moisture levels and weather conditions, farmers can avoid
            over-irrigating or under-irrigating their crops. This can help to conserve water, reduce costs, and improve
            crop yields.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Livestock Management Systems</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={LMS} className="w-40 h-40 rounded-md mb-2 object-fill" alt="" />

          <Typography>
            These systems use sensors and wearable technology to monitor the health and well-being of livestock. For
            example, by monitoring feed intake, body temperature, and activity levels, farmers can identify health
            problems early and take action to address them. This can help to improve animal health and reduce the risk
            of disease outbreaks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5bh-content" id="panel5bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Seed Selection and Crop Planning Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={SS} className="w-40 h-40 rounded-md mb-2" alt="" />

          <Typography>
            These tools use data and algorithms to help farmers select the best seeds and plan their crops based on soil
            type, climate, and other factors. For example, by using data on soil nutrient levels, rainfall patterns, and
            crop suitability, farmers can choose seeds that are most likely to thrive in their fields. This can help to
            optimize yields and reduce the risk of crop failure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel6bh-content" id="panel6bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Weather Forecasting and Monitoring Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={WF} className="w-40 h-40 rounded-md mb-2" alt="" />
          <Typography>
            These tools provide farmers with real-time information about weather conditions, allowing them to make more
            informed decisions about planting and harvesting. For example, by monitoring weather forecasts and gathering
            data on soil moisture levels and temperature, farmers can decide when to plant and harvest their crops to
            minimize the risk of crop damage from adverse weather conditions
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel7bh-content" id="panel7bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Automated Tractors and Harvesting Equipment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={tractors} className="w-40 h-40 rounded-md mb-2" alt="" />

          <Typography>
            Automated tractors and harvesting equipment can help farmers save time and increase efficiency, while
            reducing the need for manual labour. For example, by using GPS and other technologies, automated tractors
            can plant and cultivate crops more precisely, reducing waste and improving yields.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel8"} onChange={handleChange("panel8")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel8bh-content" id="panel8bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Livestock Feed Management Systems</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={feed} className="w-40 h-40 rounded-md mb-2" alt="" />

          <Typography>
            These systems use data and algorithms to optimize livestock feed programs, reducing waste and improving
            animal health. For example, by monitoring feed intake and animal weight, farmers can adjust feed rations to
            ensure that animals are getting the right amount of nutrients to maintain good health.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel9"} onChange={handleChange("panel9")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel9bh-content" id="panel9bh-header">
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Mobile Applications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={mobile} className="w-40 h-40 rounded-md mb-2" alt="" />

          <Typography>
            There are numerous mobile applications designed specifically for farmers that provide information on
            weather, market prices, and crop management practices, among other things. For example, farmers can use
            mobile applications to monitor weather forecasts, check market prices for crops and livestock, and receive
            alerts about new government programs and initiatives.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FarmingTech;
