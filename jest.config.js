module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
}