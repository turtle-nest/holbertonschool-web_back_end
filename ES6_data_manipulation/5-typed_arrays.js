export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  // allocate a buffer of `length` bytes
  const buffer = new ArrayBuffer(length);
  // DataView allows access to the buffer in a typed manner
  const view = new DataView(buffer);

  // inserts the value at the specified position
  view.setInt8(position, value);

  return view;
}
