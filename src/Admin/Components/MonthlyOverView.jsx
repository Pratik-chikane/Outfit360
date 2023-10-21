import { AccountBoxOutlined, TrendingUp } from "@mui/icons-material";
import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 
import DevicesIcon from "@mui/icons-material/Devices"; 
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; 
import MoreVertIcon from "@mui/icons-material/MoreVert"; 

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
const salesData = [
  {
    stats: "245K",
    title: "Sales",
    color: "#E5D68A",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5K",
    title: "Customers",
    color: "#22CB5C",
    icon: <AccountCircleIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "2.5K",
    title: "Products",
    color: "#DE4839",
    icon: <DevicesIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "88K",
    title: "Revenue",
    color: "#12B0E8",
    icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />,
  },
];
const renderStatus = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};
const MonthlyOverView = () => {
  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontweight: 600, color: "text.primary" ,mx:0.5}}
            >
              Total 48.5% Growth 😎
            </Box>
             This Month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: ".12px !important",
          },
        }}
      />
      <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
      <Grid container spacing={[5,0]}>
      {renderStatus()}

      </Grid>

      </CardContent>
    </Card>
  );
};

export default MonthlyOverView;
