export interface AccountPageFormProps {
}

export interface AccountPageFormState {
  fields: {
    [key: string]: string | number | any
  };
  isLoading: boolean;
  isValid: boolean;
  focused: boolean;
  errors: {
    [key: string]: string
  };
  showPassword?: boolean;
  showConfirmPassword?: boolean;
  password?: string;
  confirmPassword?: string;
  email?: string;
}
