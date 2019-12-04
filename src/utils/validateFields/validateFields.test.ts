import { doValidation } from './index';

describe('Tests for the validate fields helper function', () => {
  it('should throw an error when an empty string is passed as an argument to the function', () => {
    expect(doValidation('', {})).toEqual('The field cannot be empty');
  });

  it('should throw an error when invalid data is passed as an argument to the function', () => {
    expect(doValidation('........', {})).toEqual(
      'Field must start and end with a letter, only contain letters, non-consecutive fullstops, hyphens, spaces and apostrophes');
  });

  it('should throw an error when a number is required but a non numeric value was provided', () => {
    expect(doValidation('Almond', { mustBeInteger: true }))
      .toEqual(`Input must be an integer`);
  });

  it('should throw an error when the provided number is less than the set minimum allowable', () => {
    expect(doValidation(1, { mustBeInteger: true, minValue: 10 }))
      .toEqual(`Supply a number greater or equal to 10`);
  });

  it('should throw an error when the provided number is greater than the set maximum allowable', () => {
    expect(doValidation('15', { mustBeInteger: true, minValue: 1, maxValue: 12 }))
      .toEqual(`Supply a number less or equal to 12`);
  });

  it('should throw an error when number less than 0 is passed as an argument to the function', () => {
    expect(doValidation('-6', { mustBeInteger: true, minValue: 0 }))
      .toEqual(`Supply a number greater or equal to 0`);
  });

  it('should throw an error when a number is passed as an argument when mustBeString is set to true', () => {
    expect(doValidation(15, { mustBeString: true }))
      .toEqual(`Input must contain letters`);
  });
});
