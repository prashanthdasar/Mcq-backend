const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true
  },
    MCQ: {
      name: {
        type: String,
        required: true
      },
      question: {
        type: Number,
        required: true
      },
      marks: {
        type: Number,
        required: true
      },
      questions: [
        {
          no: {
            type: Number,
            required: true
          },
          question: {
            type: String,
            required: true
          },
          options: [
            {
              type: String,
              required: true
            }
          ],
          correct: {
            type: String,
            required: true
          }
        }
      ]
    }
});

module.exports = mongoose.model('MCQ', mcqSchema);
