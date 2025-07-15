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
const profitLossData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [{ label: "Profit/Loss", data: [2000, 1500, 2500, 1800] }],
};
const employeeData = {
  labels: ["HR", "IT", "Ops", "Sales"],
  datasets: [{ label: "Employees", data: [10, 15, 8, 12] }],
};
const dueBillsData = {
  labels: ["Due Soon", "Overdue", "Paid"],
  datasets: [{ label: "Bills", data: [3, 1, 10] }],
};
const cardTransData = {
  labels: ["John", "Sara", "Ali", "Ava"],
  datasets: [{ label: "Card Transactions", data: [5, 3, 7, 2] }],
};
const quotationsData = {
  labels: ["Pending", "Approved", "Rejected"],
  datasets: [{ label: "Quotations", data: [4, 8, 2] }],
};
const eodReportsData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [{ label: "EOD Reports", data: [2, 3, 1, 4, 2] }],
};
const budgetData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [{ label: "Budget", data: [5000, 6000, 5500, 7000] }],
};

const profitLossLineData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: { label: "Profit/Loss", data: [2000, 1500, 2500, 1800] },
};

export default function Accounts() {
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
              <ReportsLineChart
                color="success"
                chart={profitLossLineData}
                title="Profit/Loss Status"
                description="Monthly profit and loss"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="info"
                chart={employeeData}
                title="Employee Data"
                description="Department-wise employee count"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="primary"
                chart={dueBillsData}
                title="Near Due/Bill Dates"
                description="Upcoming and overdue bills"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="warning"
                chart={cardTransData}
                title="Card Transactions"
                description="Recent card transactions"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="secondary"
                chart={quotationsData}
                title="Quotations & Status"
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
                chart={eodReportsData}
                title="EOD Reports"
                description="End of day reports"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="error"
                chart={budgetData}
                title="Budget Manager Report"
                description="Quarterly budget overview"
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
