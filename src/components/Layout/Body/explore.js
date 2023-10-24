import { Box } from "@mui/material";
import React from "react";

function Explore() {
  return (
    <div>
      <div>
        <h3 style={{ marginLeft: "1em", marginRight: "1em" }}>
          More to Explore
        </h3>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{width: {xs: "5%", md: "10%", lg: "25%"} }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/23fd8e65-c6a5-4b03-98e4-4a6281bd5592/nike-just-do-it.jpg" alt="explore-section"/>
          </div>
          <div style={{width: {xs: "5%", md: "10%", lg: "25%"}}}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/df231f4d-b556-49d2-832d-368a167697c5/nike-just-do-it.jpg" alt="explore-section"/>
          </div>
          <div style={{width: {xs: "5%", md: "10%", lg: "25%"}}}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/953a6d65-c55e-43e1-89d2-e5cb1630aba7/nike-just-do-it.jpg" alt="explore-section"/>
          </div>
          <div style={{width: {xs: "5%", md: "10%", lg: "25%"}}}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/e6747725-2d8d-4338-b49b-bb680304b8d1/nike-just-do-it.jpg" alt="explore-section"/>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Explore;
