[![Build Status](https://travis-ci.org/fireflysemantics/validatorts.svg?branch=master)](https://travis-ci.org/fireflysemantics/validatorts)

# Install

```
npm i -S @fireflysemantics/validatorts
```

Note that if you are using the `FESM5` package format the `tslib` peer dependency must also be installed.

```
npm i -S npm i tslib
```

# Use

```
const isPortNumber:boolean = isPort('4200')
console.log(isPortNumber)
```

# Supported Package Formats

The library is built with the Angular Package Format.  It therefore supports all these package formats (As can be seen in the provided `package.json`) and has integrated typescript definitions:

- "main": "bundles/fireflysemantics-validatorts.umd.js",
-  "module": "fesm5/fireflysemantics-validatorts.js",
-  "es2015": "fesm2015/fireflysemantics-validatorts.js",
-  "esm5": "esm5/fireflysemantics-validatorts.js",
-  "esm2015": "esm2015/fireflysemantics-validatorts.js",
-  "fesm5": "fesm5/fireflysemantics-validatorts.js",
-  "fesm2015": "fesm2015/fireflysemantics-validatorts.js",
-  "typings": "fireflysemantics-validatorts.d.ts",


# ValidatorTS Workspace    

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Build ValidatorTS

Run `ng build validatorts`

## Running unit tests

Run the Jest Tests for ValidatorTS

`npm t`

## Browse Typedoc

[Typedoc](https://fireflysemantics.github.io/validatorts/doc/)

## Generate Typedoc 

`npm run d`

Typedoc will be contained in the `doc` folder of the root directory.