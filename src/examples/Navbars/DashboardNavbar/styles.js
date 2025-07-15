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
function navbar(theme, ownerState) {
  const { miniSidenav, ...rest } = ownerState;
  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light, darkMode } = rest;

  const { dark, white, text, transparent, background } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    boxShadow: transparentNavbar || absolute ? "none" : "0 4px 24px 0 rgba(0,0,0,0.10)",
    backdropFilter: transparentNavbar || absolute ? "none" : `saturate(200%) blur(${pxToRem(40)})`,
    backgroundColor:
      transparentNavbar || absolute
        ? `${transparent.main} !important`
        : rgba(darkMode ? background.default : white.main, 0.92),
    border: transparentNavbar || absolute ? "none" : `1.5px solid rgba(0,0,0,0.08)`,
    color: () => {
      if (!transparentNavbar && !absolute) {
        return palette.black.main;
      }
      // When glassmorphic, use theme accent color
      if (ownerState.sidenavColor && palette.gradients[ownerState.sidenavColor]) {
        return palette.gradients[ownerState.sidenavColor].main;
      }
      return darkMode ? white.main : palette.black.main;
    },
    transition:
      "color 0.4s cubic-bezier(0.22, 1, 0.36, 1), " +
      "left 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
      "width 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    position: "fixed",
    top: 0,
    minHeight: pxToRem(65),
    zIndex: 1201, // Ensure AppBar is above other content
    // Remove display: "grid" to avoid breaking sticky
    // display: "grid",
    top: 32,
    left: miniSidenav ? pxToRem(100) : pxToRem(220),
    width: miniSidenav ? "calc(100% - 70px - 32px)" : "calc(100% - 190px - 32px)",
    alignItems: "center",
    borderRadius: borderRadius.xl,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,

    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});

const navbarRow = ({ breakpoints }, { isMini }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  [breakpoints.up("md")]: {
    justifyContent: isMini ? "space-between" : "stretch",
    width: isMini ? "100%" : "max-content",
  },

  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
});

const navbarIconButton = ({ typography: { size }, breakpoints }) => ({
  px: 1,

  "& .material-icons, .material-icons-round": {
    fontSize: `${size.xl} !important`,
  },

  "& .MuiTypography-root": {
    display: "none",

    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarMobileMenu = ({ breakpoints }) => ({
  display: "inline-block",
  lineHeight: 0,

  [breakpoints.up("xl")]: {
    display: "none",
  },
});

export { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu };
