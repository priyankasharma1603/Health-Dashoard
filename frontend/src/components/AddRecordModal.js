import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/AddRecordModal.css";

function AddRecordModal({ setShowModal, addRecord, selectedRecord }) {
  const [form, setForm] = useState(
    selectedRecord || {
      date: "",
      bodyTemp: "",
      systolic: "",
      diastolic: "",
      heartRate: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRecord) {
      // Update existing record
      addRecord({ ...form, id: selectedRecord.id });
    } else {
      // Add new record
      addRecord({ ...form, id: Date.now() });
    }
    setShowModal(false);
  };

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h2>{selectedRecord ? "Edit" : "Add"} Health Record</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Body Temperature (°C)"
            value={form.bodyTemp}
            onChange={(e) => setForm({ ...form, bodyTemp: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Systolic Blood Pressure"
            value={form.systolic}
            onChange={(e) => setForm({ ...form, systolic: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Diastolic Blood Pressure"
            value={form.diastolic}
            onChange={(e) => setForm({ ...form, diastolic: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Heart Rate (BPM)"
            value={form.heartRate}
            onChange={(e) => setForm({ ...form, heartRate: e.target.value })}
            required
          />
          <button className="submit-btn" type="submit">
            {selectedRecord ? "Save" : "Submit"}
          </button>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default AddRecordModal;
