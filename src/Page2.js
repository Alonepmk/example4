import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
    height: '85vh',
  },
  papermr: {
    height: '85vh',
    marginRight: 5,
  },
}));

function Page2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.papert} elevation={5}>xs=12</Paper>
        </Grid>
        <Grid item xs={3} direction="row" >
          <Paper className={classes.paperml} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} direction="row" >
          <Paper className={classes.paperm} elevation={20}>xs=6</Paper>
        </Grid>
        <Grid item xs={3} direction="row">
          <Paper className={classes.papermr} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paperb} elevation={5}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page2;


