import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { store } from "../../../State/store";
import { getOrderById } from "../../../State/Order/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const [paymentLinkId, setPaymentLinkId] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setPaymentLinkId(urlParams.get("razorpay_payment_link_id"))
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if(paymentId){
      const data = { orderId, paymentId,paymentLinkId };

      dispatch(getOrderById(data));
      dispatch(updatePayment(data));
    }

  }, [orderId, paymentId,paymentLinkId]);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          security="success"
          sx={{ mb: 6, mt: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulations Your Order Has Been Placed
        </Alert>
        <OrderTracker activeStep={0} />

        <Grid container className="space-y-5 py-5 pt-20">
          {order.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className="border shadow-xl rounded-md p-5 "
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center">
                  <img
                    className="w-[5rem] h-[5rem] object-cover object-top"
                    src={item.product.imageUrl}
                    alt=""
                  />
                  <div className="ml-5 space-y-2">
                    <p>{item.product.title}</p>
                    <div className="opacity-50 text-sm font-semibold space-x-5">
                      <span>Color: {item.color}</span>
                      <span>Size: {item.size}</span>
                    </div>
                    <p className="opacity-50 text-sm font-semibold space-x-5">
                      Seller: {item.product.brand}
                    </p>
                    <p className="opacity-70 text-md font-semibold space-x-5">
                      ₹ {item.discountedPrice}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={order.order?.deliveryAddress} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
