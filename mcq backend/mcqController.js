const MCQ = require('../models/mcqModel');

// Create a new MCQ
exports.createMCQ = async (req, res) => {
  const newMCQ = await MCQ.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      mcq: newMCQ,
    },
  });
};

// Get all MCQs
exports.getAllMCQs = async (req, res) => {
  const mcqs = await MCQ.find();
  res.status(200).json({
    status: 'success',
    data: {
      mcqs,
    },
  });
};

// Update 
exports.updateMCQ = async (req, res) => {
  const updatedMCQ = await MCQ.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      mcq: updatedMCQ,
    },
  });
};

// Delete
exports.deleteMCQ = async (req, res) => {
  await MCQ.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
