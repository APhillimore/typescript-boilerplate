# Quick Start for scalable typescript monorepos


# Why a monorepo?
- Provide a nice separation of concerns
- Include the right tooling, testing, and building etc to run each package efficiently
- Run, tests and evaluate packages individually
- Reuse logic, designs, etc across multiple applications
- Reduce effort in splitting tasks across teams
- Enforce good standard practice
- Limit the API surface


# Getting Started
Assumes Node, Git etc already installed. 
- clone the repo

``` bash

# Navigate to the dir
cd typescript-boilerplate
# Install these packages globally
npm i pnpm typescript -g
# Use pnpm to install Turborepo globally
pnpm add turbo -g
# Install the local packages
pnpm i
# Run any setup scripts (download, mkcert, codegen, etc)
turbo download
turbo setup

```

# Pnpm
See - https://pnpm.io/
- Some small differences but use it like npm.
- Improved monorepo features
- Improved performance

# Turborepo - Incremental Build System
Create pipelines that allow us to execute scripts across the monorepo in a specific order.

# Jest 
Run tests and build coverage reports 

## @swc/jest
Drop-in replacement for the standard Jest test runner. 
Written in Rust and super fast. 


# Typedoc
Create documentation using JSDoc comments and TypeScript type annotations.

# Eslint
Static code analysis to help detect problems and enforce code styles

# Prettier
Enforce consistent code formatting

# Additional - Recommended VSCode Plugins
- linting
    - prettier eslint

- Testing
    - jest
    - jest runner

- Remote dev servers
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

- trailing commas: yes

```
