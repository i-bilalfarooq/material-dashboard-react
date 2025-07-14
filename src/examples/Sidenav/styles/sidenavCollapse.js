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
function collapseItem(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, darkMode, sidenavColor, miniSidenav } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(
          gradients[sidenavColor || "dark"].main,
          gradients[sidenavColor || "dark"].state
        )
      : transparent.main,
    color: white.main,
    display: "flex",
    alignItems: "center",
    width: miniSidenav ? pxToRem(48) : "calc(100% - 16px)", // 8px margin on each side when expanded
    padding: miniSidenav ? `${pxToRem(8)} 0` : `${pxToRem(8)} ${pxToRem(10)}`,
    margin: miniSidenav ? `${pxToRem(1.5)} auto` : `${pxToRem(1.5)} 8px`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: "none",
    justifyContent: miniSidenav ? "center" : "flex-start",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue = rgba(white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBox(theme, ownerState) {
  const { palette, transitions, borders, functions } = theme;
  const { darkMode, active, sidenavColor, miniSidenav } = ownerState;

  const { white, dark, gradients } = palette;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  return {
    width: miniSidenav ? pxToRem(48) : pxToRem(32),
    minWidth: miniSidenav ? pxToRem(48) : pxToRem(32),
    minHeight: pxToRem(32),
    color: white.main,
    background: active
      ? linearGradient(
          gradients[sidenavColor || "dark"].main,
          gradients[sidenavColor || "dark"].state
        )
      : "transparent",
    borderRadius: borderRadius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition:
      "width 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
      "min-width 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
      "background 1.2s cubic-bezier(0.22, 1, 0.36, 1), " +
      "color 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
      "margin 0.7s cubic-bezier(0.22, 1, 0.36, 1)",

    "& svg, svg g": {
      color: white.main,
      transition: "color 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
    },
  };
}

const collapseIcon = ({ palette: { white, gradients } }, { active }) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseText(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { size, fontWeightRegular, fontWeightLight } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(10),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
