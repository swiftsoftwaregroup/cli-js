const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CLI_PATH = path.join(__dirname, '..', 'cli.js');

describe('CLI E2E tests', () => {
  const testFileName = 'test_name.txt';

  beforeEach(() => {
    // Create a test file with a name
    fs.writeFileSync(testFileName, 'John');
  });

  afterEach(() => {
    // Clean up the test file
    fs.unlinkSync(testFileName);
  });

  test('greets in English by default', () => {
    const output = execSync(`node ${CLI_PATH} greet ${testFileName}`).toString().trim();
    expect(output).toBe('Hello, John!');
  });

  test('greets in Spanish when specified', () => {
    const output = execSync(`node ${CLI_PATH} greet -l es ${testFileName}`).toString().trim();
    expect(output).toBe('Hola, John!');
  });

  test('greets in Bulgarian when specified', () => {
    const output = execSync(`node ${CLI_PATH} greet --language bg ${testFileName}`).toString().trim();
    expect(output).toBe('Здравей, John!');
  });

  test('handles non-existent file', () => {
    expect(() => {
      execSync(`node ${CLI_PATH} greet non_existent_file.txt`);
    }).toThrow();
  });
});