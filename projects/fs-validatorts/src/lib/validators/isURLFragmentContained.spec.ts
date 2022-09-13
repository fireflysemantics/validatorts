import { isURLFragmentContained } from './isURLFragmentContained';

let urlA = 'http://example.com/aa/bb/';
let urlD = 'http://example.com/aa/bb#fragment';
let urlE = 'http://example.com/aa/bb?a=1;b=2&c=3';

it(`should be true`, () => {
  expect(isURLFragmentContained(urlA, '').value).toBeTruthy();
  expect(isURLFragmentContained(urlE, '').value).toBeTruthy();
  expect(isURLFragmentContained(urlD, 'fragment').value).toBeTruthy();
});
it(`should be false`, () => {
  expect(isURLFragmentContained(urlA, '/').value).toBeFalsy();
  expect(isURLFragmentContained(urlA, '/dd').value).toBeFalsy();
});
