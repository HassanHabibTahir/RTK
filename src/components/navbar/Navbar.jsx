import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Go to IDO launchpad", "Whitepaper", "Voting"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Cardence
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={`/${item}`}
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{
            "&.MuiAppBar-colorPrimary": {
                backgroundColor: "black",
                paddingLeft: "10px",
                paddingRight: '10px',
                boxShadow: 'none'
            }
        }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                width: "160px",
                heigth: "40px",
                fontFamily: "Montserrat",
                fontSize: "26px",
                lineHeight: "28px",
                fontWeight: 900,
              }}
            >
              Cardence
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    fontFamily: "Montserrat",
                    fontSize: "16px",

                    fontWeight: 400,
                    mr: 2,
                  }}
                >
                  <Link
                    to={`/${item}`}
                    style={{
                      color: "#FFFFFF",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                marginLeft: "auto",
                backgroundImage:
                  "linear-gradient(229.53deg, #D90EE8 2.72%, #1B7DAB 130.73%)",
                boxShadow:
                  "0px 1px 0px #4D58C1, 0px 6px 8px rgba(0, 0, 0, 0.19), -11px 12px 33px rgba(7, 163, 223, 0.15), 0px 15px 24px 8px rgba(171, 4, 132, 0.22)",
                borderRadius: "12px",
                width: "148px",
                height: "42px",
              }}
            >
              Connect
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box> */}
      </Box>
    </>
  );
}

export default Navbar;
