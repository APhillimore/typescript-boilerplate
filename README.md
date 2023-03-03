# Quick Start for scalable typescript monorepos


# Getting Started
Assumes Node, Git etc already installed. 
- clone the repo

``` bash

# Navigate to the dir
cd typescript-boilerplate
# Install these packages globally
npm i pnpm turbo typescript -g
# Install the repos packages
pnpm i

```

# Why a monorepo?
After learning Golang I saw some really simple practices that made development much more frictionless.
The monorepo is my solution to bring these solutions in to typescript.

- Provide a nice seperation of concerns
- Include the right tooling, testing, and building etc to run each package efficiently
- Run, tests and evaluate packages individually
- Reuse logic, designs, etc across multiple applications
- Reduce effort in splitting tasks across teams
- Enforce good standard practice
- Limit the API surface


# Pnpm
See - https://pnpm.io/
- Some small differences but use it like npm.
- Improved monorepo features
- Improved performance
- Easy enough to swap out to npm if you wish


# Turborepo - Incremental Build System
We may want to run scripts at build in a specific order forto example codegen.
Among other optimisations and conveniences Turbo allows us to create piplelines across the monorepo that can be ordered and easily invoked at the root.

# Jest 
Run tests and build coverage reports 

## @swc/jest
Drop in replacement for the standard Jest test runner. 
Written in Rust and super fast. 


# Typedoc
Create documentation using your comments and ts types.

# Eslint

# Prettier

Enforce consistent code formatting

# Additional - Recommended Packages

- Runtime types and validation
    - io-ts (fp-ts | richest)
    - Zod (lightweight)



# Additional - Recommended VSCode Plugins

- linting
    - prettier eslint

- Testing
    - jest
    - jest runner

- Remote 
    - SFTP - https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp


# Conventions / Style Guide

Suggested conventions:

Split related functionality into separate packages within the workspace

```
- naming: 
    - filenames: lowercase snake_case
    - constructors, classes: PascalCase
    - test location: <dir>/__testing__
    - test file name: <ts_file>.test.ts
    - other: camelCase

- comma dangle: yes

```
