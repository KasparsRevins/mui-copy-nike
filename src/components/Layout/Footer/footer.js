import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#111111",
          color: "white",
          padding: "1em",
        }}
      >
        <div>
          <h3>Explore Nike</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Connect with Nike</h3>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#111111",
          color: "white",
          padding: "2em",
        }}
      >
        <div>
          <p>
            &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Accessibility Statement</a>
            </li>
          </ul>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
