import { model } from 'dynamoose';
import genSchema from './Base';
import CourseCategory from './CourseCategory';

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
  categoryId: [CourseCategory],
});

const Course = model('Course_rcv001', courseSchema);

export default Course;
