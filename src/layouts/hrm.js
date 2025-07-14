import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function HRM() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>HRM</h2>
      <p>This is the HRM page.</p>
    </DashboardLayout>
  );
}
