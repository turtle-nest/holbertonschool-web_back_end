import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) =>
    results.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : res.reason,
    }))
  );
}
