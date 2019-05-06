import React from 'react';
import { Drawer } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAlt from '@material-ui/icons/ListAlt';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Ballot from '@material-ui/icons/Ballot';
import Widgets from '@material-ui/icons/Widgets';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar
});

function SideBar(props) {
  const { classes } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText>TODO</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText>EXPENSE</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Ballot />
          </ListItemIcon>
          <ListItemText>BLOG</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Widgets />
          </ListItemIcon>
          <ListItemText>ABOUT</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);