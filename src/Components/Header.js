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
import { Container, Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = ["How it works", "Platforms", "Fees", "About"];

function DrawerAppBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ my: 1 }}>
                <img src="/img/logo.png" alt="logo" />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    background: "#000",
                }}
            >
                <Container>
                    {" "}
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleOpenNavMenu}
                            sx={{ mr: 2, display: { md: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <Box>
                                <Typography>Hello</Typography>
                            </Box>
                            {/* {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                        {/* <Typography
              sx={{
                flexGrow: 1,
                display: { xs: "inline" },
                fontWeight: "bold",
                fontSize: "19px",
                cursor: "pointer",
              }}
            >
              VALV X
            </Typography> */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex" },
                                fontWeight: "bold",
                                fontSize: "19px",
                                cursor: "pointer",
                                alignItems: "center",
                            }}
                        >
                            <img src="/img/logo.png" alt="logo" />
                        </Box>
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: "#fff" }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            sx={{
                                background:
                                    "linear-gradient(94.32deg, #007AFF 1.74%, #A9148B 96.61%)",
                                borderRadius: "10px",
                                width: "134px",
                                height: "40px",
                                color: "#fff",
                                fontSize: "14px",
                                ml: 2,
                                fontWeight: "400",
                            }}
                        >
                            Go to app
                        </Button>
                    </Toolbar>
                </Container>
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
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
