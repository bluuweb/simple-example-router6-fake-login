export const fakePromise = (time = 1000) =>
  new Promise((resolve) => setTimeout(resolve, time));
