import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function CRM() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>CRM</h2>
      <p>This is the CRM page.</p>
    </DashboardLayout>
  );
}
