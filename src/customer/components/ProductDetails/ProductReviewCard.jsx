import { Avatar, Grid, Rating, Box } from "@mui/material";
import React from "react";

const ProductReviewCard = ({reviewRating}) => {
  console.log("*************",reviewRating?.rating);
  console.log("*************",reviewRating?.review);
  return (
    <div>
      <Grid container spacing={1} gap={3}>
        <Grid item xs={1.3}>
          <Box>
            <Avatar
              className="text-white pr-2"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              {reviewRating?.user?.firstName[0]?.toUpperCase()}
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2 ">
            <div>
              <p className=" font-semibold text-lg ">{reviewRating?.user?.firstName}</p>
              <p className="opacity-70 pb-2">June 4, 2023</p>
            </div>
          </div>
          <div className="text-left ">
            <Rating value={reviewRating?.rating} name="half-rating" readOnly precision={0.5} />
            <p className="pb-4">{reviewRating?.review}</p>
          </div>
          <hr/>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
