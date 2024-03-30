import { fetchData, generateDates, fetchHistoricalData } from "./api/api";
import styles from "./table.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
export default function Table({historicalQuotes, quotes, groupedRates, setTimeFrame, setQuotes, mergedQuotes}){
    //console.log(generateDates(3));
    // const [currentRates, setCurrentRates] = useState([])
    // useEffect(() => {
    //     const fetchDataAsync = async () => {
    //         let [data, liveData] = await fetchData();
    //         const liveRates = liveData.data.quotes;
    //         //const historicalRates = historicalData.data.quotes;
    //         setCurrentRates(liveRates)
    //         //console.log(currentRates)
    //     }
    //     const fetchHistoricalDataAsync = async () => {
    //         let data = await fetchHistoricalData();
    //         console.log("This should be historical data ", data);
    //     }
    //     fetchHistoricalDataAsync();
    //     fetchDataAsync();
    // },[])

    // historicalQuotes.forEach(rateObj => {
    //     Object.entries(rateObj).forEach(([key, value]) => {
    //       if (!groupedRates[key]) {
    //         groupedRates[key] = [];
    //       }
    //       groupedRates[key].push(value);
    //     });
    //   });
    const [formData, setFormData] = useState({searchCurrency: ''});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const searchedCurrency = formData.searchCurrency.toUpperCase;
        //setMergedQuotes(mergedQuotes.filter(quote => quote.key === searchedCurrency ))
    }
    const maxValues = {};
    for (const currency in groupedRates) {
        maxValues[currency] = Math.max(...groupedRates[currency]).toFixed(2);
    }
    const minValues = {};
    for (const currency in groupedRates) {
        minValues[currency] = Math.min(...groupedRates[currency]).toFixed(2);
    }
    const averageValues = {};
    function average(arr) {
        if (arr.length === 0) {
          return 0; // Return NaN for an empty array
        }
        const sum = arr.reduce((acc, val) => acc + val, 0);
        return (sum / arr.length).toFixed(2);
      }
    for (const currency in groupedRates){
        averageValues[currency] = average(groupedRates[currency]);
    }
    // const mappedHistoricalQuotes = Object.keys(historicalQuotes).map(key => {
    //     return {
    //         key: `${key.slice(3)}`,
    //         value: historicalQuotes[key]
    //     }
    // });

    // const mappedQuotes = Object.keys(quotes).map(key => {
    //     return {
    //         key: `${key.slice(3)}`,
    //         value: quotes[key]
    //     };
    //     });  
    
    //const [source, setSource] = useState("USD");
    return (
        <>
        {/* {console.log(currentRates)} */}
        {/* {console.log(mappedQuotes)} */}
        {/* {console.log(groupedRates)} */}
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
                    The price tells us how much of the other currency 1 USD is worth
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
                    {mergedQuotes.map((quote, index) => {
                        return(
                            <tr key={index}>
                                <td>{quote.key}</td>
                                <td>{quote.liveRate}</td>
                                {/* <td>{quote.historicalRate}</td> */}
                                <td>
                                    <table className='table-bordered table-hover' style={{width:'100%'}}>
                                        <tbody>
                                            <tr>
                                                <td>{maxValues['USD' + quote.key]}</td>
                                                <td>{averageValues['USD' + quote.key]}</td>
                                                <td>{minValues['USD' + quote.key]}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}