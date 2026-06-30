import { useEffect, useState } from "react";
import { getTickets } from "../services/api";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";
import TicketTable from "../components/TicketTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTickets() {
      try {
        const data = await getTickets();

        console.log("Received from API:", data);
        console.log("Is array?", Array.isArray(data));

        setTickets(data);
      } catch (error) {
        console.error("Failed to load tickets:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTickets();
  }, []);

  if (loading) {
    return <h2>Loading tickets...</h2>;
  }
  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
      ticket.customer_email.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="dashboard" style={{ padding: "20px" }}>
      <Header />

      <div
        className="stats-grid"
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <StatsCard title="Total Tickets" value={tickets.length} />

        <StatsCard
          title="Open Tickets"
          value={tickets.filter((t) => t.status === "Open").length}
        />

        <StatsCard
          title="Closed Tickets"
          value={tickets.filter((t) => t.status === "Closed").length}
        />

        <StatsCard
          title="High Priority"
          value={tickets.filter((t) => t.priority === "High").length}
        />
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <table>
        <TicketTable tickets={filteredTickets} />
      </table>
    </div>
  );
}

export default Dashboard;
