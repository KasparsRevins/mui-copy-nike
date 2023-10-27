import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import NikeNavbar from "../../Header/navbar";
import CarouselAds from "../../Header/carousel";
import { Link } from "react-router-dom";

function NewFeaturedDetails() {
  const products = [
    {
      id: 0,
      name: "Jordan True Flight",
      price: 65.95,
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/329f1771-196d-40a2-83be-c045974bf685/jordan-true-flight-older-shoes-QtbhRW.png",
    },
    {
      id: 1,
      name: "Nike Dunk Low",
      price: 109.95,
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b81dc45-116d-42ce-9d49-5a7c5c9bfa16/dunk-low-shoes-15mQNw.png",
    },
    {
      id: 2,
      name: "Nike Air Max Plus",
      price: 184.95,
      imageSrc:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d81dd32a-e2a9-4737-82c8-1becedb7ae2f/air-max-plus-shoes.png",
    },
  ];

  return (
    <div>
      <NikeNavbar />
      <CarouselAds />
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        padding="1em"
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="left">
            New Trainers & Gear
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Link to="/Showcase" style={{ textDecoration: 'none' }}>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              boxShadow: "none",
            }}
            >
            <img
              src={products[0].imageSrc}
              alt={products[0].name}
              style={{ width: "100%", height: "auto" }}
              />
            <Typography variant="h6" sx={{textDecoration: "none"}}>{products[0].name}</Typography>
            <Typography variant="subtitle1">
              ${products[0].price.toFixed(2)}
            </Typography>
          </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              boxShadow: "none",
            }}
          >
            <img
              src={products[1].imageSrc}
              alt={products[1].name}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6">{products[1].name}</Typography>
            <Typography variant="subtitle1">
              ${products[1].price.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              boxShadow: "none",
            }}
          >
            <img
              src={products[2].imageSrc}
              alt={products[2].name}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6">{products[2].name}</Typography>
            <Typography variant="subtitle1">
              ${products[2].price.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewFeaturedDetails;