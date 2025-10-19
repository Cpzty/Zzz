import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AgentsList() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/agents")
      .then((res) => res.json())
      .then((data) => setAgents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Zenless Zone Zero Agents</h1>
      {agents.map((agent) => (
        <Link
          key={agent.AgentID}
          to={`/agents/${agent.AgentID}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            <img
              src={agent.ImageURL}
              alt={agent.Name}
              style={{
                width: "100px",
                marginRight: "10px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
            <div>
              <h2>
                {agent.Name} ({agent.Specialty})
              </h2>
              <p>Faction: {agent.Faction}</p>
              <p>
                HP: {agent.HP} | ATK: {agent.ATK} | DEF: {agent.DEF}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AgentsList;
