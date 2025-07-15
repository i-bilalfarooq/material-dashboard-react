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
const expiryDocsData = {
  labels: ["Passport", "Visa", "ID", "License"],
  datasets: [{ label: "Expiring", data: [3, 5, 2, 1] }],
};
const lawsData = {
  labels: ["Laws", "Rules", "T&C"],
  datasets: [{ label: "Updates", data: [2, 4, 3] }],
};
const attendanceData = {
  labels: ["Active", "Inactive"],
  datasets: [{ label: "Attendance", data: [45, 5] }],
};
const leaveRequestsData = {
  labels: ["Pending", "Approved", "Rejected"],
  datasets: [{ label: "Leave Requests", data: [4, 20, 1] }],
};
const jobAppsData = {
  labels: ["New", "In Review", "Hired"],
  datasets: [{ label: "Applications", data: [10, 5, 2] }],
};

export default function HRM() {
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
                chart={expiryDocsData}
                title="Expiring Documents"
                description="Passport, Visa, ID, License"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="primary"
                chart={lawsData}
                title="Laws, Rules & T&C"
                description="Recent updates and changes"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsLineChart
                color="success"
                chart={attendanceData}
                title="Active Attendance"
                description="Employee attendance status"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="warning"
                chart={leaveRequestsData}
                title="Leave Requests"
                description="Pending, approved, and rejected"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="dark"
                chart={jobAppsData}
                title="Job Applications"
                description="New, in review, and hired"
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
