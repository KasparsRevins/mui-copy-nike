import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Button, Hidden } from "@mui/material";
import { Link } from "react-router-dom";

function NikeNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
      >
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg"
                width={48}
                height={24}
                alt="jordan"
              />
            </IconButton>
            <IconButton>
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png"
                width={48}
                height={24}
                alt="converse"
              />
            </IconButton>
          </div>
          <div>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <p>Find a Store</p>
            </IconButton>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <p>Help</p>
            </IconButton>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
            <Link to="/SignUp" style={{textDecoration: "none", color: "grey"}}>
              <p>Join Us</p>
            </Link>
            </IconButton>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
            <Link to="/SignIn" style={{textDecoration: "none", color: "grey"}}>
              <p>Sign In</p>
            </Link>
            </IconButton>
          </div>
        </Box>
        {/* SECOND APPBAR --------------------------------------------*/}
        <Box>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <IconButton>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-nike-15-761696.png?f=webp&w=256"
                  width={50}
                  height={50}
                  alt="nike"
                />
              </IconButton>
            </div>
            <div>
              <Hidden smDown>
                <Button color="inherit" sx={{ fontWeight: "bold", textTransform: "capitalize"}}>New & Featured</Button>
                <Button color="inherit" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>Men</Button>
                <Button color="inherit" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>Women</Button>
                <Button color="inherit" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>Kids</Button>
                <Button color="inherit" sx={{ fontWeight: "bold", textTransform: "capitalize" }}>Sale</Button>
              </Hidden>
            </div>
            <div>
              <IconButton>
                <FavoriteBorderIcon></FavoriteBorderIcon>
              </IconButton>
              <IconButton>
                <WorkOutlineIcon></WorkOutlineIcon>
              </IconButton>
            </div>
          </Toolbar>
          <Hidden smUp>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem>New & Featured</MenuItem>
              <MenuItem>Men</MenuItem>
              <MenuItem>Women</MenuItem>
              <MenuItem>Kids</MenuItem>
              <MenuItem>Sale</MenuItem>
              <Link to="/SignUp"><MenuItem>Join Us</MenuItem></Link>
              <Link to="/SignIn"><MenuItem>Log In</MenuItem></Link>
            </Menu>
          </Hidden>
        </Box>
      </AppBar>
    </>
  );
}

export default NikeNavbar;
