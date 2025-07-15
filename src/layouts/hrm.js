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
import MDAddModal from "components/MDAddModal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import linearGradient from "assets/theme/functions/linearGradient";

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
    console.log("HRM Add:", addType, form);
    handleClose();
  };

  let fields = null;
  if (addType === "Employee") {
    fields = (
      <>
        <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleFormChange} />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Department"
          name="department"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField label="Role" name="role" fullWidth margin="normal" onChange={handleFormChange} />
      </>
    );
  } else if (addType === "Leave Request") {
    fields = (
      <>
        <TextField
          label="Employee"
          name="employee"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Dates"
          name="dates"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Reason"
          name="reason"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Job Application") {
    fields = (
      <>
        <TextField
          label="Applicant Name"
          name="applicantName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Position"
          name="position"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Status"
          name="status"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Document") {
    fields = (
      <>
        <TextField
          label="Document Type"
          name="documentType"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          type="date"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
          InputLabelProps={{ shrink: true }}
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
          <Typography
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
            Add (HRM)
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Fill out the form below to add a new item to HRM. All fields are required.
          </Typography>
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
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Leave Request">Leave Request</MenuItem>
              <MenuItem value="Job Application">Job Application</MenuItem>
              <MenuItem value="Document">Document</MenuItem>
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
