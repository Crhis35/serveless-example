const { model } = require('dynamoose');
const { emailChecker } = require('../constants');

const genSchema = require('./Base');

const userSchema = genSchema({
  role: {
    type: String,
    enum: ['recruiter', 'student'],
    default: 'student',
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: emailChecker,
    index: {
      name: 'emailIndex',
      global: true,
    },
  },
  phoneNumber: {
    type: Object,
    schema: {
      countryCode: {
        type: String,
        trim: true,
      },
      number: {
        type: String,
        trim: true,
      },
    },
  },
  links: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          name: {
            type: String,
            trim: true,
            required: true,
          },
          url: {
            type: String,
            trim: true,
            required: true,
          },
        },
      },
    ],
  },
  score: {
    type: Number,
    default: 0,
    validate: (val) => val >= 0,
  },
});

const User = model('User_rcv001', userSchema);

module.exports = User;
