// Promise
// - represents the eventual result of an asynchronous operation
// - it's a placeholder into which the successful or failed result will materialize
// - provide simpler alternative for executing, composing and managing
//   async operations when compared to callback-based approach

// Promise can be one of 3 states:
// 1. pending
// 2. resolved
// 3. rejected

// - when a promise is pending, it can transition to the fullfilled or rejected
//   state.
// - once a promise is fulfilled or rejected, it will never transition to any
//   other state
// - promises are chainable

// First we create a Promise, or call a function that return a promise
const getUser = new Promise((resolve, reject) => {
  if (false) {
    const user = {
      id: 1,
      firstname: 'John',
      lastname: 'Smith'
    };
    resolve(user);
  } else {
    const err = new Error('Could not find a user');
    reject(err);
  }
});

// Once we have a Promise, then we consume it
const result = () => {
  getUser
    .then((user) => console.log(user))
    .catch(err => console.error(`Error: ${err.message}`));
};

result();

// ---------------------------------------------------------------------------

const p = new Promise((resolve, reject) => {

  // Do the async task
  setTimeout(() => {
    resolve(1);
  }, 3000);

});

// You can chain then method callbacks. Each then receives the result of the
// previous then's return value.
p.then(result => {
  return result + 1;
}).then(result => {
  return result + 1;
}).then(result => {
  console.log(result);
}).catch(err => {
  // catch callback is executed when the promise is rejected
  // do something with the reject result
  console.error(err);
});
