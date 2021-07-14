# Passgen - Node.js Password Generator

## Clone this repo
    git clone https://github.com/rayc2045/Passgen.git
    cd Passgen
    npm i

## Usage
Run file

    node index (options)

Create a symlink to run "Passgen" from anywhere

    npm link
    Passgen (option)

Remove symlink

    npm unlink

## Options
| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -nn   | --no-numbers      | no numbers                      |
| -ns   | --no-symbols      | no symbols                      |
| -s    | --save            | save password to passwords.txt  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |