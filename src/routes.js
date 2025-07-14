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

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ComputerIcon from "@mui/icons-material/Computer";
import PeopleIcon from "@mui/icons-material/People";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BuildIcon from "@mui/icons-material/Build";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FolderIcon from "@mui/icons-material/Folder";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Super Admin",
    key: "super-admin",
    icon: <AdminPanelSettingsIcon />,
    route: "/super-admin",
    component: <></>, // Placeholder, no actual component
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "IT",
    key: "it",
    icon: <ComputerIcon />,
    route: "/it",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "CRM",
    key: "crm",
    icon: <PeopleIcon />,
    route: "/crm",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "HRM",
    key: "hrm",
    icon: <GroupWorkIcon />,
    route: "/hrm",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <AccountBalanceIcon />,
    route: "/accounts",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    icon: <BuildIcon />,
    route: "/operations",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Manager",
    key: "manager",
    icon: <ManageAccountsIcon />,
    route: "/manager",
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Files",
    key: "files",
    icon: <FolderIcon />,
    route: "/files",
    component: <></>,
    noCollapse: true,
  },
];

export default routes;
