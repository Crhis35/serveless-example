const { model } = require('dynamoose');
const genSchema = require('./Base').default;
const User = require('./User').default;

const recruiterProfileSchema = genSchema({
  user: User,
});

const RecruiterProfile = model(
  'RecruiterProfile_rcv001',
  recruiterProfileSchema
);

module.exports = RecruiterProfile;
