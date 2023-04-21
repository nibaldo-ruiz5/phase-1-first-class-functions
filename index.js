function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("Hello, world!");
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hello, world!");
  };
}
