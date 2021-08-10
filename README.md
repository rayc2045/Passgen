# Passgen - Node.js Password Generator

![Photo](https://raw.githubusercontent.com/rayc2045/Passgen/main/demo.png)

## Clone this repo
    git clone https://github.com/rayc2045/Passgen.git
    cd Passgen
    npm i

## Usage
Run file

    node index (options)

Create a symlink to run "Passgen" from anywhere

    npm link
    Passgen (options)

Remove symlink

    npm unlink Passgen

## Options
| Short | Long              | Description                      |
| ----- | ----------------- | -------------------------------- |
| -l    | --length <number> | length of password (default: 10) |
| -nn   | --no-numbers      | no numbers                       |
| -ns   | --no-symbols      | no symbols                       |
| -s    | --save            | save password to passwords.txt   |
| -h    | --help            | display help for command         |
| -V    | --version         | Show the version                 |
