import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  type: 'dark',
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        TEST APP
      </MuiThemeProvider>
    )
  }
}

export default App;