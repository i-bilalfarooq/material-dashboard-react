import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function Operations() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>Operations</h2>
      <p>This is the Operations page.</p>
    </DashboardLayout>
  );
}
