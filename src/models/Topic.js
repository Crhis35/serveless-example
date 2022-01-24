import { model } from 'dynamoose';
import genSchema from './Base';

const topicSchema = genSchema({
  title: {
    type: String,
    required: true,
  },
});

const Topic = model(`Topic_rcv001`, topicSchema);

export default Topic;
