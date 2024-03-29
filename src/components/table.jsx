import { fetchData } from "./api/api";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Table(){
    const [currentRates, setCurrentRates] = useState([])
    // useEffect(() => {
    //     const fetchDataAsync = async () => {
    //         let [data, liveData, hisotoricalData] = await fetchData();
    //         const liveRates = liveData.data.quotes;
    //         const historicalRates = hisoticalData.data.quotes;
    //         setCurrentRates(liveRates)
    //         console.log(currentRates)
    //     }
    //     fetchDataAsync();
    // },[])
    const quotes = {
        "USDAED": 3.672902,
        "USDAFN": 72.501917,
        "USDALL": 96.350165,
        "USDAMD": 393.916498,
        "USDANG": 1.80189,
        "USDAOA": 832.63297,
        "USDARS": 857.465294,
        "USDAUD": 1.532837,
        "USDAWG": 1.8025,
        "USDAZN": 1.698376,
        "USDBAM": 1.813192,
        "USDBBD": 2.018634,
        "USDBDT": 109.729755,
        "USDBGN": 1.807413,
        "USDBHD": 0.376894,
        "USDBIF": 2865,
        "USDBMD": 1,
        "USDBND": 1.351133,
        "USDBOB": 6.908604,
        "USDBRL": 5.000402,
        "USDBSD": 0.99975,
        "USDBTC": 0.000014125612,
        "USDBTN": 83.363479,
        "USDBWP": 13.770917,
        "USDBYN": 3.271852,
        "USDBYR": 19600,
        "USDBZD": 2.015288,
        "USDCAD": 1.353505,
        "USDCDF": 2805.000255,
        "USDCHF": 0.900802,
        "USDCLF": 0.035546,
        "USDCLP": 980.829947,
        "USDCNY": 7.227103,
        "USDCNH": 7.260535,
        "USDCOP": 3859,
        "USDCRC": 502.853117,
        "USDCUC": 1,
        "USDCUP": 26.5,
        "USDCVE": 102.295535,
        "USDCZK": 23.4175,
        "USDDJF": 177.719792,
        "USDDKK": 6.90503,
        "USDDOP": 59.249896,
        "USDDZD": 134.757035,
        "USDEGP": 47.39634,
        "USDERN": 15,
        "USDETB": 56.875017,
        "USDEUR": 0.925755,
        "USDFJD": 2.255902,
        "USDFKP": 0.791846,
        "USDGBP": 0.79147,
        "USDGEL": 2.697759,
        "USDGGP": 0.791846,
        "USDGHS": 13.196871,
        "USDGIP": 0.791846,
        "USDGMD": 67.924991,
        "USDGNF": 8600.000503,
        "USDGTQ": 7.795892,
        "USDGYD": 209.344044,
        "USDHKD": 7.826105,
        "USDHNL": 24.779822,
        "USDHRK": 6.882375,
        "USDHTG": 132.552739,
        "USDHUF": 364.710097,
        "USDIDR": 15867.2,
        "USDILS": 3.66441,
        "USDIMP": 0.791846,
        "USDINR": 83.425701,
        "USDIQD": 1310,
        "USDIRR": 42035.000244,
        "USDISK": 139.159863,
        "USDJEP": 0.791846,
        "USDJMD": 153.868975,
        "USDJOD": 0.708901,
        "USDJPY": 151.322504,
        "USDKES": 132.503684,
        "USDKGS": 89.471043,
        "USDKHR": 4045.000352,
        "USDKMF": 455.050173,
        "USDKPW": 899.995572,
        "USDKRW": 1349.185005,
        "USDKWD": 0.30764,
        "USDKYD": 0.833171,
        "USDKZT": 448.291846,
        "USDLAK": 20947.491011,
        "USDLBP": 89730.946064,
        "USDLKR": 300.468639,
        "USDLRD": 192.71925,
        "USDLSL": 18.884977,
        "USDLTL": 2.95274,
        "USDLVL": 0.60489,
        "USDLYD": 4.825019,
        "USDMAD": 10.141503,
        "USDMDL": 17.631217,
        "USDMGA": 4391.500733,
        "USDMKD": 57.117693,
        "USDMMK": 2099.568906,
        "USDMNT": 3395.872519,
        "USDMOP": 8.057256,
        "USDMRU": 40.049794,
        "USDMUR": 46.37012,
        "USDMVR": 15.460332,
        "USDMWK": 1742.000417,
        "USDMXN": 16.602603,
        "USDMYR": 4.732971,
        "USDMZN": 63.500193,
        "USDNAD": 18.890085,
        "USDNGN": 1393.509875,
        "USDNIO": 36.850319,
        "USDNOK": 10.846031,
        "USDNPR": 133.381233,
        "USDNZD": 1.671115,
        "USDOMR": 0.38495,
        "USDPAB": 0.999768,
        "USDPEN": 3.720503,
        "USDPGK": 3.831989,
        "USDPHP": 56.217995,
        "USDPKR": 277.949774,
        "USDPLN": 3.98428,
        "USDPYG": 7391.68123,
        "USDQAR": 3.640501,
        "USDRON": 4.601297,
        "USDRSD": 108.500787,
        "USDRUB": 92.45002,
        "USDRWF": 1289,
        "USDSAR": 3.750359,
        "USDSBD": 8.504016,
        "USDSCR": 13.867254,
        "USDSDG": 601.00034,
        "USDSEK": 10.69204,
        "USDSGD": 1.34956,
        "USDSHP": 1.263982,
        "USDSLE": 22.745701,
        "USDSLL": 22745.701157,
        "USDSOS": 571.501643,
        "USDSRD": 35.205023,
        "USDSTD": 20697.981008,
        "USDSVC": 8.747972,
        "USDSYP": 13001.78742,
        "USDSZL": 18.889746,
        "USDTHB": 36.419954,
        "USDTJS": 10.95258,
        "USDTMT": 3.5,
        "USDTND": 3.123499,
        "USDTOP": 2.37805,
        "USDTRY": 32.336897,
        "USDTTD": 6.786292,
        "USDTWD": 31.9932,
        "USDTZS": 2580.000108,
        "USDUAH": 39.228109,
        "USDUGX": 3878.922727,
        "USDUYU": 37.519121,
        "USDUZS": 12625.000013,
        "USDVEF": 3627137.313762,
        "USDVES": 36.28861,
        "USDVND": 24795,
        "USDVUV": 120.588962,
        "USDWST": 2.764057,
        "USDXAF": 608.130571,
        "USDXAG": 0.040195,
        "USDXAU": 0.00045,
        "USDXCD": 2.70255,
        "USDXDR": 0.755378,
        "USDXOF": 604.496241,
        "USDXPF": 110.550238,
        "USDYER": 250.350512,
        "USDZAR": 18.923201,
        "USDZMK": 9001.202706,
        "USDZMW": 24.794768,
        "USDZWL": 321.999592
    }
    const mappedHistoricalQuotes = Object.keys(quotes).map(key => {
        return {
            key: `${key.slice(3)}`,
            value: mappedHistoricalQuotes[key]
        }
    });

    const mappedQuotes = Object.keys(quotes).map(key => {
        return {
            key: `${key.slice(3)}`,
            value: quotes[key]
        };
        });
    
    const mergedQuotes = Object.keys(quotes).map(key => {
        return {
            key: key.slice(3),
            liveRate: quotes[key],
            historicalRate: mappedHistoricalQuotes[key]  // Assuming mappedHistoricalQuotes contains the historical rates for each key
        };
    });
        
    
    const [source, setSource] = useState("USD");
    return (
        <>
        {console.log(currentRates)}
        {console.log(mappedQuotes)}
        <div className="tableDiv">
            <table className="table table-rounded table-striped table-hover table-bordered caption-top">
                <caption>
                    The price tells us how much of the other currency 1 {source} is worth
                </caption>
                <thead className="table-dark table-group-divider">
                    <tr>
                        <th>Currency</th>
                        <th>Live Rate <em>(1 {source} equals...)</em></th>
                        <th>Historical Rates</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedQuotes.map((quote, index) => {
                        return(
                            <tr key={index}>
                                <td>{quote.key}</td>
                                <td>{quote.value}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}