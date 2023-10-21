import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Grid, TextField, Box } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import { store } from "../../../State/store";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  const data = {orderId:searchParams.get("order_id")}

  console.log("ORDERID",data);
  useEffect(() => {
    dispatch(getOrderById(data));
  }, [orderId]);


  const handleCheckout=()=>{
    dispatch(createPayment(orderId))
    console.log("############");

  }
  console.log();
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border mr-6">
        <AddressCard address={order.order?.deliveryAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-10 ">
            <div className="border p-5">
              <p className="uppercase font-bold opacity-60 py-4 text-left">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-8">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600 ">₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: ".6rem", bgcolor: "#9155fd" }}
                onClick={handleCheckout}
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
