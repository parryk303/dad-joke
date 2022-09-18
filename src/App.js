import '@fontsource/roboto';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/App.css';
import './styles/index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Bar from './components/Bar';
import Test from './components/Test';
import JokeCard from './components/JokeCard';
import Interface from './components/Interface';
import Data from './jokes.json';

const light = {
  palette: {
    mode: 'light',
  },
};

const dark = {
  palette: {
    background: {
      default: 'rgb(30, 31, 41, 0.9)'
    },
    mode: 'dark',
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [open, setOpen] = useState(true);
  const [jokes, setJokes] = useState(Data.map(joke => JSON.parse(joke)));

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
          {terminal &&
            <Interface />
          }
          <Box sx={{ marginTop: '1%', width: '95vw' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                    <Test />
                  </Alert>
                </Collapse>
              </Grid>

              {jokes.map((joke, i) => (
                <Grid key={i} item lg={3} md={4} sm={6} xs={12} sx={{ height: '100%' }}>
                  <JokeCard setup={joke.setup} punchline={joke.punchline} />
                </Grid>
              )
              )}

            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  )
};

export default App;
