import { replaceText, replaceTextWithForcedIndex } from "./replaceText";

test("replaceText('hello', 2, 3, 'world') === 'heworldlo'", () => {
  expect(replaceText("hello", 2, 3, "world")).toBe("heworldlo");
});
test("replaceText('hello', 6, 7 , 'world') === 'heworldlo'", () => {
  expect(replaceTextWithForcedIndex("hello", 6, 7, "world")).toBe("hworldllo");
});
