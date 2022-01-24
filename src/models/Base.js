const { Schema } = require('dynamoose');

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

module.exports = genSchema;
