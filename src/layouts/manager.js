import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useMaterialUIController } from "context";

// Mock data for the charts
const branchListData = {
  labels: ["Branch A", "Branch B", "Branch C"],
  datasets: [{ label: "Branches", data: [5, 3, 4] }],
};
const accountsLineData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: { label: "Accounts", data: [2000, 2500, 1800, 2200] },
};
const employeeStatusData = {
  labels: ["Active", "Inactive", "On Leave"],
  datasets: [{ label: "Employees", data: [40, 5, 3] }],
};
const clientSatisfactionData = {
  labels: ["Happy", "Neutral", "Unhappy"],
  datasets: [{ label: "Satisfaction", data: [30, 10, 2] }],
};
const requestsData = {
  labels: ["HR", "IT", "Ops"],
  datasets: [{ label: "Requests", data: [4, 2, 3] }],
};
const teamInputsData = {
  labels: ["Suggestions", "Feedback", "Issues"],
  datasets: [{ label: "Inputs", data: [6, 3, 2] }],
};
const tasksData = {
  labels: ["Assigned", "Unassigned", "Pending"],
  datasets: [{ label: "Tasks", data: [10, 2, 5] }],
};

export default function Manager() {
  const [controller] = useMaterialUIController();
  const { sidenavColor, darkMode } = controller;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox display="flex" justifyContent="flex-end" mb={3} gap={2}>
        <MDButton
          variant="outlined"
          color={sidenavColor || "info"}
          sx={{
            borderColor: (theme) => theme.palette.gradients[sidenavColor || "info"].main,
            color: (theme) => theme.palette.gradients[sidenavColor || "info"].main,
            fontWeight: "bold",
            background: darkMode ? "rgba(255,255,255,0.04)" : "transparent",
            "&:hover": {
              background: (theme) =>
                theme.functions.linearGradient(
                  theme.palette.gradients[sidenavColor || "info"].main,
                  theme.palette.gradients[sidenavColor || "info"].state
                ),
              color: "#fff",
              borderColor: (theme) => theme.palette.gradients[sidenavColor || "info"].main,
            },
          }}
        >
          List
        </MDButton>
        <MDButton
          variant="contained"
          color={sidenavColor || "info"}
          sx={{
            fontWeight: "bold",
            background: (theme) =>
              theme.functions.linearGradient(
                theme.palette.gradients[sidenavColor || "info"].main,
                theme.palette.gradients[sidenavColor || "info"].state
              ),
            color: "#fff",
            boxShadow: "none",
            "&:hover": {
              background: (theme) =>
                theme.functions.linearGradient(
                  theme.palette.gradients[sidenavColor || "info"].state,
                  theme.palette.gradients[sidenavColor || "info"].main
                ),
              color: "#fff",
            },
          }}
        >
          Add
        </MDButton>
      </MDBox>
      <MDBox py={1}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="info"
                chart={branchListData}
                title="Branch List"
                description="Branches overview"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsLineChart
                color="success"
                chart={accountsLineData}
                title="Accounts Report"
                description="Quarterly accounts report"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="primary"
                chart={employeeStatusData}
                title="Employee Status"
                description="Active, inactive, on leave"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="warning"
                chart={clientSatisfactionData}
                title="Client Satisfaction"
                description="Happy, neutral, unhappy"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="secondary"
                chart={requestsData}
                title="Requests from Departments"
                description="Requests by department"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="dark"
                chart={teamInputsData}
                title="Inputs from Team"
                description="Suggestions, feedback, issues"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="error"
                chart={tasksData}
                title="Task Assigning/Unassigned/Pending Tasks"
                description="Assigned, unassigned, pending"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
