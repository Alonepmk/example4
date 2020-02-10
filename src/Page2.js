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
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  paper2: {
    height: '85vh',
    marginRight: 5,
    marginLeft: 5,
  },
}));

function Page2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{marginTop:5,marginLeft:5,marginRight:5}}>
          <Paper className={classes.paper} elevation={5}>xs=12</Paper>
        </Grid>
        <Grid item xs={3} direction="row" >
          <Paper className={classes.paper2} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} direction="row" >
          <Paper className={classes.paper2} elevation={20}>xs=6</Paper>
        </Grid>
        <Grid item xs={3} direction="row">
          <Paper className={classes.paper2} elevation={3}>xs=3</Paper>
        </Grid>
        <Grid item xs={12} style={{marginLeft:5,marginRight:5}}>
          <Paper className={classes.paper} elevation={5}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page2;


