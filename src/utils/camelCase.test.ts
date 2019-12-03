import camelCase from './camelCase';

describe('The camelCase helper function', () => {
  it('should covert a string to camel case', () => {
    expect(camelCase('Butternut is cool')).toEqual('butternutIsCool');
    expect(camelCase('Butternut Is cool')).toEqual('butternutIsCool');
    expect(camelCase('Butternut is Cool')).toEqual('butternutIsCool');
  });
});
