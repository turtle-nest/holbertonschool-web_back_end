import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload])
    .then((results) => results.map((res) => {
      if (res.status === 'fulfilled') {
        return {
          status: res.status,
          value: res.value,
        };
      }
      return {
        status: res.status,
        value: res.value,
      };
    }));
}
