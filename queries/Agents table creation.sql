CREATE TABLE Agents (
    AgentID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Faction NVARCHAR(100),
    Attribute NVARCHAR(50),
    Specialty NVARCHAR(50),
    Rarity INT,
    WeaponType NVARCHAR(100),
    Skills NVARCHAR(MAX),
    Description NVARCHAR(MAX),
    ImageURL NVARCHAR(255)
);
