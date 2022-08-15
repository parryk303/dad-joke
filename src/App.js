import '@fontsource/roboto';
import CloseIcon from '@mui/icons-material/Close';
import {
  Collapse,
  Alert,
  IconButton,
  Container,
  CssBaseline,
  Box,
} from '@mui/material';
import './styles/App.css';
import './styles/index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Bar from './components/Bar';
import Interface from './components/Interface';

const light = {
  palette: {
    mode: 'light',
  },
};

const dark = {
  palette: {
    mode: 'dark',
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [open, setOpen] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const changeTerminal = () => {
    setTerminal(!terminal);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
        <Bar isDarkTheme={isDarkTheme} changeTheme={changeTheme} terminal={terminal} changeTerminal={changeTerminal} />
        <CssBaseline />
        <Container id='contain' sx={{ display: 'grid', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', marginTop: '4%', justifyContent: 'center' }}>
            <Collapse in={open}>
              <Alert id='alert' severity='info'
                action={
                  <IconButton
                    aria-label='close'
                    color='inherit'
                    size='small'
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize='inherit' />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Please only use these jokes unless you are a real Dad, it could be dangerous if you do not know the "Dad Code".
                Thank you!
              </Alert>
            </Collapse>
            {terminal && <Interface />}
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
};

export default App;
