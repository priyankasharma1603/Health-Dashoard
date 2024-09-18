import React from "react";
import { motion } from "framer-motion";
import "../styles/HealthRecordList.css";

function HealthRecordList({ records, setSelectedRecord, setShowModal, setRecords }) {
  
  const handleDelete = (id) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  const handleEdit = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  return (
    <motion.div className="record-list">
      {records.map((record) => (
        <motion.div
          key={record.id}
          className="record-item"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span>{record.date}</span>
          <span>{record.bodyTemp} °C</span>
          <span>
            {record.bloodPressure.systolic}/{record.bloodPressure.diastolic} mmHg
          </span>
          <span>{record.heartRate} BPM</span>
          <motion.button
            className="edit-btn"
            onClick={() => handleEdit(record)}
          >
            Edit
          </motion.button>
          <motion.button
            className="delete-btn"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HealthRecordList;
