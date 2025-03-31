import getListStudents from './0-get_list_students.js';

test('returns correct student list', () => {
  const result = getListStudents();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(3);
  expect(result[0]).toHaveProperty('id');
});
