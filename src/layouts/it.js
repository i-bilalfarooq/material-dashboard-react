import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function IT() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>IT</h2>
      <p>This is the IT page.</p>
    </DashboardLayout>
  );
}
