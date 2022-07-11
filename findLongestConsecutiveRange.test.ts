import { findLongestConsecutiveRange } from "./findLongestConsecutiveRange";

test("[0, 0]", () => {
  const range = findLongestConsecutiveRange([]);
  expect(range[0]).toBe(0);
  expect(range[1]).toBe(0);
});
test("[1] => [0, 1]", () => {
  const range = findLongestConsecutiveRange([1]);
  expect(range[0]).toBe(0);
  expect(range[1]).toBe(1);
});
test("[1, 2] => [0, 2]", () => {
  const range = findLongestConsecutiveRange([1, 2]);
  expect(range[0]).toBe(0);
  expect(range[1]).toBe(2);
});
test("[1, 2, 3, -10, -9, -8, -7, 0, 1, 2]", () => {
  const range = findLongestConsecutiveRange([
    1, 2, 3, -10, -9, -8, -7, 0, 1, 2,
  ]);
  expect(range[0]).toBe(3);
  expect(range[1]).toBe(4);
});
test("[1, 1, 2, 3, 1, 2, 3]", () => {
  const range = findLongestConsecutiveRange([1, 1, 2, 3, 1, 2, 3]);
  expect(range[0]).toBe(1);
  expect(range[1]).toBe(3);
});
test("[1, 2, 3, 4, 3, 2, 1, 0, -2]", () => {
  const range = findLongestConsecutiveRange([1, 2, 3, 4, 3, 2, 1, 0, -2]);
  expect(range[0]).toBe(3);
  expect(range[1]).toBe(5);
});
test("[1, 2, 3, 4, 3, 2, 1, 0, -2], 1, -2", () => {
  const range = findLongestConsecutiveRange(
    [1, 2, 3, 4, 3, 2, 1, 0, -2],
    1,
    -2
  );
  expect(range[0]).toBe(8);
  expect(range[1]).toBe(1);
});
test("[0, 2, 4, 1, 3, 5, 7] 2", () => {
  const range = findLongestConsecutiveRange([0, 2, 4, 1, 3, 5, 7], 2);
  expect(range[0]).toBe(3);
  expect(range[1]).toBe(4);
});
test("[0, 2, 4, 1, 3, 5, 7] 2 2", () => {
  const range = findLongestConsecutiveRange([0, 2, 4, 1, 3, 5, 7], 2, 2);
  expect(range[0]).toBe(0);
  expect(range[1]).toBe(3);
});
