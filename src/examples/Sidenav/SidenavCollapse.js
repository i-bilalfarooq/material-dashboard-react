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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { NavLink, useLocation } from "react-router-dom";

// @mui material components
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List"; // Import List component
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

function SidenavCollapse({ icon, name, active, collapse, route, ...rest }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();

  const [open, setOpen] = useState(() => {
    if (collapse && Array.isArray(collapse)) {
      return collapse.some(
        (item) =>
          item.route === location.pathname ||
          (item.collapse && item.collapse.some((subItem) => subItem.route === location.pathname))
      );
    }
    return active;
  });

  const handleToggleCollapse = () => {
    if (collapse) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (collapse && Array.isArray(collapse)) {
      const isActiveSubItem = collapse.some(
        (item) =>
          item.route === location.pathname ||
          (item.collapse && item.collapse.some((subItem) => subItem.route === location.pathname))
      );
      if (isActiveSubItem && !open) {
        setOpen(true);
      }
    }
  }, [location.pathname, collapse, open]);

  // Close dropdown when sidenav collapses
  useEffect(() => {
    if (miniSidenav && open) {
      setOpen(false);
    }
  }, [miniSidenav]);

  const isActive = location.pathname === route;

  return (
    <ListItem
      component="li"
      sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", overflow: "hidden" }}
    >
      {route ? (
        <NavLink to={route} style={{ textDecoration: "none", width: "100%", display: "block" }}>
          <MDBox
            {...rest}
            sx={(theme) => ({
              ...collapseItem(theme, {
                active: isActive,
                darkMode,
                sidenavColor,
                miniSidenav,
              }),
              ...(miniSidenav && {
                justifyContent: "center",
                paddingLeft: 0,
                paddingRight: 0,
              }),
            })}
          >
            <ListItemIcon
              sx={(theme) =>
                collapseIconBox(theme, {
                  darkMode,
                  active: isActive,
                  sidenavColor,
                })
              }
            >
              {typeof icon === "string" ? (
                <Icon sx={(theme) => collapseIcon(theme, { active: isActive })}>{icon}</Icon>
              ) : (
                icon
              )}
            </ListItemIcon>
            {!miniSidenav && (
              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    active: isActive,
                  })
                }
              />
            )}
            {collapse && !miniSidenav && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
                sx={{ ml: 1 }}
              >
                <Icon
                  sx={{
                    fontWeight: "bold",
                    transition: "transform 0.3s ease-in-out",
                    transform: open ? "rotate(90deg)" : "rotate(0deg)",
                    color: "#fff",
                  }}
                >
                  chevron_right
                </Icon>
              </IconButton>
            )}
          </MDBox>
        </NavLink>
      ) : (
        <MDBox
          {...rest}
          sx={(theme) => ({
            ...collapseItem(theme, {
              active: isActive,
              darkMode,
              sidenavColor,
              miniSidenav,
            }),
            ...(miniSidenav && {
              justifyContent: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }),
          })}
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, {
                darkMode,
                active: isActive,
                sidenavColor,
              })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active: isActive })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>
          {!miniSidenav && (
            <ListItemText
              primary={name}
              sx={(theme) =>
                collapseText(theme, {
                  miniSidenav,
                  active: isActive,
                })
              }
            />
          )}
        </MDBox>
      )}
      {/* Render collapsed items if they exist and the dropdown is open */}
      {collapse && (
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ width: "100%", overflow: "hidden" }}>
          <List component="div" disablePadding sx={{ width: "100%", boxSizing: "border-box" }}>
            {collapse.map((routeItem) => (
              <NavLink
                key={routeItem.key}
                to={routeItem.route}
                style={{ textDecoration: "none", width: "100%", boxSizing: "border-box" }}
              >
                <MDBox
                  sx={(theme) => ({
                    ...collapseItem(theme, {
                      active: location.pathname === routeItem.route,
                      darkMode,
                      sidenavColor,
                    }),
                    paddingLeft: theme.spacing(2),
                    width: "100%",
                    boxSizing: "border-box",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "2px",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "1px",
                      zIndex: 1,
                    },
                  })}
                >
                  <ListItemIcon
                    sx={(theme) =>
                      collapseIconBox(theme, {
                        darkMode,
                        active: location.pathname === routeItem.route,
                      })
                    }
                  >
                    {routeItem.icon ? (
                      typeof routeItem.icon === "string" ? (
                        <Icon
                          sx={(theme) =>
                            collapseIcon(theme, {
                              active: location.pathname === routeItem.route,
                            })
                          }
                        >
                          {routeItem.icon}
                        </Icon>
                      ) : (
                        routeItem.icon
                      )
                    ) : (
                      <Icon
                        sx={(theme) =>
                          collapseIcon(theme, {
                            active: location.pathname === routeItem.route,
                          })
                        }
                      >
                        radio_button_checked
                      </Icon>
                    )}
                  </ListItemIcon>
                  {!miniSidenav && (
                    <ListItemText
                      primary={routeItem.name}
                      sx={(theme) =>
                        collapseText(theme, {
                          miniSidenav,
                          active: location.pathname === routeItem.route,
                        })
                      }
                    />
                  )}
                </MDBox>
              </NavLink>
            ))}
          </List>
        </Collapse>
      )}
    </ListItem>
  );
}

SidenavCollapse.defaultProps = {
  active: false,
  collapse: false,
};

SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  collapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  route: PropTypes.string,
};

export default SidenavCollapse;
