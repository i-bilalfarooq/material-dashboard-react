import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function Accounts() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h2>Accounts</h2>
      <p>This is the Accounts page.</p>
    </DashboardLayout>
  );
}
