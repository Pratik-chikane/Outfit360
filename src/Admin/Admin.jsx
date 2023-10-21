import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Dashboard from "./Components/Dashboard";
import ProductsTable from "./Components/ProductsTable";
import OrdersTable from "./Components/OrdersTable";
import CustomerTable from "./Components/CustomerTable";
import CreateProductForm from "./Components/CreateProductForm";
import AdminDashboard from "./Components/Dashboard";


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  {
    name: "products",
    path: "/admin/products",
    icon: <InventoryIcon/>,
  },
  {
    name: "customers",
    path: "/admin/customers",
    icon: <SensorOccupiedIcon />,
  },
  { name: "orders", path: "/admin/orders", icon: <ViewCarouselIcon /> },

  {
    name: "Add Product",
    path: "/admin/product/create",
    icon: <AddShoppingCartIcon />,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-[100vh] ">
        <CssBaseline />
        <div className="shadow-lg shadow-gray-600 w-[15%] border border-r-grey-300 h-full fixed top-0">
          {drawer}
        </div>
        <div className="w-[85%] ml-[15%] h-full">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomerTable />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
