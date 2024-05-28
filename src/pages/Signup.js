import * as React from 'react';
import { Grid, Container, Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { fprovider } from '../Firebase';


//for toaste messages 
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const Signup = () => {
    const navigate = useNavigate();

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

// signup funcionality 

    const handleButtonClick = async (e) => {
        setIsSignIn(true)
        e.preventDefault();

        if (!validateForm()) {
            return;
        }





        if (isSignIn) {

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, emailid, password);
                const user = userCredential.user;
                await updateProfile(userCredential.user, {
                    displayName: firstname,
                });
                console.log('this is the user', user);
                const token = await user.getIdToken();
                localStorage.setItem('email', userCredential.user.email);
                localStorage.setItem('accessToken', token)
                console.log('this is sign in token', token);
                localStorage.setItem('displayName', userCredential.user.displayName)
                const Name = localStorage.getItem(user.displayName);

                // console.log('User created successfully:', userCredential.user);
                console.log('User display name:', Name);

                alert('Successfully Sign Up..!')
                // toast('Successfully Sign Up..!')

               
                navigate('/signup')
                setIsSignIn(false) 
                setEmail('');
                setPassword('');
                setName('');

            } catch (error) {
                console.error('Error creating user:', error.code, error.message);
                // alert('Alredy have an account Please Log in')

                toast.error('Alredy have an account Please Log in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }

        }
      




    };

    //signin functionality

    const handleButtonLogIn = async (e) => {
            
    


            try {


                const userCredential = await signInWithEmailAndPassword(auth, emailid, password)
                const user = userCredential.user;
                const token = await user.getIdToken();
                localStorage.setItem('accessToken', token);
                localStorage.setItem('email', userCredential.user.email);
                const Name = userCredential.user.displayName;
                localStorage.setItem('displayName', Name)
                localStorage.getItem('displayName', Name);
                console.log('This is the name in log in ', Name);
                console.log("this is the login token", token);

                alert('Successfully Log In..!')
                setEmail('');
                setPassword('');
                navigate('/home')
            } catch (error) {
                console.log(error, 'error occured')
                toast.info('Please Create an account First', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });


            
        }
    }
        
    
    

    

    



    const googleAccount = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("result", result);
                navigate('/home');
                const token = result.user.accessToken;
                localStorage.setItem('accessToken', token);
                localStorage.setItem('email', result.user.email);
                localStorage.setItem('photo', result.user.photoURL);
                const Name = result.user.displayName;
                localStorage.setItem('displayName', Name)
    
            })
            .catch((err) => {
                console.log(err.message, 'error generated')
            })
    }


    const signInWithFacebook = () =>{
        signInWithPopup(auth, fprovider)
        .then((re) => {
            console.log(re);
            navigate('/home');
                const token = re.user.accessToken;
                localStorage.setItem('accessToken', token);
                localStorage.setItem('email', re.user.email);
                localStorage.setItem('photofb', re.user.photoURL);
                const Name = re.user.displayName;
                localStorage.setItem('displayName', Name)
    
        })
        .catch((err) => {
            console.log(err.message,'error occured');
        })
  }
    

    // Function to check if a field is empty
    const isEmpty = (value) => {
        return value.trim() === '';
    };

    // Validate form function
    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (isEmpty(firstname)) {
            errors.name = "Please enter name";
            isValid = false;
        } else if (firstname.trim().length < 3) {
            errors.name = "Name must be at least 3 characters long";
            isValid = false;
        }

        if (isEmpty(emailid)) {
            errors.email = "Email not given";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailid)) {
            errors.email = "Invalid email format";
            isValid = false;
        }

        if (isEmpty(password)) {
            errors.password = "Password not given";
            isValid = false;
        } else if (password.trim().length < 6) {
            errors.password = "Password must be at least 6 characters long";
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
                                <Typography variant='h6' sx={{ margin: 'auto', marginTop: '55px', textAlign: 'center' }}>Welcome to Lonely Planet</Typography>
                                <Typography sx={{ margin: '16px', fontSize: '12px', textAlign: 'center' }}>SignUp to continue</Typography>
                                <Grid sx={{ width: '80%', margin: 'auto', height: { lg: '630px', md: '630px', sm: '650px', xs: '680px' } }}>
                                    <Typography sx={{ border: '1px solid gray', borderRadius: '22px', height: '43px', fontSize: '14px', color: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" width="9%" /> &nbsp;&nbsp;&nbsp;<Link href="#" underline="none" onClick={googleAccount}>Continue with Google</Link>
                                    </Typography>
                                    <Typography sx={{ border: '1px solid gray', borderRadius: '22px', height: '43px', marginTop: '10px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" alt="" width="6%" /> &nbsp;&nbsp;&nbsp;<Link href="#" underline="none" onClick={signInWithFacebook}>Continue with Facebook</Link>
                                    </Typography>
                                    <Typography sx={{ color: '#bdbdbd', margin: '20px 0px 20px 0px' }}>
                                        ----------------------- <span style={{ fontSize: '10px' }}> OR </span>----------------------
                                    </Typography>
                                    {isSignIn ? <TextField id="outlined-basic" label="First Name*" variant="outlined" onChange={changeHandleName} error={!!errors.name} helperText={errors.name} sx={{ width: '100%', marginTop: '10px', marginBottom: '8px', height: '30px' }} />:<></>}
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
                                    <Box>  {isSignIn ? <Button onChange={() => navigate('/signup')} variant="contained" onClick={handleButtonClick} sx={{ backgroundColor: '#0057D9', width: '100%', borderRadius: '20px', marginTop: '20px', textTransform: 'none', height: '45px' }}>Continue</Button>: <Button onChange={() => navigate('/home')} variant="contained" onClick={ handleButtonLogIn} sx={{ backgroundColor: '#0057D9', width: '100%', borderRadius: '20px', marginTop: '20px', textTransform: 'none', height: '45px' }}>Login</Button>}</Box>





                                </Grid>

                                <Grid sx={{ textAlign: 'center', marginBottom: '30px' }}>
                                    <Typography sx={{ fontSize: '14px', marginTop: '12px' }}>{isSignIn ? 'Alredy have an account?' : 'Don`t have an account?'}  <span style={{ color: '#0057DA', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.875rem' }} onClick={toggleSignInMode} > {isSignIn ? 'Log in' : 'Sign Up'}</span>  </Typography>
                                </Grid></Box>
                        </Grid>

                    </Grid>

                </Grid>






            </Container >

        </>
    )
}


export default Signup;