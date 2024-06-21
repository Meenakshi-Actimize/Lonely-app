import Imports from '../Import/Import';
import { auth } from '../Firebase';

function Navbarcomp() {
    const pages = [
        { label: 'Destinations', path: '/signup' },
        { label: 'Planning', path: '/planning' },
        { label: 'Inspiration', path: '/foodanddrink' },
        { label: 'Shop', path: '/shop' },
    ];

    const [anchorElNav, setAnchorElNav] = Imports.React.useState(null);
    const [anchorElUser, setAnchorElUser] = Imports.React.useState(null);
    const navigate = Imports.useNavigate();
    const profile = localStorage.getItem('photo');
    const token = localStorage.getItem('accessToken');

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (path) => {
        setAnchorElNav(null);
        if (path) navigate(path);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        Imports.signOut(auth).then(() => {
            localStorage.clear();
            navigate('/flash');
            console.log("no token", token);
        }).catch((error) => {
            console.log('error');
        });
    };

    return (
        <Imports.Grid container columns={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Imports.AppBar position="static" sx={{ backgroundColor: 'white', height: '65px', color: '#212121' }}>
                <Imports.Container maxWidth="xl">
                    <Imports.Toolbar disableGutters>
                        <Imports.Grid item xs={2} sx={{ display: 'flex' }}>
                            <img src="./images/lonely-planet9056.logowik.com.jpg" alt="" width="120%" onClick={() => navigate('/')} />
                        </Imports.Grid>
                        <Imports.Grid item xs={7} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Imports.IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ paddingLeft: { sm: '273px', xs: '60px' } }}
                            >
                                <Imports.MenuIcon />
                            </Imports.IconButton>
                            <Imports.Menu
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
                                onClose={() => handleCloseNavMenu()}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <Imports.MenuItem key={page.label} onClick={() => handleCloseNavMenu(page.path)}>
                                        <Imports.Typography textAlign="center">{page.label}</Imports.Typography>
                                    </Imports.MenuItem>
                                ))}
                            </Imports.Menu>
                        </Imports.Grid>
                        {pages.map((page) => (
                            <Imports.Button
                                key={page.label}
                                onClick={() => handleCloseNavMenu(page.path)}
                                sx={{ display: { xs: 'none', md: 'block' }, color: 'black', paddingLeft: '35px', marginLeft: '30px', textTransform: 'none', fontSize: '16px' }}
                            >
                                <strong>{page.label}</strong>
                            </Imports.Button>
                        ))}
                        <Imports.Grid
                            container
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <Imports.SearchOutlinedIcon />
                            <Imports.Typography sx={{ display: { xs: 'none', md: 'block' } }}>Search</Imports.Typography>
                            <Imports.BookmarkBorderIcon />
                            <Imports.Typography sx={{ display: { xs: 'none', md: 'block' } }}>Saves</Imports.Typography>
                            {token ? (
                                <>
                                    <Imports.IconButton onClick={handleOpenUserMenu}>
                                        {profile === null ? (
                                            <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="User Profile" width="40px" />
                                        ) : (
                                            <Imports.Avatar src={profile} />
                                        )}
                                    </Imports.IconButton>
                                    <Imports.Menu
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
                                        <Imports.MenuItem onClick={handleLogOut}>Logout</Imports.MenuItem>
                                    </Imports.Menu>
                                </>
                            ) : (
                                <Imports.Button
                                    onClick={() => navigate('/signup')}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: "#0057D9",
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#004bb5'
                                        },
                                        borderRadius: '16px',
                                    }}
                                >
                                    Sign in
                                </Imports.Button>
                            )}
                        </Imports.Grid>
                    </Imports.Toolbar>
                </Imports.Container>
            </Imports.AppBar>
        </Imports.Grid>
    );
}

export default Navbarcomp;
