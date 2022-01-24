import APIResponses from '../constants';
import * as UserService from '../services/user';

export async function createUser(event) {
  try {
    const newUser = await UserService.createUser(event.body);

    return APIResponses._200({
      data: newUser,
    });
  } catch (error) {
    return APIResponses._400({
      error: error.message,
    });
  }
}
