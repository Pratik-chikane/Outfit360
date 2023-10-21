import React from "react";
import { Route, Routes } from "react-router-dom";

import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import HomePage from "../customer/Pages/HomePage/HomePage";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import ReviewRating from "../customer/components/Order/ReviewRating";
import LoginForm from "../customer/Auth/LoginForm";
import RegisterForm from "../customer/Auth/RegisterForm";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
      
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route
          path="/account/order/review/:productId"
          element={<ReviewRating />}
        ></Route>
          <Route
          path="/payment/:orderId"
          element={<PaymentSuccess />}
        ></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
