import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import NikeNavbar from "../../Header/navbar";
import CarouselAds from "../../Header/carousel";
import { Link } from "react-router-dom";

function MensDetails() {
  const products = [
    {
      id: 0,
      name: "Nike Dunk Low Retro",
      price: 109.95,
      imageSrc:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-shoe-dd36JB.png",
    },
    {
      id: 1,
      name: "Nike Dunk Low",
      price: 119.95,
      imageSrc:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/56e981d8-dc93-46d6-9f5f-1eaae1b4bafc/dunk-low-shoes-nF8W1z.png",
    },
    {
      id: 2,
      name: "Nike Air Force 1 '07",
      price: 109.95,
      imageSrc:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_593,c_limit/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoes-GjGXSP.png",
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
        padding="2em"
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="left">
            Trending This Week
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
            <Typography variant="subtitle1" style={{ fontWeight: "bold"}}>
              £{products[0].price.toFixed(2)}
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
            <Typography variant="subtitle1" style={{ fontWeight: "bold"}}>
              £{products[1].price.toFixed(2)}
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
            <Typography variant="subtitle1" style={{ fontWeight: "bold"}}>
              £{products[2].price.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default MensDetails;