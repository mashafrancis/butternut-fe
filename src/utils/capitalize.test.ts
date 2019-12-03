import capitalize from './capitalize';

describe('The capitalize function', () => {
  it('should capitalize a paragraph', () => {
    const paragraph = 'success. user has Been given FULL access.';
    const capitalizedParagraph = capitalize(paragraph);

    expect(capitalizedParagraph).toEqual('Success. User has been given full access.');
  });
});
