import uploadPhoto from './utils.js';
import { createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const result = `${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`;
      console.log(result);
      return result;
    })
    .catch(() => {
      console.log('Signup system offline');
      return 'Signup system offline';
    });
}
