import { SWData } from "./pages/List";


export default async function Fetch() {
    
    const returnData: SWData[][]= [[],[],[],[],[],[],[]];

    returnData[0] = returnData[0].concat(await firstcharactersSW())
    charactersSW().then(e => {returnData[0] = returnData[0].concat(e)});
    creaturesSW().then(e => {returnData[1] = returnData[1].concat(e)});
    droidsSW().then(e => {returnData[2] = returnData[2].concat(e)});
    locationsSW().then(e => {returnData[3] = returnData[3].concat(e)});
    organizationsSW().then(e => {returnData[4] = returnData[4].concat(e)});
    speciesSW().then(e => {returnData[5] = returnData[5].concat(e)});
    vehiclesSW().then(e => {returnData[6] = returnData[6].concat(e)});
    
    return returnData;
}

async function firstcharactersSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }
    return cardio;
}



async function charactersSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/characters?page=2&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }
    for(let y = 200; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/characters?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }

    return cardio;    
}

async function creaturesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/creatures?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/creatures?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}

async function droidsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/droids?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }    
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/droids?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}

async function locationsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/locations?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }    
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/locations?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}

async function organizationsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/organizations?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }    
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/organizations?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}

async function speciesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/species?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }    
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/species?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}

async function vehiclesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/vehicles?page=1&limit=100")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.description,
        })
    }
    for(let y = 100; y < SWData.info.total; y += 100){
        const fetchSWMulti = await fetch(`https://starwars-databank-server.vercel.app/api/v1/vehicles?page=${(y/100)+1}&limit=100`)
        const SWDataMulti = await fetchSWMulti.json();
        for (let x of SWDataMulti.data) {
            cardio.push({
            id: x._id,
            name: x.name,
            image: x.image,
            details: x.description,
            })
        }
    }
    return cardio;    
}