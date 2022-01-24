import validator from 'validator';

import { model } from 'dynamoose';
import genSchema from './Base';
import Course from './Course';

const studentCourseSchema = genSchema({
  courseld: Course,
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
        validate: validator.isDate,
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

export default StudentCourse;
