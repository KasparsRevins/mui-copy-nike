import Carousel from "react-material-ui-carousel";
import React from "react";
import { Box, Paper } from "@mui/material";
import ads from "./Data/Ads";

function Item(props) {
  return (
    <Paper
      sx={{
        backgroundColor: "#F5F5F5",
        boxShadow: 0,
        padding: "1px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <p>{props.item.name}</p>
      <p style={{ fontSize: "12px" }}>{props.item.description}</p>
    </Paper>
  );
}

function AdCarousel() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        marginTop: "120px",
      }}
    >
      <Carousel
        navButtonsAlwaysInvisible={true}
        indicators={false}
        sx={{
          marginRight: "25%",
          marginLeft: "25%",
          width: "700px",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {ads.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

export default AdCarousel;
