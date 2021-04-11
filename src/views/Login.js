import React from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  useTheme,
  Divider,
  TextField,
  Button
} from '@material-ui/core';
import Logo from '../components/Logo';
import WSIcon from '../assets/ws_logo_green.png';
import WSLogoText from '../assets/ws_text_logo.png';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    alignItems: "center",
    flexDirection: "column",
  },
  headerText: {
    margin: 0,
    lineHeight: 1
  },
  wealthsimpleConnect: {
    justifyContent: "center",
  },
  wsLogoIcon: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  wsLogoText: {
    height: 36
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: '#3D3939',
    margin: "5% 0px",
  },
  form: {
    marginTop: theme.spacing(2),
    justifyContent: "center"
  },
  formTextfield: {
    margin: `0px ${theme.spacing(1)}px`,
    '& input': {
      color: theme.palette.secondary.main,
      fontSize: 12,
      padding: theme.spacing(1.25),
      border: `solid 2px ${theme.palette.primary.main}`,
      borderRadius: 6,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.secondary.main,
    },
    '& .Mui-focused': {
      color: theme.palette.primary.main
    }
  },
  loginButton: {
    borderRadius: 10,
    color: theme.palette.secondary.main,
    fontWeight: 700,
  }
}));

const Header = (props) => {
  const classes = styles(props);

  return (
    <Grid container className={classes.header}>
      <Logo full />
      <Typography
        color="primary"
        variant="h2"
        className={classes.headerText}
        style={{ fontWeight: 700 }}
      >
        TradingReflections
      </Typography>
      <Typography
        color="secondary"
        variant="h6"
        className={classes.headerText}
      >
        Insight into your trading behaviours
      </Typography>
    </Grid>
  );
}

const WealthsimpleConnect = (props) => {
  const classes = styles(props);
  const theme = useTheme();

  return (
    <Grid container className={classes.wealthsimpleConnect}>
      <Typography
        variant="h6"
        color='secondary'
      >
        Connect with
      </Typography>
      <Grid
        item
        style={{ marginLeft: theme.spacing(2) }}
      >
        <img src={WSIcon} className={classes.wsLogoIcon} />
        <img src={WSLogoText} className={classes.wsLogoText} />
      </Grid>
    </Grid>
  );
}

const Form = (props) => {

  const classes = styles(props);

  return (
    <Grid container>
      <WealthsimpleConnect />
      <Grid container className={classes.form}> 
        <TextField
          autoFocus
          variant="outlined"
          placeholder="jane@doe.ca"
          color="primary"
          className={classes.formTextfield}
          />
        <TextField
          variant="outlined"
          type="password"
          placeholder="password"
          color="primary"
          className={classes.formTextfield}
          />
        
        <Button
          variant="contained"
          color="primary"
          className={classes.loginButton}
        >
          Login ➔
        </Button>
      </Grid>
    </Grid>
  );
}

const Login = (props) => {
  const classes = styles(props);

  return (
    <>
      <Header />
      <Divider className={classes.divider}/>
      <Form />
    </> 
  )
};

export default Login;