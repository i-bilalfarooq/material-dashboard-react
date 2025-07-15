import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { useMaterialUIController } from "context";
import MDAddModal from "components/MDAddModal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { Box, Divider, OutlinedInput } from "@mui/material";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [addType, setAddType] = useState("");
  const [form, setForm] = useState({});

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => {
    setModalOpen(false);
    setAddType("");
    setForm({});
  };
  const handleTypeChange = (e) => {
    setAddType(e.target.value);
    setForm({});
  };
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("SuperAdmin Add:", addType, form);
    handleClose();
  };

  // Render form fields based on addType
  let fields = null;
  if (addType === "Branch") {
    fields = (
      <>
        <TextField
          label="Branch Name"
          name="branchName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Location"
          name="location"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Department") {
    fields = (
      <>
        <TextField
          label="Department Name"
          name="departmentName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Branch"
          name="branch"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Employee") {
    fields = (
      <>
        <TextField
          label="Employee Name"
          name="employeeName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField label="Role" name="role" fullWidth margin="normal" onChange={handleFormChange} />
        <TextField label="Role" name="role" fullWidth margin="normal" onChange={handleFormChange} />
      </>
    );
  } else if (addType === "Role") {
    fields = (
      <>
        <TextField
          label="Role Name"
          name="roleName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  }
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
          onClick={handleOpen}
        >
          Add
        </MDButton>
      </MDBox>
      <MDAddModal
        open={modalOpen}
        onClose={handleClose}
        title={null}
        onSubmit={handleSubmit}
        submitLabel={addType ? `Add ${addType}` : "Submit"}
        submitButtonProps={{
          sx: (theme) => ({
            background: theme.functions.linearGradient(
              theme.palette.gradients[sidenavColor || "info"].main,
              theme.palette.gradients[sidenavColor || "info"].state
            ),
            color: "#fff !important",
            fontWeight: "bold",
            borderRadius: 999,
            px: 4,
            py: 1.5,
            fontSize: 16,
            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.15)",
            letterSpacing: 1,
            "&:hover": {
              background: theme.functions.linearGradient(
                theme.palette.gradients[sidenavColor || "info"].state,
                theme.palette.gradients[sidenavColor || "info"].main
              ),
              color: "#fff !important",
              boxShadow: "0 4px 16px rgba(25, 118, 210, 0.18)",
            },
            transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
          }),
        }}
      >
        <Box
          maxWidth={480}
          mx="auto"
          my={2}
          p={4}
          bgcolor="background.paper"
          borderRadius={3}
          boxShadow={4}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          <MDTypography
            variant="h5"
            fontWeight={700}
            mb={1}
            sx={{
              background: (theme) =>
                theme.functions.linearGradient(
                  theme.palette.gradients[sidenavColor || "info"].main,
                  theme.palette.gradients[sidenavColor || "info"].state
                ),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Add (Super Admin)
          </MDTypography>
          <MDTypography variant="body2" color="text.secondary" mb={2}>
            Fill out the form below to add a new item. All fields are required.
          </MDTypography>
          <Divider sx={{ mb: 1 }} />
          <FormControl fullWidth required variant="outlined" sx={{ mb: 1 }}>
            <InputLabel
              id="add-type-label"
              sx={{
                fontWeight: 700,
                background: (theme) =>
                  theme.functions.linearGradient(
                    theme.palette.gradients[sidenavColor || "info"].main,
                    theme.palette.gradients[sidenavColor || "info"].state
                  ),
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Type
            </InputLabel>
            <Select
              labelId="add-type-label"
              value={addType}
              label="Type"
              onChange={handleTypeChange}
              input={<OutlinedInput label="Type" />}
              IconComponent={(props) => (
                <span {...props} style={{ color: "#1976d2", fontSize: 28, marginRight: 8 }}>
                  ▼
                </span>
              )}
              sx={(theme) => ({
                background: theme.palette.background.default,
                borderRadius: 3,
                minHeight: 48,
                fontSize: 16,
                fontWeight: 500,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1565c0",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1976d2",
                  boxShadow: "0 0 0 2px #1976d233",
                },
                transition: "border-color 0.2s, box-shadow 0.2s",
              })}
            >
              <MenuItem value="">
                <em>Select type…</em>
              </MenuItem>
              <MenuItem value="Branch">Branch</MenuItem>
              <MenuItem value="Department">Department</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Role">Role</MenuItem>
            </Select>
          </FormControl>
          {fields && (
            <Box display="flex" flexDirection="column" gap={2}>
              {React.Children.map(fields.props.children, (child) =>
                React.cloneElement(child, {
                  variant: "outlined",
                  InputProps: { style: { background: "white", borderRadius: 8 } },
                  required: true,
                })
              )}
            </Box>
          )}
        </Box>
      </MDAddModal>
      <MDBox py={1}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="info"
                chart={branchesData}
                title="Branches"
                description="Branch distribution"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="primary"
                chart={departmentsData}
                title="Departments"
                description="Department breakdown"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="success"
                chart={employeesData}
                title="Employees"
                description="Yearly employee growth"
                date="Updated just now"
                height="180px"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={4}>
              <ReportsBarChart
                color="dark"
                chart={rolesData}
                title="Roles"
                description="Role distribution"
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
