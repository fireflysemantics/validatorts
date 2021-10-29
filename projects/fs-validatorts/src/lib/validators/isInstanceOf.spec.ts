import { isInstanceOf } from "./isInstanceOf";

class InstanceOfCheck {

}

const test = new InstanceOfCheck();

describe("isInstanceOf", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isInstanceOf(test, InstanceOfCheck).value).toBeTruthy();
    expect(isInstanceOf(new Date(0), Date).value).toBeTruthy();
  });
  it("should return false for non valid byte length strings", () => {
    expect(isInstanceOf('abc', InstanceOfCheck).value).toBeFalsy();
  });
});