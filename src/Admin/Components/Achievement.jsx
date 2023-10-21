import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";
// import tropyImg from "e-commerce\src\Assets\tropy.jpg";
import coverImg from "../../Assets/cover.jpg";
const image = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const tropyImage = styled("img")({
  right: 36,
  bottom: 20,
  height: 98,
  position: "absolute",
});

const Achievement = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h5" sx={{ letterSpacing: "0.25px", fontWeight:"bold",pb:1}}>
          OutFit 360
        </Typography>
        <Typography variant="body1">Congratulations 🥳</Typography>
        <Typography variant="h5" sx={{my:2.5}}>420.8K</Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <image src=""></image>
        <tropyImage src={coverImg}></tropyImage>
      </CardContent>
    </Card>
  );
};

export default Achievement;
