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
import { isPort } from '@fireflysemantics/validatorts';
const portNumber:boolean = isPort('4200').value
console.log(isPortNumber)
```

# Error Handling

Each validator returns a `Result` with this interface:

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

## Browse Typedoc

[Typedoc](https://fireflysemantics.github.io/validatorts/doc/)

## Generate Typedoc 

`npm run doc-validatorts

Typedoc will be contained in the `doc` folder of the root directory.

