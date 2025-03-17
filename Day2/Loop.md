# JavaScript Loops

## 1. `for` Loop (Entry-Controlled)
👉 Use when you **know** how many times to run the loop.


```
for (initialization; condition; increment / decrement) {
  // Code to execute
}
```

- for exmple
` for (let i = 1; i <= 5; i++) {
  console.log(i);
}`

* let i = 1; → Start i at 1.
* i <= 5; → Run the loop as long as i is ≤ 5.
* i++ → Increase i by 1 after each iteration
# 2. `while` loop(`entry controlled`)
 - 👉 Use when the number of iterations is unknown and depends on a condition.
# 3. `do...while` loop(`exit controlled`)
-👉 Use when you need to execute the loop at least once, even if the condition is false.
`do {
  // Code to execute
} while (condition);
`
- The loop runs at least once, even if the condition is false initially.
# 4. `for...in` Loop (`Iterates Over Object Properties`)
`for (let key in object) {
  // Code to execute
}
`
# 5. `for...of` Loop (`Iterates Over Arrays & Strings`
)
`
for (let value of iterable) {
  // Code to execute
}
`
# 6. break Statement (Stops the Loop Early)
👉 Use when you need to exit the loop before completion.
# 7. continue Statement (Skip an Iteration)
👉 Use to skip an iteration and continue to the next one.
# 8. Nested Loops (Loop Inside Another Loop)
👉 Use when you need to work with multiple dimensions (like a matrix).

✅ Use for → When you know how many times to run the loop.
✅ Use while → When you don’t know the number of iterations.
✅ Use do...while → When the loop should run at least once.
✅ Use for...in → When looping through an object.
✅ Use for...of → When looping through an array or string.