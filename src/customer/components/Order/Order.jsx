import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../State/store";
import { getUserOrderHistory } from "../../../State/Order/Action";
const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Return", value: "return" },
];

const Order = () => {
  const {order} = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserOrderHistory())
  },[])
  console.log("ORDER",order?.orders);
  return (
    <div className="mt-10 px-10 lg:px-40">
      {/* <Grid  container sx={{ justifyContent: "space-between"}}>
        <Grid item xs={2.5}>
          <div className="h-auto border shadow-lg bg-white p-5  sticky top-5">
            <h1 className="font-bold text-lg">Filters</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex items-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid> */}
        <Grid item xs={9}>
          <div className="space-y-7 align-center">
          {order?.orders?.map((item,index) => (
            <OrderCard order={item}/>
          ))}
          </div>

        </Grid>
    
    </div>
  );
};

export default Order;
