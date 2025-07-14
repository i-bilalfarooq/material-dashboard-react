import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function Files() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>Files</h2>
      <p>This is the Files page.</p>
    </DashboardLayout>
  );
}
