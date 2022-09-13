import { isURLPathContained } from './isURLPathContained';

let urlA = 'http://example.com/aa/bb/';
let urlB = 'http://example.com/';
let urlC = 'http://example.com';
let urlD = 'http://example.com/aa/bb#fragment';
let urlE = 'http://example.com/aa/bb?a=1;b=2&c=3';

it(`should be true`, () => {
  expect(isURLPathContained(urlA, '/aa/bb/').value).toBeTruthy();
  expect(isURLPathContained(urlA, '/aa/b').value).toBeTruthy();
  expect(isURLPathContained(urlD, '/aa/bb').value).toBeTruthy();
  expect(isURLPathContained(urlD, '/aa/b').value).toBeTruthy();
  expect(isURLPathContained(urlE, '/aa/bb').value).toBeTruthy();
  expect(isURLPathContained(urlE, '/aa/b').value).toBeTruthy();
  expect(isURLPathContained(urlB, '/').value).toBeTruthy();
  expect(isURLPathContained(urlC, '/').value).toBeTruthy();
});
it(`should be false`, () => {
  expect(isURLPathContained(urlA, '/aa/bb/cc').value).toBeFalsy();
  expect(isURLPathContained(urlA, '/dd').value).toBeFalsy();
});
