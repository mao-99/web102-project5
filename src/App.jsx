import { fetchData, generateDates, fetchHistoricalData } from "./components/api/api";
import axios from "axios";
import { useState, useEffect } from 'react';
import Index from './components';
import Table from './components/table';
//import Header from './components/header'
import './App.css'

function App() {
    //Constants and app variables: 
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [currentRates, setCurrentRates] = useState({});
    const [timeFrame, setTimeFrame] = useState(7);
    const [quotes, setQuotes] = useState({});
    const [historicalQuotes, setHistoricalQuotes] = useState([]);
    const [groupedQuotes, setGroupedQuotes] = useState({});
    const [mergedQuotes, setMergedQuotes] = useState([]);

    //Functions and lifecycle methods
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [liveData] = await fetchData();
            const liveRates = liveData.data.quotes;
            //console.log("These are live rates: ", liveRates);
            //quotes = liveRates;
            //const historicalRates = historicalData.data.quotes;
            //setCurrentRates(liveRates)
            //console.log(currentRates)
            return liveRates;
        }
        const fetchHistoricalDataAsync = async () => {
            let data = await fetchHistoricalData(timeFrame);
            //console.log("This should be historical data ", data);
            return data;
        }
        const fetchDataAndHistoricalData = async () => {
            let hQ = await fetchHistoricalDataAsync();
            let q = await fetchDataAsync();
            setHistoricalQuotes(hQ);
            setQuotes(q);
            return[quotes, historicalQuotes];
        };
        const updateMergedQuotes = async () =>{
          const [quotes, historicalQuotes] = await fetchDataAndHistoricalData();
          setMergedQuotes(Object.keys(quotes).map(key => {
              return {
                  key: key.slice(3),
                  liveRate: quotes[key],
                  historicalRate: historicalQuotes[key]  // Assuming mappedHistoricalQuotes contains the historical rates for each key
              };
          }))
        }
        const updateQuoteAndHistorical = async () => {
                                                        await fetchDataAndHistoricalData();
                                                      }
        updateQuoteAndHistorical();
        updateMergedQuotes();
        const calculateGroupedRates = () => {
          const newGroupedQuotes = {};
          historicalQuotes.forEach(rateObj => {
              Object.entries(rateObj).forEach(([key, value]) => {
                  if (!newGroupedQuotes[key]) {
                      newGroupedQuotes[key] = [];
                  }
                  newGroupedQuotes[key].push(value);
              });
          });
          return newGroupedQuotes;
      };
  
      setGroupedQuotes(calculateGroupedRates());
    
    },[timeFrame])
    //historicalQuotes = data;
  return (
    <>
    {/* <Header baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} timeFrame={timeFrame} setTimeFrame={setTimeFrame} currentRates={currentRates} setCurrentRates={setCurrentRates}/> */}
    <div className='body'>
      <Index />
      <Table historicalQuotes={historicalQuotes} quotes={quotes} groupedRates={groupedQuotes} setTimeFrame={setTimeFrame} setQuotes = {setQuotes} mergedQuotes={mergedQuotes} setMergedQuotes={setMergedQuotes}/>
    </div>
    </>
  )
}

export default App

