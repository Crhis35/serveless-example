import APIResponses from '../../common';
import UserService from '../../services/user';

export const getUser = async (event) => {
  try {
    if (!event?.pathParameters.ID) {
      return APIResponses._400({ message: 'missing the ID from the path' });
    }

    const user = await UserService.getUserById(event.pathParameters.ID);

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
};

export const createUser = async (event) => {
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
};
