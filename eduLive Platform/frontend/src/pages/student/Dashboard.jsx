import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: 20 }}>
        <h1>Student Dashboard</h1>
        <p>Upcoming Classes</p>
      </div>
    </div>
  );
}