import { fetchData } from "./api/api";
import { useState, useEffect } from "react";
export default function RenderData(){
    const [allCurrencies, setAllCurrencies] = useState([]);
    const [currentRates, setCurrentRates] = useState([])
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [data, liveData] = await fetchData();
            const currencies = data.data.currencies;
            const liveRates = liveData.data.quotes;
            //console.log(liveRates);
            setAllCurrencies(currencies);
            setCurrentRates(liveRates)
            console.log(allCurrencies);
            console.log(currentRates)
        }
        fetchDataAsync();
    },[])
    return (
        <>
        </>
    )
}
