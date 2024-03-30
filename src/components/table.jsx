import { fetchData, generateDates, fetchHistoricalData } from "./api/api";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Table({historicalQuotes, quotes, groupedRates, baseCurrency}){
    //console.log(generateDates(3));
    const [currentRates, setCurrentRates] = useState([])
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

    historicalQuotes.forEach(rateObj => {
        Object.entries(rateObj).forEach(([key, value]) => {
          if (!groupedRates[key]) {
            groupedRates[key] = [];
          }
          groupedRates[key].push(value);
        });
      });

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
    
    const mergedQuotes = Object.keys(quotes).map(key => {
        return {
            key: key.slice(3),
            liveRate: quotes[key],
            historicalRate: historicalQuotes[key]  // Assuming mappedHistoricalQuotes contains the historical rates for each key
        };
    });
        
    
    //const [source, setSource] = useState("USD");
    return (
        <>
        {/* {console.log(currentRates)} */}
        {/* {console.log(mappedQuotes)} */}
        {console.log(groupedRates)}
        <div className="tableDiv">
            <table className="table table-rounded table-striped table-hover table-bordered caption-top">
                <caption>
                    The price tells us how much of the other currency 1 {baseCurrency} is worth
                </caption>
                <thead className="table-dark table-group-divider">
                    <tr>
                        <th>Currency</th>
                        <th>Live Rate <em>(1 {baseCurrency} equals...)</em></th>
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