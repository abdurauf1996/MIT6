function number(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      count++;
    }
  }
  return count;
}
console.log(number("abd130n"));
console.log(number("a7711b"));
console.log(number("dsieh2840237"));
