import APIResponses from './src/constants';
import * as UserService from './src/services/user';

export async function hello(event) {
  try {
    const request = JSON.parse(event.body);
    const newUser = await UserService.createUser(request);
    return APIResponses._200({
      data: newUser,
    });
  } catch (error) {
    return APIResponses._400({
      error: error.message,
    });
  }
}
