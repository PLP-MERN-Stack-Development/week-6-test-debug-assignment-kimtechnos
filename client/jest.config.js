module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/src/tests/**/*.test.jsx", "**/src/tests/**/*.test.js"],
};
