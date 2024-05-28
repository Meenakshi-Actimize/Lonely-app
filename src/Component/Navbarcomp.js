import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import { auth } from '../Firebase';

const pages = ['Destinations', 'Planning', 'Inspiration', 'Shop'];

function Navbarcomp() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const profile =  localStorage.getItem('photo');
    // const profilefb = localStorage.getItem('photofb')
    // console.log('fb photo', profilefb);
    const token = localStorage.getItem('accessToken')
    // const token = localStorage.getItem('accessToken', token);
    // console.log('hi token', token);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            navigate('/flash');
            token = '';
            console.log("no token", token);
        }).catch((error) => {
            console.log('error')
        });
    }

    return (
        <Grid container columns={12} sx={{ display: 'flex', containerType: 'inline-size', justifyContent: 'space-between', alignItems: 'center' }}>

            <AppBar position="static" sx={{ backgroundColor: 'white', height: '65px', color: '#212121' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Grid item xs={2} sx={{ display: 'flex' }}>
                            <img  src="./images/lonely-planet9056.logowik.com.jpg" alt="" width="120%" />
                        </Grid>
                        <Grid item xs={7} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{paddingLeft:{sm:'273px', xs:'60px'}}}

                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>

                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ display: { xs: 'none', md: 'block' }, color: 'black', paddingLeft: '35px', marginLeft: '30px', textTransform: 'none', fontSize: '16px' }}
                            >
                                <strong>{page}</strong>
                            </Button>
                        ))}
                        <Grid
                            container
                            item
                            xs={12} // Full width on all screen sizes
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end', // Align items to the right
                                alignItems: 'center', // Align items vertically centered
                                gap: '10px', // Spacing between items
                            }}
                        >
                            <SearchOutlinedIcon />
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Search</Typography>
                            <BookmarkBorderIcon />
                            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Saves</Typography>
                            {token ? (
                                <>
                                 {profile === null ? (
                                    <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="User Profile" width="5%"/>
                                        ) :( <Avatar src={profile} />
                                        )}
                                {/* <Avatar src={profile} /> */}
                                <Button onClick={handleLogOut} sx={{ textTransform: 'none' }}>
                                 Logout
                             </Button>
                                </>
                                 
                            ) : (
                                <>
                                <Button onClick={() => navigate('/signup')}sx={{textTransform: 'none', backgroundColor: "#0057D9",color: 'white', '&:hover': {
                                backgroundColor: '#004bb5'},
                                         borderRadius: '16px',
                                     }}
                                 >
                                     Sign in
                                 </Button>
                                </>
                            )}
                        </Grid>



                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    );
}
export default Navbarcomp;

