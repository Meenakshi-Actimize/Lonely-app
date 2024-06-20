import * as React from 'react';
import { Box,Button, Typography, Grid, Hidden, Menu, MenuItem, Card, CardContent,CardMedia, Collapse, Container, Stack, ListItem,List} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import SwiperCore from 'swiper';
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { signOut } from 'firebase/auth';
import CloseIcon from "@mui/icons-material/Close";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper/modules";
import { Autoplay } from 'swiper/modules';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { useLocation } from 'react-router-dom';
import { Shop } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar } from '@mui/material';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Tabs, Tab } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { InputAdornment } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PaginationItem from '@mui/material/PaginationItem';
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import TuneIcon from '@mui/icons-material/Tune';
import { Get1card } from "../redux/api/api";
import { Getfood1api } from '../redux/api/api';
import { Gethomecards } from '../redux/api/api';
import { Gethomecards2 } from '../redux/api/api';
import { Gethomecards3 } from '../redux/api/api';
import { Gethomecards4 } from '../redux/api/api';
import { Getmagnifierapi } from '../redux/api/api';
import { Getplanvideo1api } from '../redux/api/api';
import { Getshopapi } from '../redux/api/api';
import { Get1video } from '../redux/api/api';
import { lazy, Suspense } from 'react';
import { Getfoodcard1api } from '../redux/api/api';




















const Imports = {
React,
Button,
Typography,
Grid,
Accordion,
Container,
CloseIcon,
AccordionSummary,
AccordionDetails,
Collapse,
ExpandMoreIcon,
connect,
useParams,
Icon,
useEffect,
useState,
Link,
Box,
useNavigate,
AppBar,
styled,
Toolbar,
IconButton,
InputBase,
SearchIcon,
Hidden,
Menu,
MenuItem,
signOut,
Card,
CardContent,
CardMedia, 
FacebookRoundedIcon,
InstagramIcon,
XIcon, 
ArrowBackIosNewRoundedIcon,
ArrowForwardIosRoundedIcon,
BookmarkBorderRoundedIcon, 
Swiper,
SwiperSlide,
SwiperCore,
Autoplay, 
Stack,

ArrowForwardIcon,
YouTubeIcon,
PinterestIcon,

UpdateIcon,
StarIcon,
AssignmentReturnedOutlinedIcon,
LocalShippingOutlinedIcon,
EngineeringOutlinedIcon,
useLocation,
Shop,
KeyboardArrowDownIcon,
MenuIcon,
SearchOutlinedIcon,
BookmarkBorderIcon,
Avatar,
EffectFade,
CheckSharpIcon,
ArrowForwardIosSharpIcon,
Tabs,
Tab,
PieChart,
useDrawingArea,
InputAdornment,
CheckCircleOutlineIcon,
ArrowBackIcon,
PaginationItem,
TextField,
Checkbox,
ToastContainer,
toast,
Bounce,
Pagination,
Navigation,
List,
ListItem,
CheckBoxOutlineBlankIcon,
TuneIcon,
Get1card,
Getfood1api,
Gethomecards,
Gethomecards2,
Gethomecards3,
Gethomecards4,
Getmagnifierapi,
Getplanvideo1api,
Getshopapi,
Get1video,
Getfoodcard1api






}


export default Imports;