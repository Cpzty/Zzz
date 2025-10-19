import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function AgentDetail() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/agents/${id}`)
      .then((res) => res.json())
      .then((data) => setAgent(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!agent) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back</Link>
      <h1>{agent.Name}</h1>
      <img
        src={agent.ImageURL}
        alt={agent.Name}
        style={{ width: "250px", borderRadius: "8px" }}
      />
      <p><strong>Faction:</strong> {agent.Faction}</p>
      <p><strong>Attribute:</strong> {agent.Attribute}</p>
      <p><strong>Specialty:</strong> {agent.Specialty}</p>
      <p><strong>Stats:</strong> HP {agent.HP} | ATK {agent.ATK} | DEF {agent.DEF}</p>
      <p>{agent.Description}</p>
    </div>
  );
}

export default AgentDetail;
