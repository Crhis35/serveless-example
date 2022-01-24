const { model } = require('dynamoose');
const genSchema = require('./Base');

const courseCategorySchema = genSchema({
  topic: {
    type: String,
    required: true,
  },
});

const CourseCategory = model('CourseCategory_rcv001', courseCategorySchema);

module.exports = CourseCategory;
