import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function Manager() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>Manager</h2>
      <p>This is the Manager page.</p>
    </DashboardLayout>
  );
}
