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
      active: {
        type: Boolean,
        required: true,
        default: true,
      },
      ...schema,
    },
    {
      timestamps: true,
    }
  );
};

export default genSchema;
