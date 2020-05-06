import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './Theme';
import Header from './Header'
import './App.css';

function App() {
  return (
    <div className="App">
     <MuiThemeProvider theme ={ Theme }>
      <Header />
    </MuiThemeProvider>
    </div>
  );
}

export default App;
