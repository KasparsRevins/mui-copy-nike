import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Carousel from "react-material-ui-carousel";
import { Box, Button, Paper, Hidden } from "@mui/material";
import ReactPlayer from 'react-player'

// Video --------------------------------------------




// CAROUSEL --------------------------------------------

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
        <Item key={i} item={item}/>
      ))}
    </Carousel>
  );
}

// AppBar --------------------------------------------

function Item(props) {
  return (
    <Paper sx={{ backgroundColor: "#F5F5F5", boxShadow: 0 }}>
      <p>{props.item.name}</p>
      <p>{props.item.description}</p>
    </Paper>
  );
}

function NikeNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}>
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
                width={50}
                height={25}
                alt="jordan"
              />
            </IconButton>
            <IconButton>
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png"
                width={50}
                height={25}
                alt="converse"
              />
            </IconButton>
          </div>
          <div>
            <IconButton sx={{ fontSize: 12 }}>
              <p>Find a Store</p>
            </IconButton>
            <IconButton sx={{ fontSize: 12 }}>
              <p>Help</p>
            </IconButton>
            <IconButton sx={{ fontSize: 12 }}>
              <p>Join Us</p>
            </IconButton>
            <IconButton sx={{ fontSize: 12 }}>
              <p>Sign In</p>
            </IconButton>
          </div>
        </Box>
        {/* SECOND APPBAR --------------------------------------------*/}
        <Box>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton> */}
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
                <Button color="inherit">New & Featured</Button>
                <Button color="inherit">Men</Button>
                <Button color="inherit">Women</Button>
                <Button color="inherit">Kids</Button>
                <Button color="inherit">Sale</Button>
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
              <MenuItem>Join Us</MenuItem>
              <MenuItem>Log In</MenuItem>
            </Menu>
          </Hidden>
        </Box>
        <Box sx={{ backgroundColor: "#F5F5F5" }}>
          <FuncCarousel />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ marginBottom: 0 }}>Keep Running</p>
          <h1 style={{fontWeight: 500, textTransform: "uppercase", marginTop: "1px", fontSize: "72px"}}>It's still better outside.</h1>
        </Box>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <button style={{ background: "black", color: "white", borderRadius: "25px", padding: "10px 20px 10px 20px", cursor: "pointer" }}>
            Shop
          </button>
        </div>
        <Box>
        <ReactPlayer url='https://youtu.be/79hzoeRhP74?si=oeBYo8CqfmtNApxj' muted="true" playing="true" loop="true" width="100%" height="1080px" controls="false" />
        </Box>
      </AppBar>
    </>
  );
}

export default NikeNavbar;
