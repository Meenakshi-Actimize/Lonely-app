import axios from "axios";
// import { BaseUrl } from "./CommonApi";

const url="https://lonelyplanet-88073-default-rtdb.firebaseio.com"

export const Get1card = async () => {
    try{
        const response = await axios.get(`${url}/flash.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const Get1video = async () => {
    try{
        const response = await axios.get(`${url}/video.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}

export const Gethomecards = async () => {
    try{
        const response = await axios.get(`${url}/cards.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}

export const Gethomecards2 = async () => {
    try{
        const response = await axios.get(`${url}/cards2.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const Gethomecards3 = async () => {
    try{
        const response = await axios.get(`${url}/cards3.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}

export const Gethomecards4 = async () => {
    try{
        const response = await axios.get(`${url}/cards4.json`)
        console.log("This is Data from the 3FireBase ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}

export const Getplanvideo1api = async () => {
    try{
        const response = await axios.get(`${url}/planexpert.json`)
        console.log("This is Data from the video in plan expert page ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const Getshopapi = async () => {
    try{
        const response = await axios.get(`${url}/shop.json`)
        console.log("This is Data from the data in shop page ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const Getfood1api = async () => {
    try{
        const response = await axios.get(`${url}/foodanddrink1.json`)
        console.log("This is Data from the data in foodanddrink page ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}

export const Getmagnifierapi = async () => {
    try{
        const response = await axios.get(`${url}/magnifier.json`)
        console.log("This is Data from the data in  page ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}


export const Getfoodcard1api = async () => {
    try{
        const response = await axios.get(`${url}/foodcard1.json`)
        console.log("This is Data from the data in  page ----->", response);
        const jsonData = response.data;
        console.log('This is json data', jsonData);
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
        }
    }

    catch(error) {
        console.log('error in  get api data', error.message)
        return [];
    }
}