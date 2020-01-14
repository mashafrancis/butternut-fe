import { ValidationArguments } from './interfaces';

export const doValidation = (value, doValidationArguments: ValidationArguments) => {
  const validator = /^[a-zA-Z0-9]+(([' .-:";'?,.!\-\()&][a-zA-Z0-9])?([a-zA-Z0-9' .-:";'?,.!\-\()&#]))*.$/;

  if (!value) {
    return 'The field cannot be empty';
  }

  if (doValidationArguments.mustBeInteger) {
    const numberValue = parseInt(value, 10);
    const trimmedValue = value.toString().replace(/\s/g, '');

    if (Number(trimmedValue) % 1 !== 0 || trimmedValue.indexOf('.') >= 0) {
      return `Input must be an integer`;
    }

    if (numberValue < doValidationArguments.minValue) {
      return `Supply a number greater or equal to ${doValidationArguments.minValue}`;
    }

    if (numberValue > doValidationArguments.maxValue) {
      return `Supply a number less or equal to ${doValidationArguments.maxValue}`;
    }
  }

  if (doValidationArguments.mustBeString) {
    const trimmedValue = value.toString().replace(/\s/g, '');
    const isInteger = Number.isInteger(Number(trimmedValue));

    if (isInteger) {
      return `Input must contain letters`;
    }
  }

  if (isNaN(value)) {
    const trimmedValue = value.toString().replace(/\s/g, '');
    const isValid = validator.test(trimmedValue);

    if (!isValid) {
      return `Field must start and end with a letter, only contain letters, non-consecutive fullstops, hyphens, spaces and apostrophes`;
    }
  }
};
