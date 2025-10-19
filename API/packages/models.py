from sqlalchemy import Column, Integer, String
from .database import Base

class Agent(Base):
    __tablename__ = "Agents"

    AgentID = Column(Integer, primary_key=True, index=True)
    Name = Column(String(100), nullable=False)
    Faction = Column(String(100))
    Attribute = Column(String(50))
    Specialty = Column(String(50))
    Rarity = Column(Integer)
    WeaponType = Column(String(100))
    Skills = Column(String)
    Description = Column(String)
    ImageURL = Column(String(255))
    HP = Column(Integer)
    ATK = Column(Integer)
    DEF = Column(Integer)
