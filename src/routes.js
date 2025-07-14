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
import SuperAdmin from "layouts/superAdmin";
import IT from "layouts/it";
import HRM from "layouts/hrm";
import CRM from "layouts/crm";
import Accounts from "layouts/accounts";
import Operations from "layouts/operations";
import Manager from "layouts/manager";
import Files from "layouts/files";
// import Tables from "layouts/tables"; // Not used in this update
// import Billing from "layouts/billing"; // Not used in this update
// import RTL from "layouts/rtl"; // Not used in this update
// import Notifications from "layouts/notifications"; // Not used in this update
// import Profile from "layouts/profile"; // Not used in this update
// import SignIn from "layouts/authentication/sign-in"; // Not used in this update
// import SignUp from "layouts/authentication/sign-in"; // Not used in this update

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
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DevicesIcon from "@mui/icons-material/Devices";
import CodeIcon from "@mui/icons-material/Code";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkIcon from "@mui/icons-material/Work";
import GavelIcon from "@mui/icons-material/Gavel";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RuleIcon from "@mui/icons-material/Rule";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BarChartIcon from "@mui/icons-material/BarChart";
import ApprovalIcon from "@mui/icons-material/Approval";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <Dashboard />,
    // Add dropdown items for Dashboard
    collapse: [
      {
        name: "List",
        key: "dashboard-list",
        route: "/dashboard/list",
        component: <></>, // Placeholder component
        icon: <ListAltIcon />,
      },
      {
        name: "Add",
        key: "dashboard-add",
        route: "/dashboard/add",
        component: <></>, // Placeholder component
        icon: <AddCircleIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Super Admin",
    key: "super-admin",
    icon: <AdminPanelSettingsIcon />,
    route: "/super-admin",
    component: <SuperAdmin />,
    // Add dropdown items for Super Admin
    collapse: [
      {
        name: "Branches",
        key: "super-admin-branches",
        route: "/super-admin/branches",
        component: <></>,
        icon: <BusinessIcon />,
      },
      {
        name: "Departments",
        key: "super-admin-departments",
        route: "/super-admin/departments",
        component: <></>,
        icon: <ApartmentIcon />,
      },
      {
        name: "Employee Registration",
        key: "super-admin-employee-registration",
        route: "/super-admin/employee-registration",
        component: <></>,
        icon: <PersonAddIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "IT",
    key: "it",
    icon: <ComputerIcon />,
    route: "/it",
    component: <IT />,
    // Add dropdown items for IT
    collapse: [
      {
        name: "Asset Management",
        key: "it-asset-management",
        route: "/it/asset-management",
        component: <></>,
        icon: <DevicesIcon />,
      },
      {
        name: "Development Team",
        key: "it-development-team",
        route: "/it/development-team",
        component: <></>,
        icon: <CodeIcon />,
      },
      {
        name: "Leave Request Process",
        key: "it-leave-request-process",
        route: "/it/leave-request-process",
        component: <></>,
        icon: <AccessTimeIcon />,
      },
      {
        name: "Tickets",
        key: "it-tickets",
        route: "/it/tickets",
        component: <></>,
        icon: <ConfirmationNumberIcon />,
      },
      {
        name: "Chats",
        key: "it-chats",
        route: "/it/chats",
        component: <></>,
        icon: <ChatIcon />,
      },
      {
        name: "Report",
        key: "it-report",
        route: "/it/report",
        component: <></>,
        icon: <AssessmentIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "CRM",
    key: "crm",
    icon: <PeopleIcon />,
    route: "/crm",
    component: <CRM />,
    // Add dropdown items for CRM
    collapse: [
      {
        name: "Service Management",
        key: "crm-service-management",
        route: "/crm/service-management",
        component: <></>,
        icon: <MiscellaneousServicesIcon />,
      },
      {
        name: "Customer Management",
        key: "crm-customer-management",
        route: "/crm/customer-management",
        component: <></>,
        icon: <PeopleAltIcon />,
      },
      {
        name: "Companies Management",
        key: "crm-companies-management",
        route: "/crm/companies-management",
        component: <></>,
        icon: <BusinessCenterIcon />,
      },
      {
        name: "PRO Management",
        key: "crm-pro-management",
        route: "/crm/pro-management",
        component: <></>,
        icon: <WorkIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "HRM",
    key: "hrm",
    icon: <GroupWorkIcon />,
    route: "/hrm",
    component: <HRM />,
    // Add dropdown items for HRM
    collapse: [
      {
        name: "Laws, Rules and T&C",
        key: "hrm-laws-rules-tc",
        route: "/hrm/laws-rules-tc",
        component: <></>,
        icon: <GavelIcon />,
      },
      {
        name: "Employee List",
        key: "hrm-employee-list",
        route: "/hrm/employee-list",
        component: <></>,
        icon: <ListAltIcon />,
      },
      {
        name: "Attendance",
        key: "hrm-attendance",
        route: "/hrm/attendance",
        component: <></>,
        icon: <AssignmentTurnedInIcon />,
      },
      {
        name: "Tasks",
        key: "hrm-tasks",
        route: "/hrm/tasks",
        component: <></>,
        icon: <AssignmentIcon />,
      },
      {
        name: "Leave Requests",
        key: "hrm-leave-requests",
        route: "/hrm/leave-requests",
        component: <></>,
        icon: <AccessTimeIcon />,
      },
      {
        name: "Payroll",
        key: "hrm-payroll",
        route: "/hrm/payroll",
        component: <></>,
        icon: <PaymentIcon />,
      },
      {
        name: "Notifications",
        key: "hrm-notifications",
        route: "/hrm/notifications",
        component: <></>,
        icon: <TrackChangesIcon />,
      },
      {
        name: "Hiring",
        key: "hrm-hiring",
        route: "/hrm/hiring",
        component: <></>,
        icon: <GroupAddIcon />,
      },
      {
        name: "Chat",
        key: "hrm-chat",
        route: "/hrm/chat",
        component: <></>,
        icon: <ChatIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    icon: <AccountBalanceIcon />,
    route: "/accounts",
    component: <Accounts />,
    // Add dropdown items for Accounts
    collapse: [
      {
        name: "Receivables",
        key: "accounts-receivables",
        route: "/accounts/receivables",
        component: <></>,
        icon: <ReceiptIcon />,
      },
      {
        name: "Payables",
        key: "accounts-payables",
        route: "/accounts/payables",
        component: <></>,
        icon: <PaymentIcon />,
      },
      {
        name: "Money Tracker",
        key: "accounts-money-tracker",
        route: "/accounts/money-tracker",
        component: <></>,
        icon: <TrackChangesIcon />,
      },
      {
        name: "Audit and Tax",
        key: "accounts-audit-tax",
        route: "/accounts/audit-tax",
        component: <></>,
        icon: <AssessmentOutlinedIcon />,
      },
      {
        name: "Report Generation",
        key: "accounts-report-generation",
        route: "/accounts/report-generation",
        component: <></>,
        icon: <AssessmentIcon />,
      },
      {
        name: "Document Management",
        key: "accounts-document-management",
        route: "/accounts/document-management",
        component: <></>,
        icon: <DescriptionIcon />,
      },
      {
        name: "Approvals and Status",
        key: "accounts-approvals-status",
        route: "/accounts/approvals-status",
        component: <></>,
        icon: <ApprovalIcon />,
      },
      {
        name: "Budget Forecasting",
        key: "accounts-budget-forecasting",
        route: "/accounts/budget-forecasting",
        component: <></>,
        icon: <AssessmentOutlinedIcon />,
      },
      {
        name: "Notifications",
        key: "accounts-notifications",
        route: "/accounts/notifications",
        component: <></>,
        icon: <TrackChangesIcon />,
      },
      {
        name: "Settings",
        key: "accounts-settings",
        route: "/accounts/settings",
        component: <></>,
        icon: <SettingsIcon />,
      },
      {
        name: "Cashier Role",
        key: "accounts-cashier-role",
        route: "/accounts/cashier-role",
        component: <></>,
        icon: <PaymentIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    icon: <BuildIcon />,
    route: "/operations",
    component: <Operations />,
    // Add dropdown items for Operations
    collapse: [
      {
        name: "Frontline Service",
        key: "operations-frontline-service",
        route: "/operations/frontline-service",
        component: <></>,
        icon: <SupportAgentIcon />,
      },
      {
        name: "List of Invoices",
        key: "operations-list-invoices",
        route: "/operations/list-invoices",
        component: <></>,
        icon: <ReceiptIcon />,
      },
      {
        name: "Settings",
        key: "operations-settings",
        route: "/operations/settings",
        component: <></>,
        icon: <SettingsIcon />,
      },
      {
        name: "Reports",
        key: "operations-reports",
        route: "/operations/reports",
        component: <></>,
        icon: <AssessmentIcon />,
      },
      {
        name: "Tasks",
        key: "operations-tasks",
        route: "/operations/tasks",
        component: <></>,
        icon: <AssignmentIcon />,
      },
      {
        name: "Timesheet",
        key: "operations-timesheet",
        route: "/operations/timesheet",
        component: <></>,
        icon: <AccessTimeIcon />,
      },
      {
        name: "Credit Management",
        key: "operations-credit-management",
        route: "/operations/credit-management",
        component: <></>,
        icon: <PaymentIcon />,
      },
      {
        name: "Rules and Permissions Management",
        key: "operations-rules-permissions-management",
        route: "/operations/rules-permissions-management",
        component: <></>,
        icon: <RuleIcon />,
      },
      {
        name: "Document Management",
        key: "operations-document-management",
        route: "/operations/document-management",
        component: <></>,
        icon: <DescriptionIcon />,
      },
      {
        name: "Notifications",
        key: "operations-notifications",
        route: "/operations/notifications",
        component: <></>,
        icon: <TrackChangesIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Manager",
    key: "manager",
    icon: <ManageAccountsIcon />,
    route: "/manager",
    component: <Manager />,
    // Add dropdown items for Manager
    collapse: [
      {
        name: "Branch List",
        key: "manager-branch-list",
        route: "/manager/branch-list",
        component: <></>,
        icon: <ListAltIcon />,
      },
      {
        name: "Report",
        key: "manager-report",
        route: "/manager/report",
        component: <></>,
        icon: <BarChartIcon />,
      },
      {
        name: "Chats",
        key: "manager-chats",
        route: "/manager/chats",
        component: <></>,
        icon: <ChatIcon />,
      },
      {
        name: "Requests and Approvals",
        key: "manager-requests-approvals",
        route: "/manager/requests-approvals",
        component: <></>,
        icon: <ApprovalIcon />,
      },
      {
        name: "Team Inputs",
        key: "manager-team-inputs",
        route: "/manager/team-inputs",
        component: <></>,
        icon: <GroupIcon />,
      },
      {
        name: "Task Assigning",
        key: "manager-task-assigning",
        route: "/manager/task-assigning",
        component: <></>,
        icon: <AssignmentIcon />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Files",
    key: "files",
    icon: <FolderIcon />,
    route: "/files",
    component: <Files />,
    noCollapse: true, // This item does not have a dropdown
  },
];

export default routes;
