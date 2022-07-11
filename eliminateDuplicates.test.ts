test("Short distinct array", () => {
  const array = [...Array(10).keys()];
  expect(eliminateDuplicates(array).length).toBe(10);
});
test("Short equal array", () => {
  const array = [
    ...Array(10).map(() => 1),
    ...Array(10).map(() => 1),
    ...Array(10).map(() => 1),
  ];
  expect(eliminateDuplicates(array).length).toBe(1);
});

test("Long distinct array", () => {
  const array = [
    ...Array(500).keys(),
    ...Array(500).keys(),
    ...Array(500).keys(),
  ];
  expect(eliminateDuplicates(array).length).toBe(500);
});
test("Long equal array", () => {
  const array = [...Array(1000).map(() => 1)];
  expect(eliminateDuplicates(array).length).toBe(1);
});
