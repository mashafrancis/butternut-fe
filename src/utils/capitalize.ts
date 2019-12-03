/**
 * This function capitalizes a paragraph
 *
 * A new sentence in this context is a sentence that exists in a paragraph
 * and comes after the symbols: . ? !
 *
 * An uncapitalized sentence is a sentence whose first letter is in lowercase
 *
 * @param {string} paragraph e.g. `success. user has been given Full access.`
 *
 * @returns {string} e.g. `Success. User has been given full access.`
 */
const capitalize = (paragraph) => {
  const lowerCaseParagraph = paragraph.toLowerCase();
  const uncapitalizedNewSentencePattern = /([!?.]\s+)([a-z])/g; // eg . r
  const paragraphWithCapitalizedSentence = lowerCaseParagraph.replace(
    uncapitalizedNewSentencePattern,
    (match, symbolWithSpace, firstLetter) => (symbolWithSpace + firstLetter.toUpperCase())
  );
  const capitalizedParagraph =
    paragraphWithCapitalizedSentence.charAt(0).toUpperCase() + paragraphWithCapitalizedSentence.substring(1);

  return capitalizedParagraph;
};

export default capitalize;
