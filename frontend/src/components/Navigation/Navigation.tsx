import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';


interface MenuOptions {
  title: string,
  to: string
}

const userMenuOptions: Array<MenuOptions> = [
  {title: "Profile", to: "/profile"},
  {title: "Dashboard", to: "/profile/dashboard"},
  {title: "Logout", to: "/logout"},
]

const navMenuOptions: Array<MenuOptions> = [
  {title: "My Projects", to: "/my/projects"},
]

const NavBar = () => {
  // {isLoggedIn=true}
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [isLogged, setIsLogged] = React.useState<Boolean>(false)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    handleCloseUserMenu()
    setIsLogged(!isLogged)
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Process Improvement eXplorer
            </Typography>
          </Box>
          {!isLogged &&
              <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                  <Button
                      key={"login"}
                      // to={"/login"}
                      // component={Link}
                      onClick={handleLoginClick}
                      sx={{my: 2, color: 'white', display: 'block'}}
                  >
                    {"Login"}
                  </Button>
              </Box>
          }
          {isLogged &&
              <Box sx={{flexGrow: 0, display: {xs: 'none', md: 'flex'}}}>
                {navMenuOptions.map(({title, to}) => (
                  <Button
                    key={title}
                    to={to}
                    component={Link}
                    sx={{mr: 5, my: 2, color: 'white', display: 'block'}}
                  >
                    {title}
                  </Button>
                ))}
                  <IconButton onClick={handleOpenUserMenu} sx={{p: 0, mr: 4}}>
                      <Avatar alt="Remy Sharp" src="/src/assets/2.jpg"/>
                  </IconButton>
                  <Menu
                      sx={{mt: '45px'}}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                  >
                    {userMenuOptions.map(({title, to}) => (
                          <MenuItem component={Link} key={title} to={to}>
                            <Typography textAlign="center">{title}</Typography>
                          </MenuItem>
                    ))}
                      {/*<MenuItem key={"Logout"} onClick={handleLoginClick}>*/}
                      {/*    <Typography textAlign="center">{"Logout"}</Typography>*/}
                      {/*</MenuItem>*/}
                  </Menu>
              </Box>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;