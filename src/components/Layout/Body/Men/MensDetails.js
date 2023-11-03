import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import products from "./Data/MensProducts";
import Navbar from "../../Header/NavBar/Navbar";
import AdCarousel from "../../Header/Ad Carousel/AdCarousel";

function MensDetails() {
  return (
    <div>
      <Navbar />
      <AdCarousel />
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
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
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
                  src={product.imageSrc}
                  alt={product.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" sx={{ textDecoration: "none" }}>{product.name}</Typography>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  £{product.price.toFixed(2)}
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MensDetails;
