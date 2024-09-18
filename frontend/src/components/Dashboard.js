import React, { useState } from "react";
import HealthRecordList from "./HealthRecordList";
import SearchBar from "./SearchBar";
import AddRecordModal from "./AddRecordModal";
import LineChart from "./LineChart"; // Import the LineChart component
import "../styles/Dashboard.css";
import leftImage from "../assets/img.png"; // Import your image

function Dashboard() {
  const [records, setRecords] = useState([
    {
      id: 1,
      date: "2024-09-18",
      bodyTemp: 36.5,
      bloodPressure: { systolic: 120, diastolic: 80 },
      heartRate: 72,
    },
    {
      id: 2,
      date: "2024-09-17",
      bodyTemp: 37.0,
      bloodPressure: { systolic: 115, diastolic: 78 },
      heartRate: 70,
    },
  ]);

  const [filteredRecords, setFilteredRecords] = useState(records);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Handle adding a new record or updating an existing record
  const addRecord = (newRecord) => {
    setRecords((prev) =>
      prev.some((rec) => rec.id === newRecord.id)
        ? prev.map((rec) =>
            rec.id === newRecord.id ? newRecord : rec
          )
        : [...prev, newRecord]
    );
  };

  // Handle deleting a record
  const deleteRecord = (id) => {
    setRecords((prev) => prev.filter((rec) => rec.id !== id));
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <h1>Health Metrics Dashboard</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#records">Records</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <div className="left-section">
          <div className="image-container">
            <img src={leftImage} alt="Health Dashboard" className="animated-image" />
          </div>
        </div>

        <div className="right-section">
          <SearchBar records={records} setFilteredRecords={setFilteredRecords} />
          <HealthRecordList
            records={filteredRecords}
            setSelectedRecord={setSelectedRecord}
            setShowModal={setShowModal}
            deleteRecord={deleteRecord}
          />
          <button className="add-record-btn" onClick={() => setShowModal(true)}>
            Add Health Record
          </button>
          <LineChart records={filteredRecords} /> {/* Add the LineChart component */}
          {showModal && (
            <AddRecordModal
              setShowModal={setShowModal}
              addRecord={addRecord}
              selectedRecord={selectedRecord}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
