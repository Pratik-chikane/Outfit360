import React from "react";
import { HomeCarouselData } from "./HomeCarousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCarousel() {
  const items = HomeCarouselData.map((item) => (
    <img src={item.image} alt="hwe" role="presentation" />
  ));
  console.log(items);
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
}

export default MainCarousel;
