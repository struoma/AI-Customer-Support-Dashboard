import "../styles/Header.css";

function Header({ refresh }) {
  return (
    <div className="header">
      <div>
        <h1>AI Customer Support Dashboard</h1>
        <p>Live ticket overview powered by n8n</p>
      </div>

      <button className="refresh-btn" onClick={refresh}>
        🔄 Refresh
      </button>
    </div>
  );
}

export default Header;
