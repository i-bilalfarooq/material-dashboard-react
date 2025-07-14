/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator, darkMode, sidenavColor } =
    controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem icon={<Icon>podcasts</Icon>} title="Manage Podcast sessions" />
      <NotificationItem icon={<Icon>shopping_cart</Icon>} title="Payment successfully completed" />
    </Menu>
  );

  // Styles for the navbar icons and text
  const accentColor = (theme) =>
    !transparentNavbar
      ? theme.palette.gradients[sidenavColor || "info"].main
      : theme.palette.black.main;
  const iconsStyle = (theme) => ({
    color: accentColor(theme),
    transition: "color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  });
  const textStyle = (theme) => ({
    color: accentColor(theme),
    transition: "color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light, darkMode })}
    >
      <Toolbar
        sx={(theme) => ({
          ...navbarContainer(theme),
          minHeight: 90,
          maxHeight: 90,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        })}
      >
        <MDBox display="flex" alignItems="center" flex="0 0 auto">
          <IconButton
            size="small"
            disableRipple
            color="inherit"
            sx={iconsStyle}
            onClick={handleMiniSidenav}
            style={{ marginRight: 16 }}
          >
            <Icon sx={iconsStyle} fontSize="medium">
              {miniSidenav ? "menu_open" : "menu"}
            </Icon>
          </IconButton>
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1] ? route[route.length - 1] : ""}
            route={route}
            light={light}
            color={transparentNavbar ? "black" : sidenavColor}
          />
        </MDBox>
        <MDTypography
          variant="h4"
          fontWeight="bold"
          sx={textStyle}
          style={{
            flex: 1,
            textAlign: "center",
            minWidth: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginLeft: 16,
            marginRight: 16,
            textTransform: "uppercase",
          }}
        >
          {route[route.length - 1] &&
            (
              route[route.length - 1].charAt(0).toUpperCase() + route[route.length - 1].slice(1)
            ).toUpperCase()}
        </MDTypography>
        {!isMini && (
          <MDBox display="flex" alignItems="center" flex="0 0 auto" gap={2}>
            <MDInput
              label=""
              placeholder="Search here"
              InputProps={{
                style: {
                  textAlign: "center",
                },
              }}
              sx={(theme) => ({
                color: accentColor(theme),
                borderRadius: 1,
                height: 36,
                minHeight: 36,
                maxHeight: 36,
                input: {
                  color: accentColor(theme),
                  transition: "color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  height: 36,
                  minHeight: 36,
                  maxHeight: 36,
                  padding: "8px 12px",
                  fontSize: 16,
                  textAlign: "center",
                },
                "& .MuiOutlinedInput-root": {
                  height: 36,
                  minHeight: 36,
                  maxHeight: 36,
                  paddingTop: 0,
                  paddingBottom: 0,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: accentColor(theme),
                  transition: "border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: accentColor(theme),
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: accentColor(theme),
                },
              })}
            />
            <Link to="/authentication/sign-in/basic">
              <IconButton sx={iconsStyle} size="small" disableRipple>
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
            </Link>
            <IconButton
              size="small"
              disableRipple
              color="inherit"
              sx={iconsStyle}
              onClick={handleConfiguratorOpen}
            >
              <Icon sx={iconsStyle}>settings</Icon>
            </IconButton>
            <IconButton
              size="small"
              disableRipple
              color="inherit"
              sx={iconsStyle}
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleOpenMenu}
            >
              <Icon sx={iconsStyle}>notifications</Icon>
            </IconButton>
            {renderMenu()}
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
