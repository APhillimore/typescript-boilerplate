# Quick start for typescript projects


# Getting Started
Assumes Node, Git etc already installed. 

- clone the repo
- from the repo dir

``` bash

npm install

```

# Additional - Recommended Packages

- Runtime types and validation
    - io-ts (fp | richest)
    - zod (lightweight)



# Additional - Recommended VSCode plugins

- linting
    - prettier eslint

- Testing
    - jest
    - jest runner

- Remote 
    - SFTP - https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp


# Conventions

Suggested conventions:

Split related functionality into seperate packages within the workspace

```

filenames: lowercase snake_case
functions: camelcase
commadangle: yes
test location: <dir>/__testing__
test file name: <ts_file>.test.ts

```