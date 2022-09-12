# @fireflysemantics/validatorts

A typescript library of [validators and sanitizers](https://fireflysemantics.github.io/validatorts/modules.html) based on [validator.js](https://www.npmjs.com/package/validator).


[![Build Status](https://travis-ci.org/fireflysemantics/validatorts.svg?branch=master)](https://travis-ci.org/fireflysemantics/validatorts)

## Typedoc

The [Typedoc](https://fireflysemantics.github.io/validatorts/) contains documentation for all the `validators` and `sanitizers`.

## Install

```
npm i -S @fireflysemantics/validatorts tslib
```

## Use

```
import { isPort } from '@fireflysemantics/validatorts';
console.log(isPort('4200').value) //Logs true
console.log(isPort('70000').value); //Logs false
console.log(isPort('4200').error); //Logs undefined
```

[Stackblitz Playground](https://stackblitz.com/edit/typescript-ezqnqa?file=index.ts)

## Error Handling

In the event of an error the `Result.value` property will be `undefined` and both the `message` and `error` properties will be set, thus we can handle and error like this:

```
if (isPort(4200).error) {
  console.log(isPort(4200).value); //Logs undefined
  console.log(isPort(4200).message);  //The target argument 4200 is not a string.
}
```

To see what types of errors can occur see the [Typedoc](https://fireflysemantics.github.io/validatorts/) for the API being used.

For more details on the error handling design and approach see [Typescript Exception Free Function Error Handling](https://developer.fireflysemantics.com/tasks/tasks--typescript--typescript-exception-free-error-handling).


### Result API

Each `validator` and `sanitizer` returns a `Result` instance with this interface:

```
/**
 * The result of validation and sanitation calls.
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

## Build ValidatorTS
From the project root run `npm run b`

## Running unit tests

Run the Jest Tests for ValidatorTS

`npm t`

## ValidatorTS Workspace    

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Generate Typedoc 

`npm run doc`

Typedoc will be contained in the `doc` folder of the root directory.


## Supported Package Formats

The library is built with the Angular Package Format.  It therefore supports all these package formats (As can be seen in the provided `package.json`) and has integrated typescript definitions:

- "main": "bundles/fireflysemantics-validatorts.umd.js",
-  "module": "fesm5/fireflysemantics-validatorts.js",
-  "es2015": "fesm2015/fireflysemantics-validatorts.js",
-  "esm5": "esm5/fireflysemantics-validatorts.js",
-  "esm2015": "esm2015/fireflysemantics-validatorts.js",
-  "fesm5": "fesm5/fireflysemantics-validatorts.js",
-  "fesm2015": "fesm2015/fireflysemantics-validatorts.js",
-  "typings": "fireflysemantics-validatorts.d.ts",

