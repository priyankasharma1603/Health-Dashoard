// Sidebar.js
import React from "react";
import { motion } from "framer-motion";
import "../styles/Sidebar.css";


function Sidebar() {
  return (
    <motion.div 
      className="sidebar"
      initial={{ x: -100 }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="icon home-icon">🏠</div>
      <div className="icon health-icon">💉</div>
      <div className="icon settings-icon">⚙️</div>
    </motion.div>
  );
}

export default Sidebar;
