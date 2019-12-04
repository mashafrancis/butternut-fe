import { doValidation } from '@utils/validateFields';

export const validationConfig = {
  username: [
    {
      isValid: (value: string) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Username field cannot be empty',
    },
    {
      isValid: value => !(doValidation(value, { mustBeString: true })),
      message: 'Username must contain at least two letters',
    },
    {
      isValid: (value: string) => value.trim().length > 4 && /^[\w+\s-!$%&*()\[\]:";'?,.\/]{5,}/.test(value),
      message: 'Username cannot be lesser than 5 characters',
    },
    {
      isValid: (value: string) => value.trim().length <= 25 && /^[\w+\s-!$%&*()\[\]:";'?,.\/]{1,25}/.test(value),
      message: 'Username cannot be greater than 25 characters',
    },
  ],
  email: [
    {
      isValid: (value: string) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Email field cannot be empty',
    },
    {
      isValid: (value: string) => /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/.test(value),
      message: 'Please enter a valid email address',
    },
  ],
  password: [
    {
      isValid: (value: string) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Password field cannot be empty',
    },
    {
      isValid: value => !(doValidation(value, { mustBeString: true })),
      message: 'Password must contain letters',
    },
    {
      isValid: (value: string) => value.trim().length >= 7 &&
        /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,})/.test(value),
      message: 'Password must have at least 7 character with at least one letter and a number',
    },
  ],
  confirmPassword: [
    {
      isValid: (value: string) => !(/^\s+$|^$|^undefined$/.test(value)),
      message: 'Kindly confirm your password',
    },
  ],
};
