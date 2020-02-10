import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';
import Image from './wp3323231.jpg';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    height: '99vh',
    overflowX: 'hidden',
  },
  papert: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop:5,
    marginLeft:5,
    marginRight:5
    
  },
  paperb: {
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft:5,
    marginRight:5,
  },
  paperml: {
    height: '85vh',
    marginLeft: 5,
  },
  paperm: {
    height: '81vh',
    width: '90%',
    marginTop: 5,
  },
  papermr: {
    height: '85vh',
    marginRight: 5,
  },
  boxtext: {
    padding: 20,
  }
}));

const styles = {
  paperContainer: {
      border: '5px',
      borderStyle: 'solid',
      borderColor: 'grey',
      backgroundImage: `url(${Image})`,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '5px',
  }
};



function Page2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.papert} elevation={20}>xs=12</Paper>
        </Grid>
        <Grid item xs={3} direction="row" >
          <Paper className={classes.paperml} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} direction="row" style={styles.paperContainer}>
          <Paper className={classes.paperm} elevation={20}>
              Hello
          </Paper>

        </Grid>
        <Grid item xs={3} direction="row">
          <Paper className={classes.papermr} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperb} elevation={20}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page2;


