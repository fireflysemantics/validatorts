export interface StringKeyRegEx {
  [key: string]: RegExp
}

export interface StringKeyString {
  [key: string]: string
}

export interface StringKeyNumber {
  [key: string]: number
}

export enum Types {
  NUMBER = 'number',
  BOOLEAN = 'boolean'
}