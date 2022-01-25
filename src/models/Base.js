import { Schema } from 'dynamoose';

const genSchema = (schema) => {
  return new Schema(
    {
      id: {
        type: String,
        required: true,
        hashKey: true,
      },
      tags: {
        type: [String],
        required: false,
      },
      ...schema,
    },
    {
      timestamps: true,
    }
  );
};

export default genSchema;
