import User from '../models/User';
import { nanoid } from 'nanoid';

/**
 * Create a user
 * description: Builds a new user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.scan().where('email').eq(userBody.email).exec()) {
    throw new Error('User already exists');
  }
  return User.create({
    ...userBody,
    id: nanoid(),
  });
};
/**
 * Get a user
 * description: return user based on ID
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  return User.get(userId);
};

const UserService = {
  createUser,
  getUserById,
};

export default UserService;
