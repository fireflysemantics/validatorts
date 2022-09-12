import { TestData } from "../types/TestData";
import { isString } from "./isString";


describe("isString", () => {
    it("should return true for string instances", () => {
      expect(isString(new Object('pitythefoo')).value).toBeTruthy();
      expect(isString('pitythefoo').value).toBeTruthy();
    });
    it("should return false for non String instances", () => {
      expect(isString({}).value).toBeFalsy();
      expect(isString([]).value).toBeFalsy();
      expect(isString(6).value).toBeFalsy();
      expect(isString(undefined).value).toBeFalsy();
      expect(isString(null).value).toBeFalsy();
      expect(isString(NaN).value).toBeFalsy();
      expect(isString(Infinity).value).toBeFalsy();
      expect(isString(new Number(5)).value).toBeFalsy();
      expect(isString(true).value).toBeFalsy();
      expect(isString(true).value).toBeFalsy();
      expect(isString(false).value).toBeFalsy();
      expect(isString(()=>{}).value).toBeFalsy();
      expect(isString(/x/g).value).toBeFalsy();
      expect(isString(new RegExp('c', 'g')).value).toBeFalsy();
      expect(isString(new Date()).value).toBeFalsy();
    });
  });