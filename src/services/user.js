import User from '../models/User';

/**
 * Create a user
 * description: Builds a new user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
export const createUser = async (userBody) => {
  if (await User.findOne({ email: userBody.email })) {
    throw new Error('User already exists');
  }
  const user = await User.create(userBody);
  return user;
};
