/** @type {import('prettier').Config} */
module.exports = {
  tabWidth: 4,
  useTabs: false,
  semi: true,
  printWidth: 120,
  trailingComma: "all",
  singleAttributePerLine: true,
  singleQuote: false,
  endOfLine: "lf",
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
