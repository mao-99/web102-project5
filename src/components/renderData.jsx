import { fetchData } from "./api/api";
import axios from "axios";
import { useState, useEffect } from "react";
export default function RenderData(){
    const [allCurrencies, setAllCurrencies] = useState([]);
    const [currentRates, setCurrentRates] = useState([])
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [data, liveData] = await fetchData();
            const currencies = data.data.currencies;
            const liveRates = liveData.data.quotes;
            setAllCurrencies(currencies);
            setCurrentRates(liveRates)
            console.log(currencies);
            console.log(currentRates)
        }
        fetchDataAsync();
    },[])
    return (
        <>
        </>
    )
}