// routes/healthRecords.js
const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/HealthRecord');

// Create a new health record
router.post('/', async (req, res) => {
  try {
    const newRecord = new HealthRecord(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve a specific health record by ID
router.get('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a health record
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await HealthRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a health record
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
