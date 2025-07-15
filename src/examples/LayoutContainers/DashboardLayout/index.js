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

import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import { useMaterialUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, sidenavColor, darkMode } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  // Sidenav width in px
  const sidenavWidth = miniSidenav ? 80 : 200;

  return (
    <MDBox
      sx={({ palette, functions: { linearGradient } }) => ({
        display: "flex",
        flexDirection: "row",
        width: "100%", // Changed from 100vw to 100%
        minHeight: "100vh",
        overflowX: "hidden", // Prevent horizontal scroll
        background: `linear-gradient(360deg,
          ${darkMode ? palette.background.sidenav : palette.white.main} 40%,
          ${darkMode ? palette.background.sidenav : palette.white.main} 10%,
          ${palette.gradients[sidenavColor || "info"].main} 150%)`,
      })}
    >
      {/* Sidenav is rendered outside this layout, so just reserve space */}
      <div
        style={{
          width: sidenavWidth,
          flexShrink: 0,
          transition: "width 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      <MDBox
        sx={{
          flex: 1,
          minWidth: 0,
          boxSizing: "border-box",
          padding: 4, // left/right/bottom
          paddingTop: "120px", // Add top padding for fixed header (65px header + 32px margin)
          transition:
            "margin-left 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
            "padding 0.7s cubic-bezier(0.22, 1, 0.36, 1), " +
            "background 1.2s cubic-bezier(0.22, 1, 0.36, 1), " +
            "color 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {children}
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
