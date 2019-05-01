const validateEmail = require('./email');

test('rslowe@ucsc.edu', () => {
  expect(validateEmail('rslowe@ucsc.edu')).toBeTruthy();
});

test('sluggy@gmail.com', () => {
  expect(validateEmail('sluggy@gmail.com')).toBeTruthy();
});

test('safelock@users.noreply.github.com', () => {
  expect(validateEmail('safelock@users.noreply.github.com')).toBeTruthy();
});

test('corp.relations@internal', () => {
  expect(validateEmail('corp.relations@internal')).toBeFalsy();
});

test('rlowe-cis41a@voyager.deanza.edu', () => {
  expect(validateEmail('rlowe-cis41a@voyager.deanza.edu')).toBeTruthy();
});

test('@.', () => {
  expect(validateEmail('@.')).toBeFalsy();
});

test('@.@', () => {
  expect(validateEmail('@.@')).toBeFalsy();
});

test('crap@fuckeddomain..nxtld', () => {
  expect(validateEmail('crap@fuckeddomain..nxtld')).toBeFalsy();
});
