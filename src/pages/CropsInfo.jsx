import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Kharif, RABI } from "../utils/crops";
import { Link } from "react-router-dom";

const CropsInfo = () => {
  return (
    <div className="mt-24">
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">{RABI[0].season}</h1>
        <h3>{RABI[0].sown}</h3>
        <h3>{RABI[0].Harvested}</h3>
        <div className="flex flex-wrap space-x-4">
          {RABI.map((crop) => (
            <Card sx={{ maxWidth: 250, mb: 4 }}>
              <CardActionArea>
                <CardMedia component="img" height="120" image={crop.img} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {crop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {crop.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/${crop.title}`}>
                  <Button size="small" color="primary">
                    How to Plant
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">{Kharif[0].season}</h1>
        <h3>{Kharif[0].sown}</h3>
        <h3>{Kharif[0].Harvested}</h3>
        <div className="flex flex-wrap space-x-4">
          {Kharif.map((crop) => (
            <Card sx={{ maxWidth: 250, mb: 4 }}>
              <CardActionArea>
                <CardMedia component="img" height="120" image={crop.img} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {crop.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {crop.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/${crop.title}`}>
                  <Button size="small" color="primary">
                    How to Plant
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CropsInfo;
