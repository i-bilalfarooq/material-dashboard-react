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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Breadcrumbs({ icon, title, route, light, color = "info" }) {
  const routes = route.slice(0, -1);

  return (
    <MDBox mr={{ xs: 0, xl: 8 }} display="flex" alignItems="center" flexWrap="nowrap">
      <MuiBreadcrumbs
        sx={{
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { gradients, white, grey } }) =>
              light ? white.main : gradients[color]?.main || grey[600],
          },
        }}
        separator={<span style={{ margin: "0 8px" }}>/</span>}
      >
        <Link to="/">
          <MDTypography
            component="span"
            variant="body2"
            sx={(theme) => ({
              color: light
                ? theme.palette.white.main
                : theme.palette.gradients[color]?.main || theme.palette.text.primary,
              opacity: light ? 0.8 : 1,
              lineHeight: 0,
            })}
          >
            <Icon>{icon}</Icon>
          </MDTypography>
        </Link>
        {routes.map((el) => (
          <Link to={`/${el}`} key={el}>
            <MDTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              sx={(theme) => ({
                color: light
                  ? theme.palette.white.main
                  : theme.palette.gradients[color]?.main || theme.palette.text.primary,
                opacity: light ? 0.8 : 1,
                lineHeight: 0,
              })}
            >
              {el}
            </MDTypography>
          </Link>
        ))}
        <MDTypography
          variant="button"
          fontWeight="regular"
          textTransform="capitalize"
          sx={(theme) => ({
            color: light
              ? theme.palette.white.main
              : theme.palette.gradients[color]?.main || theme.palette.text.primary,
            lineHeight: 0,
          })}
        >
          {title.replace("-", " ")}
        </MDTypography>
      </MuiBreadcrumbs>
    </MDBox>
  );
}

// Setting default values for the props of Breadcrumbs
Breadcrumbs.defaultProps = {
  light: false,
};

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
  color: PropTypes.string,
};

export default Breadcrumbs;
