/**
 * Converts a string to camelCase. This string could be a sentence.
 *
 * @param {string} str
 *
 * @returns {string} camelCased string
 */
const camelCase = (str: string) => {
  return str
    .replace(/\s(.)/g, value => value.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, value => value.toLowerCase());
};

export default camelCase;
