import { isURLPathsEqual } from "./isURLPathsEqual";

let urlA = "http://example.com/aa/bb/"
let urlB = "http://example.com/"
let urlC = "http://example.com"

it(`should be true`, () => {
    expect(isURLPathsEqual(urlA, "/aa/bb/").value).toBeTruthy();
    expect(isURLPathsEqual(urlB, "/").value).toBeTruthy();
    expect(isURLPathsEqual(urlC, "/").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isURLPathsEqual(urlA, "/aa/bb/cc").value).toBeFalsy();
    expect(isURLPathsEqual(urlC, "").value).toBeFalsy();
  })