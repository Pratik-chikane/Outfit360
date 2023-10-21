import {
  Avatar,
  Button,
  Card,
  CardHeader,
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
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { store } from "../../State/store";
import { getAllUsers } from "../../State/Auth/Action";

const CustomerTable = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);


  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };


  useEffect(() => {

    dispatch(getAllUsers());
  }, []);

  console.log("AUTH USERS",auth?.users);
  return (
    <div className="p-20">
      <Card className="mt-2">
        <CardHeader  title="All Products" />
        <TableContainer sx={{p:5}} component={Paper}>
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">User Registered On </TableCell>
           
              </TableRow>
            </TableHead>
            <TableBody>
              {auth?.users?.map((user) => (
                <TableRow
                  key={user.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell align="left">
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {item.title}
                  </TableCell> */}

                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">
                    {user?.createdAt?.substring(0, 10)}
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

export default CustomerTable;
