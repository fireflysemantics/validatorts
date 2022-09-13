import { isURLPathEqual } from "./isURLPathEqual";

let urlA = "http://example.com/aa/bb/"
let urlB = "http://example.com/"
let urlC = "http://example.com"
let urlD = 'http://example.com/aa/bb#fragment';
let urlE = 'http://example.com/aa/bb?a=1;b=2&c=3';


it(`should be true`, () => {
    expect(isURLPathEqual(urlA, "/aa/bb/").value).toBeTruthy();
    expect(isURLPathEqual(urlB, "/").value).toBeTruthy();
    expect(isURLPathEqual(urlC, "/").value).toBeTruthy();
    expect(isURLPathEqual(urlD, "/aa/bb").value).toBeTruthy();
    expect(isURLPathEqual(urlE, "/aa/bb").value).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isURLPathEqual(urlA, "/aa/bb/cc").value).toBeFalsy();
    expect(isURLPathEqual(urlC, "").value).toBeFalsy();
  })