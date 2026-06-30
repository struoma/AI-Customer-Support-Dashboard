import "../styles/TicketTable.css";

function TicketTable({ tickets }) {
  return (
    <table className="ticket-table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Subject</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={index}>
            <td>{ticket.customer_name}</td>
            <td>{ticket.subject}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TicketTable;
