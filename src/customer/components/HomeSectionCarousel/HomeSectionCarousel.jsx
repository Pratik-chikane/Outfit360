// import React, { useEffect, useRef, useState } from "react";

// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import "react-multi-carousel/lib/styles.css";
// import { useNavigate } from "react-router-dom";
// import ProductCard from "../Product/ProductCard";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import AliceCarousel from "react-alice-carousel";
// import { Button } from "@mui/base";

// import { useDispatch, useSelector } from "react-redux";
// import { store } from "../../../State/store";
// import { findProducts } from "../../../State/Product/Action";
// import { mens_kurta } from "../../../Data/mensKurta";

// const HomeSectionCarousel = ({ prop, sectionName }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);
//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   const responsive = {
//     0: {
//       items: 1.5,
//     },
//     720: {
//       items: 3,
//     },
//     1024: {
//       items: 5,
//       itemsFit: "contain",
//     },
//   };

//   // const items = prop
//   //   ?.slice(0, 10)
//   //   ?.map((item) =>  <ProductCard product={item} />);
//   // const items = prop
//   //   ?.slice(0, 20)
//   //   ?.map((item) => <ProductCard index={item.id} product={item} />);
//   const items = mens_kurta.slice(0,20).map((item)=><HomeSectionCard product={item}/>)

//   return (
//     <div className="border relative px-4 lg:px-8" >
//       <div className="relative p-5 ">
//         <AliceCarousel
//           mouseTracking
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           responsive={responsive}
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />
//         {activeIndex !== items?.length - 5 && (
//           <Button
//             variant="contained"
//             className="z-50 bg-white"
//             onClick={slideNext}
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}

//         {activeIndex !== 0 && (
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             className="z-50 bg-white"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             aria-label="next"
//           >
//             <KeyboardArrowLeftIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarousel;
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { mens_kurta } from "../../../Data/mensKurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import ProductCard from "../Product/ProductCard";
const HomeSectionCarousel = ({ prop, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const responsive = {
    0: {
      items: 1.5,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };
  //   const items = mens_kurta
  //     .slice(0, 20)
  //     .map((item) => <HomeSectionCard product={item} />);

  const items = prop
    ?.slice(0, 20)
    ?.map((item) => <ProductCard index={item.id} product={item} />);
  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 px-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items?.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white "
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
              "&:hover": {
                bgcolor: "#9155fd",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
             
              "&:hover": {
                bgcolor: "#9155fd",
              },
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
