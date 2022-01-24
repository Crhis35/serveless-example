const { model } = require('dynamoose');
const genSchema = require('./Base');

const studentCourseSchema = genSchema({
  courseld: {
    type: String,
    required: true,
  },
  finish: {
    type: Boolean,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  weekInfo: {
    type: Array,
    Schema: {
      date: {
        type: Date,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      expendedHours: {
        type: Number,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  },
  goal: {
    type: Number,
    required: true,
  },
  weekCount: {
    type: Number,
    required: true,
  },
});

const StudentCourse = model(`StudentCourse_rcv001`, studentCourseSchema);

module.exports = StudentCourse;
