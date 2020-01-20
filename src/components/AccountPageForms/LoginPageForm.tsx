import * as React from 'react';

// components
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';

// helpers
import { validationConfig } from '@utils/resources';
import { applyValidation } from '@utils/validationUtils';

// third party
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// styles
import { useAccountPageStyles } from './AccountPageFormStyles';

// interfaces
import { AccountPageFormProps, AccountPageFormState } from './interfaces';

export const LoginPageForm: React.FunctionComponent<AccountPageFormProps> = (props) => {
  const [state, setState] = React.useState<AccountPageFormState>({
    fields: {},
    password: '',
    email: '',
    isLoading: false,
    isValid: true,
    focused: false,
    errors: {},
    showPassword: false,
  });

  const handleInputChange = (field: keyof AccountPageFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      ...state,
      [field]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // const setFieldError = (field: string, error: string) => {
  //   setState({
  //     errors: {
  //       ...errors,
  //       [field]: error,
  //     },
  //   });
  // };

  const validateSingleField = (event, config = validationConfig) => {
    const field = event.target.name;
    const value = state.fields[field];
    const error = applyValidation(value, config[field]);

    this.setFieldError(field, error);
  };

  const classes = useAccountPageStyles(props);
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        LOGIN
      </Typography>
      <form className={classes.form} noValidate>
        <FormControl fullWidth={true} className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="text"
            value={state.email}
            required
            aria-describedby="email-helper-text"
            onChange={handleInputChange('email')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <EmailIcon/>
                </IconButton>
              </InputAdornment>
            }
          />
          {/*<FormHelperText id="email-helper-text">We'll never share your email.</FormHelperText>*/}
        </FormControl>
        <FormControl fullWidth className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type={state.showPassword ? 'text' : 'password'}
            value={state.password}
            required
            autoComplete="current-password"
            onChange={handleInputChange('password')}
            aria-describedby="password-helper-text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {state.showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
          {/*<FormHelperText id="password-helper-text">We'll never share your password.</FormHelperText>*/}
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary"/>}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to={'/register'}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to={'/register'}>
              {'Don\'t have an account? Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
