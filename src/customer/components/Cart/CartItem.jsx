import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const handleUpdateCartItem=(num)=>{
    const data ={data:{quantity:item.quantity+num},cartItemId:item?.id}
    dispatch(updateCartItem(data))


  }
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item.id))
  }
  return (
    <div className="mt-10 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top pt-3 pl-6"
            src={item.product.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 pt-5 space-y-1 text-left">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size:{item.size},White</p>
          <p className="opacity-70 mt-2">Seller: {item.product.brand} </p>
          <div className="flex space-x-5 item-center text-gray-900 pt-6 text-left">
            <p className="font-semibold">₹{item.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item.price}</p>
            <p className="text-green-600 font-semibold">{item.discountedPercent}% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 py-4 px-4 ">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1) } disabled = {item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)}  sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
          <div>
          <Button onClick={handleRemoveCartItem} sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
