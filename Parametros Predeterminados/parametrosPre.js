function preFilledArray([x = 1, y = 2, z = 3] = []) {
    return x + y + z;
  }
console.log(preFilledArray([2]))
