import User from '../models/User';
import { v4 as uuid } from 'uuid';

/**
 * Create a user
 * description: Builds a new user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const users = await User.scan().where('email').eq(userBody.email).exec();
  if (Array.isArray(users) && users.length > 0) {
    throw new Error('User already exists');
  }
  return User.create({
    id: uuid(),
    ...userBody,
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
