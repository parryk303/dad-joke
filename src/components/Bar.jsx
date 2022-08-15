import TerminalIcon from '@mui/icons-material/Terminal';
import LightSwitch from './LightSwitch';
import {
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
} from '@mui/material';

export default function Bar({ isDarkTheme, changeTheme, changeTerminal }) {

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar id={`${isDarkTheme ? 'navDark' : 'nav'}`} position='static'>
                <Toolbar id='tool' sx={{ justifyContent: 'space-between', padding: '1%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton id='adminButton' size='large' aria-label='Terminal' sx={{ mr: 2 }} onClick={changeTerminal}>
                            <TerminalIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography variant='h1' sx={{ fontFamily: 'Ribeye', color: 'cornflowerblue' }}>Dad Jokes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <LightSwitch sx={{ marginLeft: '10%' }} theme={isDarkTheme} onChange={changeTheme} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}