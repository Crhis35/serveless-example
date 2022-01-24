const { model } = require('dynamoose');
const genSchema = require('./Base');

const topicSchema = genSchema({
  title: {
    type: String,
    required: true,
  },
});

const Topic = model(`Topic_rcv001`, topicSchema);

module.exports = Topic;
