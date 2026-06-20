const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

let jsCode = '';
$('script').each((i, el) => {
  jsCode += $(el).text() + '\n';
});

// Mock DOM environment for the script
global.document = {
  getElementById: () => ({ value: '1', checked: false, style: {}, addEventListener: () => {} }),
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.window = {
  addEventListener: () => {},
  DOMPurify: null
};
global.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

// Evaluate the combined JS
eval(jsCode);

// Manually trigger the tests
if (typeof global.window.executeCalculatorTests === 'function') {
  global.window.executeCalculatorTests();
} else {
  console.log("Function not found.");
}
