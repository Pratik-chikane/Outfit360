import { Button, Grid, Rating, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../../State/Product/Action";
import { createRating, createReview, createReviewRating } from "../../../State/ReviewRating/Action";

const ReviewRating = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { products, ratingReview } = useSelector((store) => store);
  const [ratingValue, setRatingValue] = useState(0);
  const navigate = useNavigate()


  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };


  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [params.productId]);

  const reviewReq = {
    productId: params.productId,
    rating: ratingValue,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const req = {
      productId: params.productId,
      review: data.get("description"),
      rating: ratingValue
    };
    console.log("REVIEW RATING", req);
    navigate(`/product/${params.productId}`)
  

    dispatch(createReviewRating(req));
    
  };

  console.log("REVIEW VALUE", ratingReview.review);
  console.log("RATING VALUE", ratingReview.rating);
  return (
    <div>
      <div className="p-10 md:p-20">
        <Grid item xs={12} md={6} className="pb-10">
          <div className="shadow-md shadow-gray-600 p-6 ">
            <p className="font-bold">Rate & Review Product</p>
          </div>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <div className="shadow-lg shadow-gray-600 p-6 flex flex-col md:flex-row">
              <div className="max w-[15rem] max h-[20rem] justify-center items-center">
                <img
                  className="h-full w-full object-cover object-left-top "
                  src={products?.product?.imageUrl}
                  alt=""
                />
              </div>
              <div className=" bg-white p-3 items-center justify-center">
                <div>
                  <p className="font-bold opacity-60 py-1 ">
                    {products?.product?.brand}
                  </p>
                  <p className="my-1">{products?.product?.title}</p>
                </div>
                <div className="py-1">
                  <p className="opacity-50 py-1">
                    Color: {products?.product?.color}
                  </p>
                  <p className="opacity-50 py-1">Size: free</p>
                  <div className="flex space-x-2">
                    <p className="font-semibold py-1">
                      ₹{products?.product?.discountedPrice}
                    </p>
                    <p className="opacity-50 font-semibold py-1 line-through">
                      ₹{products?.product?.price}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex items-center space-x-3">
                    <Rating name="read-only" value={4.3} readOnly />
                    <p className="opacity-50 text-sm">3244 Ratings</p>
                    <p className="ml-3 text-sm font-medium text-indigo-900 hover:text-indigo-500">
                      1245 Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="shadow-lg shadow-gray-600 p-6">
              <div>
                <div className="p-4">
                  <p className="font-semibold mb-2">Rate This Product</p>
                  <div className="flex items-center space-x-3">
                    <Rating
               
                      value={ratingValue}
                     onChange={handleRatingChange}
                      required
                    />
                    
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="p-4">
                    <p className="font-semibold mb-3">Write A Review</p>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="outlined-multiline-static"
                          label="Description"
                          multiline
                          required
                          name="description"
                          rows={3}
                          // value={productData.description}
                          // on={handleChange}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          sx={{ p: 1.3, bgcolor: "#9155fd" }}
                          className="py-20"
                          size="medium"
                          type="submit"
                        >
                          Submit Review
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ReviewRating;
