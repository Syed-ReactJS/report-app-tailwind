import React from "react";
import Chart from "../components/dashboard/BarChart";
import Card from "../components/dashboard/Card";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="h-screen">
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ml-6 mt-2">
          <Card data={{ title: "Total Users" }} />
          <Card data={{ title: "Total Reports" }} />
          <Card data={{ title: "Total Amount" }} />
          <Card data={{ title: "Total Current Amount" }} />
        </div>
        <div className="grid grid-cols-2 gap-2 h-80 mt-2 pr-2 bg-gray-100 ">
          <Chart />
          <Chart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
