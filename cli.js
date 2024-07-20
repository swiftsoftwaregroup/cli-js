#!/usr/bin/env node

/**
 * CLI JS - A command-line tool for generating greetings in different languages.
 * @module cli-js
 */

const { program } = require('commander');
const fs = require('fs').promises;

/**
 * Generates a greeting in the specified language.
 * @param {string} name - The name to greet.
 * @param {string} language - The language code for the greeting.
 * @returns {string} The greeting message.
 */
function generateGreeting(name, language) {
  const greetings = {
    en: 'Hello',
    es: 'Hola',
    bg: 'Здравей'
  };

  const greeting = greetings[language] || greetings.en;
  return `${greeting}, ${name}!`;
}

/**
 * Main CLI program definition.
 */
program
  .name('cli-js')
  .description('CLI tool for greeting users in different languages')
  .version('1.0.0');

program
  .command('greet <file>')
  .description('Generate a greeting based on the name in the specified file')
  .option('-l, --language <language>', 'Language for the greeting', 'en')
  .addHelpText('after', `
    Examples:
      $ cli-node greet name.txt
      $ cli-node greet --language es name.txt
      $ cli-node greet -l bg name.txt
    
    Supported languages:
      en - English
      es - Spanish
      bg - Bulgarian`)  
  .action(async (file, options) => {
    try {
      const name = await fs.readFile(file, 'utf-8');
      const greeting = generateGreeting(name.trim(), options.language);
      console.log(greeting);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);