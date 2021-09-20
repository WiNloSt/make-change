const makeChange = require("./make-change")

test("test case 1", () => {
  const change = makeChange(6, [1, 5, 10, 25])
  expect(change).toEqual({ 1: 6 })
})

test("test case 2", () => {
  const change = makeChange(6, [3, 4])
  expect(change).toEqual({ 3: 2 })
})

test("test case 3", () => {
  const change = makeChange(6, [1, 3, 4])
  expect(change).toEqual({ 1: 6 })
})

test("test case 4", () => {
  const change = makeChange(6, [5, 7])
  expect(change).toEqual({})
})
