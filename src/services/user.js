import User from '../models/User';
import { nanoid } from 'nanoid';

/**
 * Create a user
 * description: Builds a new user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
export const createUser = async (userBody) => {
  if (await User.scan().where('email').eq(userBody.email).exec()) {
    throw new Error('User already exists');
  }
  return User.create({
    ...userBody,
    id: nanoid(),
  });
};
/**
 * Create a user
 * description: Builds a new user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
export const getUserById = async (userId) => {
  return User.get(userId);
};
