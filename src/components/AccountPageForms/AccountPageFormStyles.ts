import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { dangerColor, defaultFont, primaryColor, secondaryColor } from '../../assets/tss/common';

export const useAccountPageStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: '100vh',
    margin: 0,
  },
  image: {
    backgroundImage: 'url(https://res.cloudinary.com/almondgreen/image/upload/v1579011465/Butternut/ice-cone_dkjczf.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: primaryColor,
    // backgroundColor:
    //    theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: secondaryColor,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: primaryColor,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // width: 200,
    borderColor: primaryColor,
  },
  margin: {
    margin: theme.spacing(1),
  },
  errorHelper: {
    color: dangerColor,
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
