import styles from './header.module.css';
import { useEffect, useState } from 'react';
import { fetchData, fetchHistoricalData } from "./api/api";
export default function Header({baseCurrency, setBaseCurrency, timeFrame, setTimeFrame, currentRates, setCurrentRates}){
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [liveData] = await fetchData(baseCurrency);
            const liveRates = liveData.data.quotes;
            //const historicalRates = historicalData.data.quotes;
            setCurrentRates(liveRates)
            //console.log(currentRates)
        }
        const fetchHistoricalDataAsync = async () => {
            let data = await fetchHistoricalData(baseCurrency, timeFrame);
            console.log("This should be historical data ", data);
        }
        fetchHistoricalDataAsync();
        fetchDataAsync();
    },[baseCurrency, timeFrame])

    return(
        <>
        <div className={`${styles.currencies}`}>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('USD')}}>
                <p>USD</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('GBP')}}>
                <p>GBP</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('EUR')}}>
                <p>EUR</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('JPY')}}>
                <p>JPY</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('CNY')}}>
                <p>CNY</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('RUB')}}>
                <p>RUB</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('CHF')}}>
                <p>CHF</p>
            </div>
            <div className={`${styles.currency}`} onClick={() => {setBaseCurrency('NGN')}}>
                <p>NGN</p>
            </div>
        </div>
        {/* <div className="filters">
            <div><p>1 day</p></div>
            <div><p>2 days</p></div>
            <div><p>3 days</p></div>
            <div><p>5 days</p></div>
            <div><p>7 days</p></div>
        </div> */}
        </>
    )
}