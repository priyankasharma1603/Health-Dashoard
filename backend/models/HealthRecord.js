// models/HealthRecord.js
const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  bodyTemp: { type: Number, required: true },
  systolic: { type: Number, required: true },
  diastolic: { type: Number, required: true },
  heartRate: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
