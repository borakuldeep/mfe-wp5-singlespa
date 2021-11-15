const createStore = () => {
  let count = 0;
  const subscribers = [];

  return {
    get count() {
      return count;
    },
    incrementCount() {
      count += 1;
      subscribers.forEach(fn => fn());
    },
    decrementCount() {
      count -= 1;
      subscribers.forEach(fn => fn());
    },
    subscribe(fn) {
      subscribers.push(fn);
    }
  }
};

const store = createStore();

export default store;
