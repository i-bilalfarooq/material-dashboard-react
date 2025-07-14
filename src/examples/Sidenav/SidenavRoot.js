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

// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

export default styled(Drawer)(({ theme, ownerState }) => {
  const { palette, boxShadows, transitions, breakpoints, functions } = theme;
  const { transparentSidenav, whiteSidenav, miniSidenav, darkMode } = ownerState;

  const sidebarWidth = 200;
  const { transparent, gradients, white, background } = palette;
  const { xxl } = boxShadows;
  const { pxToRem, linearGradient } = functions;

  // Fixed background calculation
  let backgroundValue;
  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  } else {
    backgroundValue = linearGradient("#000", gradients[ownerState.sidenavColor || "dark"].main);
  }

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    transform: "translateX(0)",
    height: "calc(100vh - 48px)",
    boxSizing: "border-box",
    paddingTop: 3, // theme spacing unit, e.g., 24px
    paddingBottom: 3, // theme spacing unit, e.g., 24px
    boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)", // subtle drop shadow
    transition:
      "width 0.7s cubic-bezier(0.22, 1, 0.36, 1), background 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : "0 4px 24px 0 rgba(0,0,0,0.12)",
      height: "calc(100vh - 48px)",
      boxSizing: "border-box",
      paddingTop: transparentSidenav ? 0 : 3, // theme spacing unit
      paddingBottom: transparentSidenav ? 0 : 3, // theme spacing unit
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition:
        "width 0.7s cubic-bezier(0.22, 1, 0.36, 1), background 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
    },
  });

  // styles for the sidenav when miniSidenav={true}
  const miniSidenavStyles = () => ({
    background: backgroundValue,
    width: pxToRem(80),
    overflowX: "hidden",
    transform: "translateX(0)",
    height: "calc(100vh - 48px)",
    boxSizing: "border-box",
    paddingTop: 3, // theme spacing unit, e.g., 24px
    paddingBottom: 3, // theme spacing unit, e.g., 24px
    transition:
      "width 0.7s cubic-bezier(0.22, 1, 0.36, 1), background 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    [breakpoints.up("xl")]: {
      boxShadow: transparentSidenav ? "none" : xxl,
      width: pxToRem(80),
      height: "calc(100vh - 48px)",
      boxSizing: "border-box",
      paddingTop: transparentSidenav ? 0 : 3, // theme spacing unit
      paddingBottom: transparentSidenav ? 0 : 3, // theme spacing unit
    },
  });

  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      // Remove extra padding to reduce gap
      ...(miniSidenav ? miniSidenavStyles() : drawerOpenStyles()),
      scrollbarWidth: "none", // Firefox
      "&::-webkit-scrollbar": {
        display: "none", // Chrome, Safari
      },
    },
  };
});
