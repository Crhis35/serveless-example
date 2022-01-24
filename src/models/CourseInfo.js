import { model } from 'dynamoose';
import genSchema from './Base';

const courseInfoSchema = genSchema({
  week: {
    type: Date,
    required: true,
  },
  hours: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
});

const CourseInfo = model(`CourseInfo_rcv001`, courseInfoSchema);

export default CourseInfo;
