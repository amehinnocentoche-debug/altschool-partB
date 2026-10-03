function deepFreeze(obj) {
  Object.values(obj).forEach(value => {
    if (
      value &&
      typeof value === "object" &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}
const config = deepFreeze({
  api: {
    baseUrl: "https://x.com",
    retries: 3
  },
  debug: false
});

config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl, config.debug);
// https://x.com false

console.log(Object.isFrozen(config.api));
// true