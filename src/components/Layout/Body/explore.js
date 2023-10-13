import { Box } from "@mui/material";
import React from "react";

function Explore() {
  return (
    <div style={{ alignItems: "center" }}>
      <div>
        <h1>More to Explore</h1>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ width: "25%" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/23fd8e65-c6a5-4b03-98e4-4a6281bd5592/nike-just-do-it.jpg" />
          </div>
          <div style={{ width: "25%" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/df231f4d-b556-49d2-832d-368a167697c5/nike-just-do-it.jpg" />
          </div>
          <div style={{ width: "25%" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/953a6d65-c55e-43e1-89d2-e5cb1630aba7/nike-just-do-it.jpg" />
          </div>
          <div style={{ width: "25%" }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/e6747725-2d8d-4338-b49b-bb680304b8d1/nike-just-do-it.jpg" />
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Explore;
