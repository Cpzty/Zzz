from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

server = "localhost"      
database = "ZenlessCompanion"  # e.g. "ZenlessZoneZero"

# Trusted connection string (no username/password)
connection_string = (
    f"mssql+pyodbc://@{server}/{database}?driver=ODBC+Driver+17+for+SQL+Server&trusted_connection=yes"
)

engine = create_engine(connection_string)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
