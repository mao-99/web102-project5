import { fetchData, generateDates, fetchHistoricalData } from "./components/api/api";
import axios from "axios";
import { useState, useEffect } from 'react';
import Index from './components';
import Table from './components/table';
import Header from './components/header'
import './App.css'

function App() {
    //Constants and app variables: 
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [currentRates, setCurrentRates] = useState({});
    const [timeFrame, setTimeFrame] = useState(7);
    let quotes = {}
    const historicalQuotes = []
    const groupedRates = {};

    //Functions and lifecycle methods
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [liveData] = await fetchData(baseCurrency);
            const liveRates = liveData.data.quotes;
            //const historicalRates = historicalData.data.quotes;
            setCurrentRates(liveRates)
            //console.log(currentRates)
        }
        const fetchHistoricalDataAsync = async () => {
            let data = await fetchHistoricalData(baseCurrency);
            console.log("This should be historical data ", data);
        }
        fetchHistoricalDataAsync();
        fetchDataAsync();
    },[])
    quotes = currentRates;
  return (
    <>
    <Header baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} timeFrame={timeFrame} setTimeFrame={setTimeFrame} currentRates={currentRates} setCurrentRates={setCurrentRates}/>
    <div className='body'>
      <Index />
      <Table historicalQuotes={historicalQuotes} quotes={quotes} groupedRates={groupedRates} baseCurrency={baseCurrency}/>
    </div>
    </>
  )
}

export default App

