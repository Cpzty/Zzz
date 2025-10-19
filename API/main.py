from fastapi import FastAPI
import pyodbc
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

server = r"localhost"
database = "ZenlessCompanion"

def get_connection():
    return pyodbc.connect(
        f"DRIVER={{ODBC Driver 17 for SQL Server}};"
        f"SERVER={server};DATABASE={database};Trusted_Connection=yes;"
    )

@app.get("/agents")
def get_agents():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT AgentID, Name, Faction, Specialty, HP, ATK, DEF, ImageURL FROM Agents")
    rows = cursor.fetchall()
    agents = [{"AgentID": r.AgentID, "Name": r.Name, "Faction": r.Faction,
               "Specialty": r.Specialty, "HP": r.HP, "ATK": r.ATK, "DEF": r.DEF, "ImageURL": r.ImageURL} for r in rows]
    cursor.close()
    conn.close()
    return agents

@app.get("/agents/{agent_id}")
def get_agent(agent_id: int):
    conn = get_connection()
    cursor = conn.cursor(as_dict=True)
    cursor.execute("SELECT * FROM Agents WHERE AgentID = %s", (agent_id,))
    agent = cursor.fetchone()
    return agent

