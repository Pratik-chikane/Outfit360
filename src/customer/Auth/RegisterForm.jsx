import React, { useEffect } from "react";

import coverImg from "../../Assets/cover.jpg";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

   if( dispatch(register(userData)))
    toast.success("Registration Success!", {
      position: "top-center",
      autoClose: 5000,
    });
    navigate(`/`);
  };
  return (
    <div className="my-20 border shadow-xl grid grid-cols-1 md:grid-cols-2 m-auto h-[590px] lg:h-[500px]  sm:max-w-[900px]">
      <div className=" hidden md:block">
        <img
          className="object-cover object-center w-full h-[500px] overflow-hidden"
          src={coverImg}
          alt="/"
        />
      </div>

      <div className="px-5 justify-around">
        <div className=" flex justify-center items-center">
          <p className="p-10 text-3xl font-semibold text-gray-600">
            OUTFIT 360
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="password"
                id="password"
                name="password"
                label="Password"
                autoComplete="disabled"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center flex-col items-center">
          <div className="py-3 flex items-center">
            <p>Already have an account ?</p>
            <Button
              onClick={() => navigate("/login")}
              className="ml-5 "
              size="small"
            >
              Login
            </Button>
          </div>
          <ToastContainer />
        </div>
      </div>
      
    </div>
  );
};

export default RegisterForm;
