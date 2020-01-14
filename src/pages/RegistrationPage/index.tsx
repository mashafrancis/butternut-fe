import * as React from 'react';

// third party
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// components
import AuthHeader from '@components/AuthHeader';

// styles
import { useRegistrationPageStyles } from './styles';

// helpers
import { validationConfig } from '@utils/resources';
import { applyValidation } from '@utils/validationUtils';

// interfaces
import { RegistrationPageProps, RegistrationPageState } from './interfaces';

const RegistrationPage: React.FunctionComponent<RegistrationPageProps> = (props) => {
  const [state, setState] = React.useState<RegistrationPageState>({
    fields: {},
    isLoading: false,
    isValid: true,
    focused: false,
    errors: {},
  });

  const handleInputChange = (event) => {
    const { name: field, value } = event.target;

    setState({ ...state,
      fields: {
        ...state,
        [field]: value,
      },
    });
  };

  const validateSingleField = (event, config = validationConfig) => {
    const field = event.target.name;
    const value = state.fields[field];
    const error = applyValidation(value, config[field]);

    this.setFieldError(field, error);
  };

  const classes = useRegistrationPageStyles(props);
  return (
    <div className="authenticate">
      <AuthHeader
        title="Add new account"
      />
      <form className={classes.container} noValidate>
        <Container maxWidth="sm">
          <Grid item xs={12}>
            <TextField
              label="First Name"
              id="1"
              type="text"
              style={{ margin: 8 }}
              helperText={state.errors.firstName}
              fullWidth
              value={state.fields.firstName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              id="1"
              type="text"
              style={{ margin: 8 }}
              helperText={state.errors.lastName}
              fullWidth
              value={state.fields.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              color="inherit"
            >
              CONTINUE
            </Button>
          </Grid>
           <Grid item xs={6}>
          </Grid>
        </Container>
      </form>
    </div>
  );
};

export default RegistrationPage;
