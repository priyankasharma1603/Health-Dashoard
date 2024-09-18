import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ records, setFilteredRecords }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = records.filter((record) =>
      record.date.includes(value) ||
      record.bodyTemp.toString().includes(value) ||
      record.heartRate.toString().includes(value) ||
      `${record.bloodPressure.systolic}/${record.bloodPressure.diastolic}`.includes(value)
    );
    setFilteredRecords(filtered);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by date, temperature, heart rate, etc."
      />
    </div>
  );
}

export default SearchBar;
