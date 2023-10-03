import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container, Hidden } from '@mui/material';

function NikeNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Nike
          </Typography>
          <Hidden smDown>
            <Button color="inherit" >
              Men
            </Button>
            <Button color="inherit" >
              Women
            </Button>
            <Button color="inherit" >
              Kids
            </Button>
            <Button color="inherit" >
              Customize
            </Button>
            <Button color="inherit" >
              Sale
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit">
              <i className="fas fa-shopping-cart"></i>
            </IconButton>
          </Hidden>
          <Hidden smDown>
            <Button color="inherit" >
              Join Us
            </Button>
            <Button color="inherit">Log In</Button>
            <IconButton color="inherit">
              <i className="fas fa-shopping-cart"></i>
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden smUp>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Customize</MenuItem>
            <MenuItem>Sale</MenuItem>
            <MenuItem>Join Us</MenuItem>
            <MenuItem>Log In</MenuItem>
          </Menu>
        </Hidden>
      </Container>
    </AppBar>
  );
}

export default NikeNavbar;
