import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export const useRegistrationPageStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://res.cloudinary.com/almondgreen/image/upload/v1579011465/Butternut/ice-cone_dkjczf.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
       theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
