import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ToolBar from '@material-ui/core/Toolbar';
import { AppBar, Button, Typography } from '@material-ui/core';

const styles = theme => ({
  // root: {
  //   flexGrow: 1
  // },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

function HeaderBar(props) {
  const { classes } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <ToolBar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </ToolBar>
    </AppBar>
  );
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HeaderBar);