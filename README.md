# @fireflysemantics/validatorts

A typescript library of [validators and sanitizers](https://fireflysemantics.github.io/validatorts/modules.html) based on [validator.js](https://www.npmjs.com/package/validator).


[![Build Status](https://travis-ci.org/fireflysemantics/validatorts.svg?branch=master)](https://travis-ci.org/fireflysemantics/validatorts)

# Install

```
npm i -S @fireflysemantics/validatorts tslib
```

# Use

```
import { isPort } from '@fireflysemantics/validatorts';
console.log(isPort('4200').value) //Logs true
```
[Stackblitz](https://stackblitz.com/edit/typescript-ahxupq)

# Error Handling

# API

Each validator returns a `Result` instance with this interface:

```
/**
 * The result of validation calls.
 */
export class Result<E> {
    public message?:string
    constructor(
        public value: E | undefined,
        public error?: MessageFunctionType,
        public parameters?: string[]
    ) { 
        if (error) {
            this.message = this.error!(parameters)
        }
    }
}
```



Thus if there is an error the `value` property will be `undefined`, the `error` property will be set to the function used to generate the `message` and the `message` will be initialized as well.

For the error handlling approach see the article [Typescript Exception Free Function Error Handling](https://developer.fireflysemantics.com/tasks/tasks--typescript--typescript-exception-free-error-handling).

## Browse Typedoc

The [Typedoc](https://fireflysemantics.github.io/validatorts/) contains documentation for all the validators and sanitizers.

Clicking on a particular validator or sanitizer reveals the API and the types of errors that can occur when using the API.

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

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.


## Build ValidatorTS
From the project root run `npm run b`

## Running unit tests

Run the Jest Tests for ValidatorTS

`npm t`

## Generate Typedoc 

`npm run doc-validatorts

Typedoc will be contained in the `doc` folder of the root directory.

