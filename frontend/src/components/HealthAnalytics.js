// HealthAnalytics.js
import React from "react";
import { motion } from "framer-motion";
import "../styles/HealthAnalytics.css";

function HealthAnalytics({ records }) {
  const latestRecord = records[records.length - 1];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="analytics"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.2 }}
    >
      <motion.div className="card" variants={cardVariants}>
        <h3>Blood Pressure</h3>
        <p>
          {latestRecord.bloodPressure.systolic}/{latestRecord.bloodPressure.diastolic} mmHg
        </p>
      </motion.div>

      <motion.div className="card" variants={cardVariants}>
        <h3>Body Temperature</h3>
        <p>{latestRecord.bodyTemp} °C</p>
      </motion.div>

      <motion.div className="card" variants={cardVariants}>
        <h3>Heart Rate</h3>
        <p>{latestRecord.heartRate} BPM</p>
      </motion.div>
    </motion.div>
  );
}

export default HealthAnalytics;
