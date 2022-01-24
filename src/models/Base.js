import { Schema } from 'dynamoose';

const genSchema = (schema) => {
  return new Schema(
    {
      id: {
        type: String,
        required: true,
        hashKey: true,
      },
      ...schema,
    },
    {
      timestamps: true,
    }
  );
};

export default genSchema;
