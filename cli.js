#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs').promises;

program
  .name('cli-js')
  .description('CLI tool for greeting users in different languages')
  .version('1.0.0');

program
  .command('greet <file>')
  .description('Generate a greeting based on the name in the specified file')
  .option('-l, --language <language>', 'Language for the greeting', 'en')
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

function generateGreeting(name, language) {
  const greetings = {
    en: 'Hello',
    es: 'Hola',
    bg: 'Здравей'
  };

  const greeting = greetings[language] || greetings.en;
  return `${greeting}, ${name}!`;
}

program.parse(process.argv);