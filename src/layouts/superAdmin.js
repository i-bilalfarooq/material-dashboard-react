import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import DefaultBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useMaterialUIController } from "context";

// Mock data for the charts
const branchesData = {
  labels: ["North", "South", "East", "West"],
  datasets: [{ label: "Branches", data: [5, 8, 3, 6] }],
};
const departmentsData = {
  labels: ["HR", "IT", "Finance", "Ops"],
  datasets: [{ label: "Departments", data: [2, 4, 3, 5] }],
};
const employeesData = {
  labels: ["2021", "2022", "2023", "2024"],
  datasets: [{ label: "Employees", data: [50, 80, 120, 150] }],
};
const rolesData = {
  labels: ["Admin", "Manager", "Staff", "Intern"],
  datasets: [{ label: "Roles", data: [3, 7, 20, 5] }],
};

export default function SuperAdmin() {
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
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="apartment"
                title="Branches"
                count={22}
                percentage={{ color: "success", amount: "+5%", label: "since last month" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="groups"
                title="Departments"
                count={14}
                percentage={{ color: "success", amount: "+2%", label: "since last month" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="person"
                title="Employees"
                count={150}
                percentage={{ color: "success", amount: "+10%", label: "since last month" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="badge"
                title="Roles"
                count={8}
                percentage={{ color: "success", amount: "+1", label: "new role" }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" mb={1}>
                    Branches
                  </MDTypography>
                  <DefaultBarChart chart={branchesData} height="180px" />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" mb={1}>
                    Departments
                  </MDTypography>
                  <DefaultBarChart chart={departmentsData} height="180px" />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" mb={1}>
                    Employees
                  </MDTypography>
                  <DefaultBarChart chart={employeesData} height="180px" />
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <MDBox p={2}>
                  <MDTypography variant="h6" mb={1}>
                    Roles
                  </MDTypography>
                  <DefaultBarChart chart={rolesData} height="180px" />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
