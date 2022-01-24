import { model } from 'dynamoose';
import genSchema from './Base';

const courseCategorySchema = genSchema({
  topic: {
    type: String,
    required: true,
  },
});

const CourseCategory = model('CourseCategory_rcv001', courseCategorySchema);

export default CourseCategory;
