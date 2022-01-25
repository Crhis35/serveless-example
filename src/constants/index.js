const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
};

const APIResponses = {
  _200(data = {}) {
    return {
      headers,
      statusCode: 200,
      body: JSON.stringify({ ...data, status: 'success' }),
    };
  },

  _400(data = {}) {
    return {
      headers,
      statusCode: 400,
      body: JSON.stringify({ data, status: 'error' }),
    };
  },
};

export default APIResponses;
