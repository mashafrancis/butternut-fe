// interfaces
import { ValidationObject } from 'src/shared.interfaces';

/**
 * Test a value against a predefined validation config
 *
 * @param {*} value Value to be validated
 * @param {ValidationObject} config A validator object
 *
 * @returns {String} Error message
 */
export const applyValidation = (value: any, config: ValidationObject[]) => {
  let error = '';

  for (let i = 0; i < config.length; i += 1) {
    const validator = config[i];

    if (!validator.isValid(value)) {
      error = validator.message;
      break;
    }
  }

  return error;
};
