import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst returns expected value', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext returns expected value', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
