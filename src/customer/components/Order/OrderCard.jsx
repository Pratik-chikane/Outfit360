import { Avatar, AvatarGroup, Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = ({ order }) => {
  const navigate = useNavigate();
  const status = order?.orderStatus;
  console.log("STATUS", status);
  return (
    <div
      onClick={() => navigate(`/account/order/${order?.id}`)}
      className="border p-5 shadow-md hover:shadow-xl "
    >
      {order?.orderItems?.map((item) => (
        <Grid
          className="pt-2"
          container
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex cursor-pointer ">
              <AvatarGroup max={3}>
                <Avatar src={item.product.imageUrl}></Avatar>
              </AvatarGroup>

              <div className="ml-5 space-y-2">
                <p className="">{item?.product.title}</p>
                <p className="opacity-50 text-xs font-semibold">
                  Size: {item?.size}
                </p>
                <p className="opacity-50 text-xs font-semibold">
                  Color: {item?.product.color}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p>₹{item.product.discountedPrice}</p>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={6} className="pt-5">
      {order?.orderStatus === "DELIVERED" && (
          <div className="">
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span className="text-green-600 mr-2 text-md">
                Order Status: {order?.orderStatus}
              </span>
            </p>
          </div>
        )}
        {(order?.orderStatus === "PLACED") | "SHIPPED" | "CONFIRMED" && (
          <div className="">
            <p>
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <span className="text-green-600 mr-2 text-md">
                Order Status: {order?.orderStatus}
              </span>
            </p>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default OrderCard;
