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
import linearGradient from "assets/theme/functions/linearGradient";
import { Box, Typography, Divider } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";

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
    console.log("Accounts Add:", addType, form);
    handleClose();
  };

  let fields = null;
  if (addType === "Transaction") {
    fields = (
      <>
        <TextField label="Name" name="name" fullWidth margin="normal" onChange={handleFormChange} />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
          InputLabelProps={{ shrink: true }}
        />
      </>
    );
  } else if (addType === "Bill") {
    fields = (
      <>
        <TextField
          label="Bill Name"
          name="billName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Quotation") {
    fields = (
      <>
        <TextField
          label="Quotation Name"
          name="quotationName"
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
        <TextField
          label="Amount"
          name="amount"
          type="number"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
      </>
    );
  } else if (addType === "Budget") {
    fields = (
      <>
        <TextField
          label="Budget Name"
          name="budgetName"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Quarter"
          name="quarter"
          fullWidth
          margin="normal"
          onChange={handleFormChange}
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
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
            Add (Accounts)
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
              <MenuItem value="Transaction">Transaction</MenuItem>
              <MenuItem value="Budget">Budget</MenuItem>
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
