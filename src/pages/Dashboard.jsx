import React from "react";
import Card from "../components/dashboard/Card";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ml-6 mt-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
