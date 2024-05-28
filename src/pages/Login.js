import * as React from 'react';
import { Grid, Container, Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../Firebase";

// //for toaste messages 
// import { ToastContainer, toast, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';







function Signup() {
    // const navigate = useNavigate();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isSignIn, setIsSignIn] = useState(false);
    const [firstname, setName] = useState('');
    const [emailid, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const changeHandleName = (e) => {
        const getName = e.target.value;
        setName(getName);
    }

    const changeHandleEmail = (e) => {
        const getEmail = e.target.value;
        setEmail(getEmail);
    }

    const changeHandlePassword = (e) => {
        const getPassword = e.target.value;
        setPassword(getPassword);
    }


    const handleButtonClick = async (e) => {
        setIsSignIn(true)
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

    }

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!firstname.trim()) {
            errors.name = "Please enter name";
            isValid = false;
        } else if (firstname.trim().length < 3) {
            errors.name = "give more than 3 letters";
            isValid = false;
        }

        if (!emailid.trim()) {
            errors.email = "Email not given";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailid)) {
            errors.email = "Email contains @ symbol";
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = "Password not given";
            isValid = false;
        } else if (password.trim().length < 6) {
            errors.password = "It must be at least 6 characters";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };



    const toggleSignInMode = () => {
        setIsSignIn((prevIsSignIn) => !prevIsSignIn);

    };



    return (
        <>

            <Container maxWidth="xl" sx={{ backgroundColor: { lg: '#E0EEFA', md: '#E0EEFA', sm: '#E0EEFA', xs: 'white' }, height: { lg: '300vh', md: '300vh', sm: '150vh' }, width: '100%' }}>
                <Grid container >
                    <Grid item xs={12} sm={12} md={8} lg={8} sx={{ textAlign: 'left', paddingTop: '40px', paddingLeft: '100px', width: "100%", display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' } }}>
                        <Grid >
                            <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Lonely_Planet.svg/2560px-Lonely_Planet.svg.png'} alt="" width="16%" />
                        </Grid>
                        <Grid >
                            <Typography variant="h3" sx={{ fontFamily: 'Arial sans-serif', padding: '180px 160px 20px 0px', fontWeight: '600', lineHeight: '150%', fontSize: { xs: '25px', sm: '30px' } }}>The trip of your dreams starts<br /> with Lonely Planet</Typography>
                            <Typography sx={{ fontWeight: '400', paddingLeft: '10px', lineHeight: '150%', verticalAlign: 'baseline', fontSize: 'calc(10px + 1vw)' }}>Covering hundreds of destinations and countless<br /> experiences, Lonely Planet is your guide for traveling<br /> better and smarter.</Typography>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: 'flex', flexDirection: 'column', paddingTop: { lg: '80px', md: '80px', sm: '80px', xs: '0px' } }}>
                        <Grid container>
                            <Box sx={{ borderRadius: '16px', width: { lg: '75%', md: '100%', sm: '65%', xs: '100%' }, margin: 'auto', backgroundColor: 'white', height: '810px' }}>
                                <Typography variant='h6' sx={{ margin: 'auto', marginTop: '55px' }}>Welcome to Lonely Planet</Typography>
                                <Typography sx={{ margin: '16px', fontSize: '12px' }}>SignUp to continue</Typography>
                                <Grid sx={{ width: '80%', margin: 'auto', height: '590px' }}>
                                    <Typography sx={{ border: '1px solid gray', borderRadius: '22px', height: '43px', fontSize: '14px', color: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" width="9%" /> &nbsp;&nbsp;&nbsp;<Link href="#" underline="none">Continue with Google</Link>
                                    </Typography>
                                    <Typography sx={{ border: '1px solid gray', borderRadius: '22px', height: '43px', marginTop: '10px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="" width="6%" /> &nbsp;&nbsp;&nbsp;<Link href="#" underline="none">Continue with Facebook</Link>
                                    </Typography>
                                    <Typography sx={{ color: '#bdbdbd', margin: '20px 0px 20px 0px' }}>
                                        ----------------------- <span style={{ fontSize: '10px' }}> OR </span>----------------------
                                    </Typography>
                                    <TextField id="outlined-basic" label="Email address*" variant="outlined" onChange={changeHandleEmail} error={!!errors.email} helperText={errors.email} sx={{ width: '100%', marginTop: '40px', marginBottom: '8px' }} />
                                    <TextField id="outlined-basic" label="Password*" variant="outlined" onChange={changeHandlePassword} error={!!errors.password} helperText={errors.password} sx={{ width: '100%', marginTop: '10px' }} />
                                    {/* <Box sx={{backgroundColor:'#F9F9F9', marginTop:'8px', justifyContent:'left', alignItems:'left'}}>
                                    <Typography sx={{backgroundColor:'', fontSize:'13px'}}><Checkbox {...label} /> I'm not a robot   </Typography>
                                    
                                    </Box> */}
                                    <Box sx={{ backgroundColor: '#F9F9F9', marginTop: '30px', justifyContent: 'left', alignItems: 'left' }}>
                                        <Typography sx={{ backgroundColor: '#E0EEFA', fontSize: '13px', textAlign: 'left' }}><Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }} />I want to receive emails about awesome travel experiences and news!</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: '8px', justifyContent: 'left', alignItems: 'left' }}>
                                        <Typography sx={{ fontSize: '12px', textAlign: 'left' }}>By creating an account, I am agreeing to Lonely Planet's <Link sx={{ color: 'blue' }}>Terms of Service</Link> and <Link sx={{ color: 'blue' }}>Privacy Policy.</Link></Typography>
                                    </Box>
                                    <Box> <Button variant="contained" onClick={handleButtonClick} sx={{ backgroundColor: '#0057D9', width: '100%', borderRadius: '20px', marginTop: '20px', textTransform: 'none', height: '45px' }}>Continue</Button>
                                       
                                        <Grid sx={{ textAlign: 'center', marginBottom: '30px' }}>
                                            <Typography sx={{ fontSize: '14px', marginTop: '12px' }}>{isSignIn ? 'Alredy have an account?' : 'Don`t have an account?'}  <span style={{ color: '#0057DA', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.875rem' }} onClick={toggleSignInMode} > {isSignIn ? 'Log in' : 'Sign Up'}</span>  </Typography>
                                        </Grid></Box>
                                </Grid>

                            </Box>

                        </Grid>


                    </Grid>



                </Grid>

            </Container>

        </>
    )
}
export default Signup;