import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles }  from '@material-ui/core/styles'; 

import HeaderBar from './HeaderBar';
import SideBar from './SideBar';
import MainView from './MainView';

const theme = createMuiTheme({
  type: 'dark',
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  root: {
    display: 'flex'
  }
})

class App extends React.Component {
  render() {
    const { classes }  = this.props; 
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <HeaderBar />
          <SideBar />
          <MainView />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App);