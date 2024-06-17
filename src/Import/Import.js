import * as React from 'react';
import { Box,Button, Typography, Grid, Hidden, Menu, MenuItem, Card, CardContent,CardMedia, Collapse, Container, Stack, Pagination } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Get1card } from "../redux/api/api";
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
import { auth } from "../Firebase";
import CloseIcon from "@mui/icons-material/Close";
import { Getflash } from "../redux/action/Action";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Autoplay } from 'swiper/modules';
import { Getfood1act } from '../redux/action/Action9';
import { Getfood1api } from '../redux/api/api';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Gethomecards } from '../redux/api/api';
import { Gethomecards2 } from '../redux/api/api';
import { Gethomecards3 } from '../redux/api/api';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';
import { Gethomecards4 } from '../redux/api/api';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { Getmagnifieract } from '../redux/action/Action10';












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
Get1card,
Getflash,
AppBar,
styled,
Toolbar,
IconButton,
InputBase,
SearchIcon,
Hidden,
Menu,
MenuItem,
auth,
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
Navigation, 
Autoplay, 
Stack,
Pagination,
Getfood1act,
Getfood1api,
ArrowForwardIcon,
YouTubeIcon,
PinterestIcon,
Gethomecards,
Gethomecards2,
Gethomecards3,
UpdateIcon,
StarIcon,
Gethomecards4,
AssignmentReturnedOutlinedIcon,
LocalShippingOutlinedIcon,
EngineeringOutlinedIcon,
Getmagnifieract




}


export default Imports;