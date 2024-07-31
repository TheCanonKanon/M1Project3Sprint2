import { SWData } from "./List";


export default async function Fetch() {
    
    const returnData: SWData[][] = [];
    
    returnData.push(await charactersSW());
    returnData.push(await creaturesSW());
    returnData.push(await droidsSW());
    returnData.push(await locationsSW());
    returnData.push(await organizationsSW());
    returnData.push(await speciesSW());
    returnData.push(await vehiclesSW());

    
    
    return returnData;
}

async function charactersSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/characters")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function creaturesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/creatures/")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function droidsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/droids/")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function locationsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/locations/")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function organizationsSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/organizations/")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function speciesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/species")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }    
    return cardio;    
}

async function vehiclesSW() {
    const fetchSW = await fetch("https://starwars-databank-server.vercel.app/api/v1/vehicles")
    const SWData = await fetchSW.json();
    const cardio:SWData[] =[]
    for (let x of SWData.data) {
        cardio.push({
        id: x._id,
        name: x.name,
        image: x.image,
        details: x.details,
        })
    }
    return cardio;    
}