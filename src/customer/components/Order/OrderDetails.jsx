import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { deepPurple } from "@mui/material/colors";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { store } from "../../../State/store";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const data = { orderId: params.orderId };
    dispatch(getOrderById(data));
  }, [params.orderId]);

  console.log("ORDER", order?.order?.orderItems?.product?.id);

  return (
    <div className="px:5 lg:px-20 text-left">
      <div className="border rounded-md shadow-lg  my-10">
        <h1 className="font-bold text-xl p-7">Delivery Address</h1>
        <div className="pl-7 pb-7">
          <AddressCard address={order?.order?.deliveryAddress} />
        </div>
      </div>
      <div className="my-10 p-10 border shadow-lg rounded-md">
        <OrderTracker
          activeStep={
            order?.order?.orderStatus === "PLACED"
              ? 0
              : order?.order?.orderStatus === "CONFIRMED"
              ? 1
              : order?.order?.orderStatus === "SHIPPED"
              ? 3
              : order?.order?.orderStatus === "DELIVERED"
              ? 4
              : 2
          }
        />
      </div>
      <Grid className="space-y-7" container>
        {order?.order?.orderItems.map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />

                <div className="space-y-2 ml-10">
                  <p className="font-semibold">{item.product.title}</p>
                  <p className="space-x-5 text-xs opacity-70 font-semibold">
                    <span>Color: {item.product.color}</span>
                    <span>Size: {item.size}</span>
                  </p>
                  <p className="text-xs opacity-70 font-semibold">
                    Seller: {item.product.brand}
                  </p>
                  <p className="font-semibold">
                    ₹ {item.product.discountedPrice}
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <div
                onClick={() =>
                  navigate(
                    `/account/order/review/${item?.product?.id}`
                  )
                }
                className="border p-5 shadow-md hover:shadow-xl "
              >
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderIcon  sx={{ fontSize: "2rem" }} className="px-2" />

                  <span>Rate & Review Product</span>
                </Box>
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
