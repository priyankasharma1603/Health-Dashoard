import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import AddRecordModal from "./components/AddRecordModal";
import "./App.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const [records, setRecords] = useState([
    // initial records
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredRecords = records.filter((record) => {
    return (
      record.date.includes(searchTerm) ||
      record.heartRate >= parseInt(searchTerm, 10)
    );
  });

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                records={filteredRecords}
                setShowModal={setShowModal}
                setSelectedRecord={setSelectedRecord}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
        </Routes>
        <AnimatePresence>
          {showModal && (
            <AddRecordModal
              setShowModal={setShowModal}
              setRecords={setRecords}  // Ensure this is being passed
              selectedRecord={selectedRecord}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
    
  );
}

export default App;
