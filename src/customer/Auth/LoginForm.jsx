import React from "react";

import coverImg from "../../Assets/cover.jpg";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../../State/Auth/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData)).then(() => {

      if (auth?.jwt != null) {
        navigate(`/`);
      } else {
        toast.error("Enter Valid Credentials", {
          position: "top-center",
          autoClose: 5000,
        });
       
      }
    });
  }
   
  return (
    <div className="my-20 border shadow-xl grid grid-cols-1 md:grid-cols-2 m-auto h-[500px]  sm:max-w-[900px]">
      <div className=" hidden md:block">
        <img
          className="object-cover object-center w-full h-[500px] overflow-hidden"
          src={coverImg}
          alt="/"
        />
      </div>
      <div className="px-6 justify-around">
        <div className=" flex justify-center items-center">
          <p className="py-16 text-3xl font-semibold">OUTFIT 360</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
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
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center flex-col items-center">
          <div className="py-3 flex items-center">
            <p>Don't have an account ?</p>
            <Button
              onClick={() => navigate("/register")}
              className="ml-5 "
              size="small"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
