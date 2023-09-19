const result = (x, y) => {
  const x_str = x.toLowerCase().split("");
  const y_str = y.toLowerCase().split("");

  if (x_str.sort().join("") === y_str.sort().join("")) {
    console.log(x_str, y_str);
    return true;
  }

  return false;
};

const result1 = result("Ben", "Abdu1");
console.log(result1);
