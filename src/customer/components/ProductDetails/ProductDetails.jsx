import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {
  Avatar,
  Box,
  Grid,
  LinearProgress,
  ListItemText,
  Rating,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Button from "@mui/material/Button";
import ProductReviewCard from "./ProductReviewCard";

import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById, findProducts } from "../../../State/Product/Action";
import { store } from "../../../State/store";
import { addItemToCart } from "../../../State/Cart/Action";
import HomeSectionCarousel from "../HomeSectionCarousel/HomeSectionCarousel";
import ProductCard from "../Product/ProductCard";
import {

  getAllReviewsRatings,
} from "../../../State/ReviewRating/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const product = {
  name: "Basic Tee 6-Pack",

  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],

  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  // description:
  //   'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products, ratingReview } = useSelector((store) => store);

  const handleAddToCart = () => {
    if (selectedSize?.name) {
      const data = { productId: params.productId, size: selectedSize?.name };
      dispatch(addItemToCart(data));
      console.log("Add ITem ", data);

      console.log("SIZE", selectedSize?.name);
      navigate(`/cart`);
    }else{
      toast.error("Select Size To Add To Cart", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  var category = products?.product?.category?.name;
  console.log("PARAENT", category);

  useEffect(() => {
    const data1 = {
      category: category,
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "in_stock",
    };

    const data = { productId: params.productId };
    console.log("DATAA",data);

    console.log("Category before dispatch:", category);

    dispatch(findProductById(data)).then(() => {
      dispatch(findProducts(data1));
      dispatch(getAllReviewsRatings(data))
   
    });
  }, [params.productId, category]);


  console.log("REVIEWRATINGS", ratingReview?.reviewsRatings);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        {/* <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {products.product?.category?.map((categoryName) => (
              <li >
                <div className="flex items-center">
                  <a
                    // href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {categoryName.parentCategory.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav> */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg mx-w-[30rem] max-h-[35rem]">
              <img
                src={products.product?.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 text-left">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg-text-xl font-semibold text-gray-900">
                {products.product?.brand}
              </h1>

              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 item-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">
                  ₹{products.product?.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  ₹{products.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {products.product?.discountedPercent}% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={1.5} readOnly />
                  <p className="opacity-50 text-sm">3244 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-900 hover:text-indigo-500">
                    1245 Reviews
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product?.sizes?.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{ px: "1.7rem", py: "1rem", mt: 3, bgcolor: "#9155fd" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product?.highlights?.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {" "}
                    {products.product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* rating and reviews */}
        <section>
          <div>
            <h1 className="text-xl font-semibold pl-10 py-5 ">
              Review And Ratings
            </h1>
          </div>

          <Grid container spacing={1} className="">
            <Grid item md={6} xs={12} className="space-x-10 border">
              <h1 className="text-xl font-semibold pl-10 py-5 ">
                Product Ratings
              </h1>
              <div className="flex items-center space-x-3">
                <Rating value={4.6} precision={0.5} readOnly />
                <p className="opacity-60">53223 Ratings</p>
              </div>
              <Box className="mt-5 text-left space-y-3">
                <Grid container alginItems="center" gap={2}>
                  <Grid item xs={3}>
                    <p>Excellent</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress
                      sx={{
                        bgcolor: "#d0d0d0",
                        borderRadius: 4,
                        height: 7,
                      }}
                      variant="determinate"
                      value={40}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid container alginItems="center" gap={2}>
                  <Grid item xs={3}>
                    <p>Very Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress
                      sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      variant="determinate"
                      value={30}
                      color="success"
                    />
                  </Grid>
                </Grid>
                <Grid container alginItems="center" gap={2}>
                  <Grid item xs={3}>
                    <p>Good</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress
                      sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      variant="determinate"
                      value={25}
                      className="bg-yellow-300"
                    />
                  </Grid>
                </Grid>
                <Grid container alginItems="center" gap={2}>
                  <Grid item xs={3}>
                    <p>Average</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress
                      sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      variant="determinate"
                      value={20}
                      color="warning"
                    />
                  </Grid>
                </Grid>
                <Grid container alginItems="center" gap={2}>
                  <Grid item xs={3}>
                    <p>Poor</p>
                  </Grid>
                  <Grid item xs={7}>
                    <LinearProgress
                      sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                      variant="determinate"
                      value={15}
                      color="error"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} className="space-x-10 border">
              <div>
                <p className="p-10 text-xl font-semibold pl-10 py-5  ">
                  Product Reviews
                </p>
              </div>
              <div className="space-y-5 h-[20rem] overflow-y-scroll">
                {ratingReview?.reviewsRatings?.map((item) => (
                  <ProductReviewCard
                    reviewRating={item}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </section>
        {/* Similar Product */}
        <section className="pt-10">
          <h1 className="py-5 pl-5 text-xl font-bold text-left">
            Similar Products
          </h1>
          <div className="space-y-10 py-10 flex flex-col justify-center px-3">
            {/* {products?.products?.content?.map((item) => (
              <HomeSectionCarousel prop={item}/>
            ))} */}
            <HomeSectionCarousel prop={products?.products?.content} />
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}
