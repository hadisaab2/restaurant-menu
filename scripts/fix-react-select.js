const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "node_modules", "react-select", "dist");
const targetFile = path.join(distDir, "react-select.browser.esm.js");
const sourceFile = "./react-select.esm.js";

try {
  if (!fs.existsSync(distDir)) {
    process.exit(0);
  }

  if (!fs.existsSync(targetFile)) {
    const content = `export { default } from "${sourceFile}";\nexport * from "${sourceFile}";\n`;
    fs.writeFileSync(targetFile, content, "utf8");
  }
} catch (error) {
  // Silently fail to avoid breaking install in CI environments.
  process.exit(0);
}
