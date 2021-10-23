import { MessageFunctionType } from "./MessageFunctionType";

/**
 * The result of the calls.
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