import { fetchData, generateDates, fetchHistoricalData } from "./api/api";
import styles from "./table.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
export default function Table(){
    const [timeFrame, setTimeFrame] = useState(7);
    const [quotes, setQuotes] = useState({});
    const [tempQuotes, setTempQuotes] = useState({});
    const [historicalQuotes, setHistoricalQuotes] = useState([]);
    const [groupedQuotes, setGroupedQuotes] = useState({});
    useEffect(() => {
        const fetchDataAsync = async () => {
            //This pulls the live rates from api and returns an object of price pairs (strings) and the rates (floats). It takes no parameters: output => {currencyPair1:rate, currencyPair2:rate, ...}
            let [liveData] = await fetchData();
            const liveRates = liveData.data.quotes;
            return liveRates;
        }
        const fetchHistoricalDataAsync = async () => {
            // This pulls the historical rates from api based on the time frame passed. It returns an array of objects of price pairs (strings) and the rates (floats). 
            // It takes a parameter, an integer n which it uses to compute the past n dates and queries the api for each date's rates
            // output => [{currencyPair1:rate, currencyPair2:rate, ....},{currencyPair1:rate, currencyPair2:rate, ....},{currencyPair1:rate, currencyPair2:rate, ....}]
            let data = await fetchHistoricalData(timeFrame);
            return data;
        }
        const updateQuotesAndHistorical = async () => {
            //This function is used to update the state variables; quotes, historicalQuotes, and groupedQuotes after getting the data from the api.
            const q = await fetchDataAsync();
            const hQ = await fetchHistoricalDataAsync();
            setQuotes(q);
            setTempQuotes(q);
            setHistoricalQuotes(hQ);

            const updateGroupedQuotes = () => {
                //This function is used to group the values of each corresponding currency pair from historicalQuotes. It returns an object of currency pairs and
                // an array of the rates associated with the pair. It takes no parameters. 
                //output => {currencyPair1:[rate1, rate2, ...], currencyPair2:[rate1, rate2, ...], ...}
                let updatedGroupedQuotes = {};
    
                hQ.forEach(rateObj => {
                    Object.keys(rateObj).forEach(currencyPair => {
                        if (updatedGroupedQuotes[currencyPair]){
                            updatedGroupedQuotes[currencyPair].push(rateObj[currencyPair]);
                        }
                        else{
                            updatedGroupedQuotes[currencyPair] = [rateObj[currencyPair]];
                        }
                    })
                })
                setGroupedQuotes(updatedGroupedQuotes);
            }
            updateGroupedQuotes();
        }
        updateQuotesAndHistorical();
    },[timeFrame])
    const [formData, setFormData] = useState({searchCurrency: ''});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        console.log(formData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formData);

        if (formData.searchCurrency !== ''){
            const searchedCurrency = formData.searchCurrency.toUpperCase();
            console.log("This is the search data: ", searchedCurrency);
            let filteredQuotes = Object.entries(quotes).filter(([key, value]) => key === "USD" + searchedCurrency);
            let newQuotes = Object.fromEntries(filteredQuotes);
            setQuotes(newQuotes);
        }
        else{
            setQuotes(tempQuotes);
        }
    }
    //console.log("These are the quotes outside useEffect: ", quotes);
    //console.log("These are the historical quotes outside useEffect: ", historicalQuotes);
    //console.log("These should be the grouped quotes outside useEffect: ", groupedQuotes);
    const maxValues = {};
    for (const currency in groupedQuotes) {
        maxValues[currency] = Math.max(...groupedQuotes[currency]).toFixed(2);
    }
    const minValues = {};
    for (const currency in groupedQuotes) {
        minValues[currency] = Math.min(...groupedQuotes[currency]).toFixed(2);
    }
    const averageValues = {};
    function average(arr) {
        if (arr.length === 0) {
          return 0; // Return NaN for an empty array
        }
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return (sum / arr.length).toFixed(2);
      }
    for (const currency in groupedQuotes){
        averageValues[currency] = average(groupedQuotes[currency]);
    }
    const maxPair = Object.entries(quotes).reduce((max, [currency, rate]) => {
        if (!max || parseFloat(rate) > parseFloat(max[1])) {
            return [currency, parseFloat(rate).toFixed(2)];
        }
        return max;
    }, null);
    
    const minPair = Object.entries(quotes).reduce((min, [currency, rate]) => {
        if (!min || parseFloat(rate) < parseFloat(min[1])) {
            return [currency, parseFloat(rate).toFixed(2)];
        }
        return min;
    }, null);
    return (
        <>
        <div className="tableDiv">
            <div className={`${styles.currencies}`}>
                <div className={`${styles.currency}`} onClick={() => {setTimeFrame(1)}}>
                    <p>1 day</p>
                </div>
                <div className={`${styles.currency}`} onClick={() => {setTimeFrame(2)}}>
                    <p>2 days</p>
                </div>
                <div className={`${styles.currency}`} onClick={() => {setTimeFrame(3)}}>
                    <p>3 days</p>
                </div>
                <div className={`${styles.currency}`} onClick={() => {setTimeFrame(5)}}>
                    <p>5 days</p>
                </div>
                <div className={`${styles.currency}`} onClick={() => {setTimeFrame(7)}}>
                    <p>7 days</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="searchCurrency" id="searchCurrency" value={formData.searchCurrency} onChange={handleChange}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
            <table className="table table-rounded table-striped table-hover table-bordered caption-top">
                <caption>
                    The <strong><em>live rate</em></strong> tells us how much of the other currency 1 <strong><em>USD</em></strong> is worth <br/>
                    <strong>Total # of Quotes :</strong> {Object.keys(quotes).length}  <br/>
                    <strong>Max Pair :</strong> {maxPair && `${maxPair[0]}: ${maxPair[1]}`} <br/>
                    <strong>Min Pair :</strong> {minPair && `${minPair[0]}: ${minPair[1]}`}
                </caption>
                <thead className="table-dark table-group-divider">
                    <tr>
                        <th>Currency</th>
                        <th>Live Rate <em>(1 USD equals...)</em></th>
                        <th>Historical Rates
                            <table style={{width:'100%'}}><thead><tr><th>Max</th><th>Average</th><th>Min</th></tr></thead></table>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(quotes).map(([key, value], index) => {
                            return (
                                <tr key={index}>
                                  <td>{key.slice(3)}</td>
                                  <td>{value}</td>
                                  <td>
                                    <table className='table-bordered table-hover' style={{width:'100%'}}>
                                        <tbody>
                                            <tr>
                                                <td>{maxValues[key]}</td>
                                                <td>{averageValues[key]}</td>
                                                <td>{minValues[key]}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}