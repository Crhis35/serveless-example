import APIResponses from './src/constants';
import User from './src/models/User';

export async function hello(event) {
  const newUser = await User.create({
    ...event.body,
  });
  return APIResponses._200({
    data: newUser,
  });
}
