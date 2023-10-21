import { Button } from "@mui/material";
import React from "react";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const PreviousAddressCard = ({ address }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e,address) => {
        e.preventDefault();
    

    
        // const address = {
        //   firstName: {address?.firstName },
        //   lastName: {address?.lastName },
        //   streetAddress: data.get("address"),
        //   city: data.get("city"),
        //   state: data.get("state"),
        //   zipCode: data.get("zip"),
        //   mobile: data.get("phoneNumber"),
        // };
    
        const orderData = { address, navigate };
        
        dispatch(createOrder(orderData));
    
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&",address);
      };
  return (
    <div>
      {address?.map((address) => (
        <div className="space-y-1">
          <p className="font-semibold">
            {address?.firstName + " " + address?.lastName}
          </p>
          <p>
            {address?.streetAddress},{address?.city},{address?.state},
            {address?.zipCode}
          </p>
          <div >
            <p className="font-semibold">phone number</p>
            <p>{address?.mobile}</p>
          </div>
          <div className="pb-10">
     
            <Button  onClick={(e) => handleSubmit(e, address)}
              sx={{ mt: 1.5, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousAddressCard;
