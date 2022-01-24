import { model } from 'dynamoose';

import genSchema from './Base';
import User from './User';

const studentProfileSchema = genSchema({
  skills: User,
  topic: {
    type: Object,
    schema: {
      id: {
        type: String,
        required: true,
        hashKey: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
  },
  rating: {
    type: String,
    required: true,
  },
  jobs: {
    type: Array,
    schema: {
      company: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      description: String,
      modality: {
        type: String,
        required: true,
      },
      jobTime: {
        type: String,
        required: true,
      },
    },
  },
});

export default model('StudentProfile_rcv001', studentProfileSchema);
