import axios from "axios";
// import { BaseUrl } from "./CommonApi";

const url="https://lonelyplanet-88073-default-rtdb.firebaseio.com/flash"
const BaseUrl = "https://lonelyplanet-88073-default-rtdb.firebaseio.com/video"
const Cardurl = "https://lonelyplanet-88073-default-rtdb.firebaseio.com/cards.json"
const Card2url = "https://lonelyplanet-88073-default-rtdb.firebaseio.com/cards2.json"
const Card3url= "https://lonelyplanet-88073-default-rtdb.firebaseio.com/cards3.json"
const Card4url = "https://lonelyplanet-88073-default-rtdb.firebaseio.com/cards4.json"

export const Get1card = async () => {
    try{
        const response = await axios.get(`${url}.json`)
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
        const response = await axios.get(`${BaseUrl}.json`)
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
        const response = await axios.get(`${Cardurl}`)
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
        const response = await axios.get(`${Card2url}`)
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
        const response = await axios.get(`${Card3url}`)
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
        const response = await axios.get(`${Card4url}`)
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