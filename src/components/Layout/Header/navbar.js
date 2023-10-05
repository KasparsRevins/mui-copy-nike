import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Button, Container, Hidden } from "@mui/material";

function NikeNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", color: "black" }}>
        <Box sx={{ backgroundColor: "#F5F5F5", display: "flex", justifyContent: 'flex-end'}}>
          <IconButton sx={{ fontSize: 12}}>
          <p>
            Find a Store
          </p>
          </IconButton>
            <IconButton sx={{ fontSize: 12}}>
          <p>

            Help
          </p>
            </IconButton>
            <IconButton sx={{ fontSize: 12}}>
          <p>

            Join Us
          </p>
            </IconButton>
            <IconButton sx={{ fontSize: 12}}>
          <p>

            Sign In
          </p>
            </IconButton>
        </Box>
        <Container>
          <Toolbar>
            {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton> */}
            <IconButton>
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-nike-15-761696.png?f=webp&w=256"
                width={50}
                height={50}
              />
            </IconButton>
            <Hidden smDown>
              <Button color="inherit">New & Featured</Button>
              <Button color="inherit">Men</Button>
              <Button color="inherit">Women</Button>
              <Button color="inherit">Kids</Button>
              <Button color="inherit">Sale</Button>
            </Hidden>
            <IconButton>
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
            <IconButton>
              <WorkOutlineIcon></WorkOutlineIcon>
            </IconButton>
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
              <MenuItem>Join Us</MenuItem>
              <MenuItem>Log In</MenuItem>
            </Menu>
          </Hidden>
        </Container>
      </AppBar>
    </>
  );
}

export default NikeNavbar;
