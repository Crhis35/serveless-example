import APIResponses from '../../constants';
import * as UserService from '../../services/user';

export async function getUser(event) {
  try {
    const queryStringParameters = event.queryStringParameters;
    const { id } = queryStringParameters;

    const user = await UserService.getUserById(id);
    if (!user) {
      return APIResponses._400({
        error: 'User not found',
      });
    }
    return APIResponses._200({
      data: {
        user,
      },
    });
  } catch (error) {
    return APIResponses._400({
      error: error.message,
    });
  }
}
