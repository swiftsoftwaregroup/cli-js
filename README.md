# cli-js
Template for Command Line Interface (CLI) tool for Node.js and JavaScript

## Development

### Setup for macOS

#### Nvm

`nvm` is node.js version manager.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Close and reopen terminal.

#### Node.js

Install via `nvm`:

```bash
nvm install v20.15.1
```

Make sure you do not have default node set:

```bash
nvm unalias default
```

Activate node 20.15.1:

```bash
nvm use 20.15.1
```

#### Configure npm

Configure `npm` (Node Package Manager) to save versions of packages in `packages.json`. This way you can have the same stable environment on all development machines:

```bash
nvm use 20.15.1
npm config set save=true
npm config set save-exact=true
```

### Work on macOS

Configure project:

```bash
source configure.sh
```

Open the project in Visual Studio Code:

```bash
code .
```

### Test

```bash
npm test
```

### Run

```bash
chmod +x cli.js

echo "John" > name.txt

./cli.js greet name.txt
./cli.js greet --language es name.txt
./cli.js greet -l bg name.txt
```

### Use as a global tool

#### Install

```bash
npm install --global .
```

#### Run

```bash
echo "John" > name.txt

cli-js greet name.txt
cli-js greet --language es name.txt
cli-js greet -l bg name.txt
```

### How to create a new project

```bash
# create new project
npm init --yes --init-version 0.1.0 --init-license Apache-2.0

# add packages
npm install commander fs
npm install --save-dev jest
```

