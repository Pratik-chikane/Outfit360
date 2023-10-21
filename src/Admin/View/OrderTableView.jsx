import {
    Avatar,
    AvatarGroup,
    Button,
    Card,
    CardHeader,
    Menu,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { store } from "../../State/store";
  import {
    confirmOrder,
    deleteOrder,
    deliveredOrder,
    getOrders,
    shipOrder,
  } from "../../State/Admin/Order/Action";
  
  const OrderTableView = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);
    const { adminOrder } = useSelector((store) => store);
  
    const handleClick = (event, index) => {
      const newAnchorArray = [...anchorEl];
      newAnchorArray[index] = event.currentTarget;
      setAnchorEl(newAnchorArray);
    };
  
    const handleClose = (index) => {
      const newAnchorArray = [...anchorEl];
      newAnchorArray[index] = null;
      setAnchorEl(newAnchorArray);
    };
  
    useEffect(() => {
      dispatch(getOrders());
    }, [
      adminOrder.confirmed,
      adminOrder.shipped,
      adminOrder.delivered,
      adminOrder.deletedOrders,
    ]);
  
    console.log("admin orders", adminOrder);
  
    const handleShippedOrder = (orderId) => {
      dispatch(shipOrder(orderId));
      handleClose();
    };
    const handleConfirmedOrder = (orderId) => {
      dispatch(confirmOrder(orderId));
      handleClose();
    };
    const handleDeliveredOrder = (orderId) => {
      dispatch(deliveredOrder(orderId));
      handleClose();
    };
    const handleDeleteOrder = (orderId) => {
      dispatch(deleteOrder(orderId));
      console.log("DELTE", orderId);
    };
    return (
      <div className="p-5">
        <Card className="mt-2">
          <CardHeader title="Recent Orders" />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
          
                  <TableCell align="left">Title</TableCell>
  
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Status</TableCell>
             
                </TableRow>
              </TableHead>
              <TableBody>
                {adminOrder?.orders?.slice(0,10).map((item, index) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                        {item.orderItems.map((orderItem) => (
                          <Avatar src={orderItem.product.imageUrl}></Avatar>
                        ))}
                      </AvatarGroup>
                    </TableCell>
             
                    <TableCell align="left" scope="row">
                      {item.orderItems.map((orderItem) => (
                        <p> {orderItem.product.title}</p>
                      ))}
                    </TableCell>
  
                    <TableCell align="left">{item.totalPrice}</TableCell>
                    <TableCell align="left">
                      <span
                        className={`px-5 py-2 text-white rounded-full ${
                          item.orderStatus == "CONFIRMED"
                            ? "bg-[green]"
                            : item.orderStatus == "SHIPPED"
                            ? "bg-[#65d4d2]"
                            : item.orderStatus === "PENDING"
                            ? "bg-[grey]"
                            : item.orderStatus === "PLACED"
                            ? "bg-[#02B290]"
                            : "bg-[#c08ae1]"
                        }`}
                      >
                        {item.orderStatus}
                      </span>
                    </TableCell>
  
                  
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    );
  };
  
  export default OrderTableView;
  