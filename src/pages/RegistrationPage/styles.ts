import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const useRegistrationPageStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export  const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: '#B27D00',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderWidth: 1,
      borderLeftWidth: 3,
      padding: '2px !important', // override inline-style
    },
  },
})(TextField);
