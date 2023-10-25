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
            <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
              <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
                <p>Find a Store</p>
              </IconButton>
            </Link>
            <span>|</span>
            <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
              <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
                <p>Help</p>
              </IconButton>
            </Link>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <Link
                to="/SignUp"
                style={{ textDecoration: "none", color: "grey" }}
              >
                <p>Join Us</p>
              </Link>
            </IconButton>
            <span>|</span>
            <IconButton sx={{ fontSize: 12, fontWeight: "bold" }}>
              <Link
                to="/SignIn"
                style={{ textDecoration: "none", color: "grey" }}
              >
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
                <Link to="/ComingSoon" style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    New & Featured
                  </Button>
                </Link>
                <Link to="/ComingSoon" style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Men
                  </Button>
                </Link>
                <Link to="/ComingSoon" style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Women
                  </Button>
                </Link>
                <Link to="/ComingSoon" style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Kids
                  </Button>
                </Link>
                <Link to="/ComingSoon" style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    color="inherit"
                    sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    Sale
                  </Button>
                </Link>
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
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>New & Featured</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Men</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Women</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Kids</MenuItem>
              </Link>
              <Link to="/ComingSoon" style={{ textDecoration: "none" }}>
                <MenuItem>Sale</MenuItem>
              </Link>
              <Link to="/SignUp">
                <MenuItem>Join Us</MenuItem>
              </Link>
              <Link to="/SignIn">
                <MenuItem>Log In</MenuItem>
              </Link>
            </Menu>
          </Hidden>
        </Box>
      </AppBar>
    </>
  );
}

export default NikeNavbar;
