import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll'
import '../Toogle/Toogle.css'
import { useContext } from "react";
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from "../../Context";


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['']
// ['Home','Services','Experience','Portfolio','Testimonials','Contact'];

export default function DrawerAppBar(props: Props) {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = () => {
    theme.dispatch({ type: 'toogle' });
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}>
      <Typography className='mblname' variant="h6" sx={{ my: 2 }}>
        Faizan
      </Typography>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
        style={{
          backgroundColor: "orange",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Faizan

          </Typography>
          <span className="toggle"
            style={{ display: 'flex' }}
            onClick={handleClick} >
            <Moon />
            <Sun />
            <span className="t-button"
              style={darkMode ? { left: '4px' } : { right: '2px' }}
            >
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link spy={true} to='home' smooth={true} activeClass='activeClass'>
                  Home
                </Link>
                &nbsp;&nbsp;&nbsp;

                <Link spy={true} to='Services' smooth={true}>
                  Services
                </Link>
                &nbsp;&nbsp;&nbsp;

                <Link spy={true} to='Experience' smooth={true}>
                  Experience
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link spy={true} to='Portfolio' smooth={true}>
                  Portfolio
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link spy={true} to='Testimonials' smooth={true}>
                  Testimonials
                </Link>
                &nbsp;&nbsp;&nbsp;

                <Link spy={true} to='Contact' smooth={true}>
                  <button className="button n-button">
                    Contact
                  </button>
                </Link>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}

          <div className='mblview'
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: '1rem',
              fontSize: '11rem',
              fontWeight: '600',
            }}>
            <span className='mblcrcle' >
              <Link spy={true} to='home' smooth={true} activeClass='activeClass'>
                Home
              </Link></span>

            <span className='mblcrcle' >
              <Link spy={true} to='Services' smooth={true}>
                Services
              </Link> </span>

            <span className='mblcrcle' >
              <Link spy={true} to='Experience' smooth={true}>
                Experience
              </Link>
            </span>

            <span className='mblcrcle' >
              <Link spy={true} to='Portfolio' smooth={true}>
                Portfolio
              </Link>
            </span>

            <span className='mblcrcle' >
              <Link spy={true} to='Testimonials' smooth={true}>
                Testimonials
              </Link>
            </span>

            <span className='mblcrcle' >
              <Link spy={true} to='Contact' smooth={true}>
                Contact
              </Link>
            </span>
          </div>
        </Drawer>
      </Box>

    </Box>
  );
}