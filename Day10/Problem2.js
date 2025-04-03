const run = { name: "khushi", total: 0, ball: { type: "leather" } };
// const otherrun = run;
const otherrun = { ...run };
otherrun.total = 20;
otherrun.ball.type = "tennis";
console.log(run);
console.log(otherrun);
