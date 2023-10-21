import React, { useEffect } from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart } = useSelector(store=>store)

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem,cart.deleteCartItem]);
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 px-5 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-10">
          <div className="border p-5">
            <p className="uppercase font-bold opacity-60 py-4 text-left">
              Price Details
            </p>
            <hr />
            <div className="space-y-3  font-semibold mb-8">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600 ">₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: ".6rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
