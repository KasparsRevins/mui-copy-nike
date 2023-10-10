import Carousel from "react-material-ui-carousel";
import React from "react";
import { Box, Paper } from "@mui/material";

function FuncCarousel(props) {
  var items = [
    {
      name: "15% OFF SELECTED BRAS AND LEGGINGS",
      description:
        "Pair bras and leggings. Use code MIX23 on selected styles*. Valid til 12 October 9am CEST Shop *Promo Terms",
    },
    {
      name: "Winter Wear",
      description: "Get Ready for Cold and Rainy Weather Shop",
    },
    {
      name: "Shop All New Arrivals",
      description: "Shop",
    },
    {
      name: "Free Delivery & Returns",
      description:
        "Nike Members get free delivery and free 30-day returns. Learn More Join Us",
    },
  ];

  return (
    <Carousel navButtonsAlwaysInvisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ backgroundColor: "#F5F5F5", boxShadow: 0 }}>
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
    </Paper>
  );
}

function CarouselAds() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5", marginTop: "6%" }}>
      <FuncCarousel />
    </Box>
  );
}

export default CarouselAds;
