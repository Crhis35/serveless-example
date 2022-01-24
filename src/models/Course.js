const { model } = require('dynamoose');
const genSchema = require('./Base');
const CourseCategory = require('./CourseCategory');

const courseSchema = genSchema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: Number,
    required: true,
    default: 0,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  categoryId: CourseCategory,
});

const Course = model('Course_rcv001', courseSchema);

module.exports = Course;
