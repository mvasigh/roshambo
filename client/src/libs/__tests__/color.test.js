import { rgbStr } from '../color';

test('Convert RGB array to RGB string', () => {
  const rgbArr = [255, 255, 255];
  expect(rgbStr(rgbArr)).toBe('rgb(255, 255, 255)');
});
