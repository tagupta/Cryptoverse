import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import '../css/NavBar.css';
import icons from '../images/cryptocurrency.png';
import {Routes, Route, Link } from 'react-router-dom';
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
);
  
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const NavBar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
    };

    const handleDrawerClose = () => {
    setOpen(false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Cryptoverse
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                     width: drawerWidth,
                     boxSizing: 'border-box',},}}
              variant="persistent"
              anchor="left"
              open={open}>
        <DrawerHeader className='drawer-header'>
          <Avatar alt="Remy Sharp" src={icons} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
              
            </ListItem>

            <ListItem button key="Cryptocurrecies">
              <ListItemIcon>
                <MonetizationOnIcon/>
              </ListItemIcon>
              <Link to="/cryptocurrencies">
                <ListItemText primary="Cryptocurrencies" />
              </Link>
            </ListItem>

            <ListItem button key="Exchanges">
              <ListItemIcon>
                 <CurrencyExchangeIcon/>
              </ListItemIcon>
              <Link to="/exchanges">
                <ListItemText primary="Exchanges" />
              </Link>
            </ListItem>

            <ListItem button key="News">
              <ListItemIcon>
                <NewspaperIcon/>
              </ListItemIcon>
              <Link to="/news">
                <ListItemText primary="News" />
              </Link>
            </ListItem>
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <div className='routes'>
             <Routes>
                <Route exact path = "/" element={<Homepage/>}/>
                <Route path = "/exchanges" element={<Exchanges/>}/>
                <Route path = "/cryptocurrencies" element={<Cryptocurrencies/>}/>
                <Route path = "/crypto/:coinId" element={<CryptoDetails/>}/>
                <Route path = "/news" element={<News/>}/>
             </Routes>
        </div>
      </Main>
    </Box>
  );
};

export default NavBar;
