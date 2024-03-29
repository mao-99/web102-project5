import { fetchData, generateDates, fetchHistoricalData } from "./api/api";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Table(){
    console.log(generateDates(3));
    const [currentRates, setCurrentRates] = useState([])
    useEffect(() => {
        const fetchDataAsync = async () => {
            let [data, liveData] = await fetchData();
            const liveRates = liveData.data.quotes;
            //const historicalRates = historicalData.data.quotes;
            setCurrentRates(liveRates)
            //console.log(currentRates)
        }
        const fetchHistoricalDataAsync = async () => {
            let data = await fetchHistoricalData();
            console.log("This should be historical data ", data);
        }
        fetchHistoricalDataAsync();
        fetchDataAsync();
    },[])
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
    const historicalQuotes = {
        "USDAED": 3.672299,
        "USDAFN": 72.500953,
        "USDALL": 96.350336,
        "USDAMD": 394.709774,
        "USDANG": 1.80267,
        "USDAOA": 838.000108,
        "USDARS": 857.742059,
        "USDAUD": 1.533296,
        "USDAWG": 1.8,
        "USDAZN": 1.701714,
        "USDBAM": 1.807812,
        "USDBBD": 2.019485,
        "USDBDT": 109.773908,
        "USDBGN": 1.806393,
        "USDBHD": 0.376901,
        "USDBIF": 2865,
        "USDBMD": 1,
        "USDBND": 1.348511,
        "USDBOB": 6.911309,
        "USDBRL": 4.991794,
        "USDBSD": 1.000222,
        "USDBTC": 0.00001439112,
        "USDBTN": 83.358137,
        "USDBWP": 13.710646,
        "USDBYN": 3.272789,
        "USDBYR": 19600,
        "USDBZD": 2.016157,
        "USDCAD": 1.35885,
        "USDCDF": 2795.000186,
        "USDCHF": 0.905704,
        "USDCLF": 0.035512,
        "USDCLP": 979.889928,
        "USDCNY": 7.226795,
        "USDCNH": 7.25861,
        "USDCOP": 3848.13,
        "USDCRC": 508.388409,
        "USDCUC": 1,
        "USDCUP": 26.5,
        "USDCVE": 102.303327,
        "USDCZK": 23.418099,
        "USDDJF": 177.719975,
        "USDDKK": 6.897635,
        "USDDOP": 59.25019,
        "USDDZD": 134.719242,
        "USDEGP": 47.248499,
        "USDERN": 15,
        "USDETB": 56.874974,
        "USDEUR": 0.924805,
        "USDFJD": 2.2549,
        "USDFKP": 0.791928,
        "USDGBP": 0.79265,
        "USDGEL": 2.709811,
        "USDGGP": 0.791928,
        "USDGHS": 13.193234,
        "USDGIP": 0.791928,
        "USDGMD": 67.924985,
        "USDGNF": 8600.000096,
        "USDGTQ": 7.799675,
        "USDGYD": 209.261912,
        "USDHKD": 7.82355,
        "USDHNL": 24.780099,
        "USDHRK": 6.882375,
        "USDHTG": 132.604958,
        "USDHUF": 365.220438,
        "USDIDR": 15884,
        "USDILS": 3.676705,
        "USDIMP": 0.791928,
        "USDINR": 83.36525,
        "USDIQD": 1310,
        "USDIRR": 42035.000124,
        "USDISK": 139.000104,
        "USDJEP": 0.791928,
        "USDJMD": 153.921523,
        "USDJOD": 0.708902,
        "USDJPY": 151.293498,
        "USDKES": 132.502829,
        "USDKGS": 89.509949,
        "USDKHR": 4045.000227,
        "USDKMF": 455.049996,
        "USDKPW": 899.925559,
        "USDKRW": 1350.524979,
        "USDKWD": 0.30765,
        "USDKYD": 0.833564,
        "USDKZT": 450.224613,
        "USDLAK": 20947.502428,
        "USDLBP": 89700.000166,
        "USDLKR": 300.903999,
        "USDLRD": 192.749434,
        "USDLSL": 18.885023,
        "USDLTL": 2.95274,
        "USDLVL": 0.60489,
        "USDLYD": 4.825025,
        "USDMAD": 10.141501,
        "USDMDL": 17.699311,
        "USDMGA": 4391.501874,
        "USDMKD": 56.887709,
        "USDMMK": 2100.456621,
        "USDMNT": 3403.702206,
        "USDMOP": 8.05999,
        "USDMRU": 40.049646,
        "USDMUR": 46.289704,
        "USDMVR": 15.460287,
        "USDMWK": 1742.000423,
        "USDMXN": 16.565703,
        "USDMYR": 4.732987,
        "USDMZN": 63.499964,
        "USDNAD": 18.88994,
        "USDNGN": 1418.570596,
        "USDNIO": 36.849756,
        "USDNOK": 10.803305,
        "USDNPR": 133.373388,
        "USDNZD": 1.668905,
        "USDOMR": 0.38495,
        "USDPAB": 1.000222,
        "USDPEN": 3.736425,
        "USDPGK": 3.832063,
        "USDPHP": 56.279019,
        "USDPKR": 277.949887,
        "USDPLN": 3.99055,
        "USDPYG": 7379.026667,
        "USDQAR": 3.640499,
        "USDRON": 4.598903,
        "USDRSD": 108.317032,
        "USDRUB": 92.450243,
        "USDRWF": 1289,
        "USDSAR": 3.750676,
        "USDSBD": 8.465274,
        "USDSCR": 13.550529,
        "USDSDG": 601.000211,
        "USDSEK": 10.64296,
        "USDSGD": 1.34879,
        "USDSHP": 1.263972,
        "USDSLE": 22.596527,
        "USDSLL": 22596.526609,
        "USDSOS": 571.485115,
        "USDSRD": 34.852977,
        "USDSTD": 20697.981008,
        "USDSVC": 8.751594,
        "USDSYP": 13001.853422,
        "USDSZL": 18.88979,
        "USDTHB": 36.410086,
        "USDTJS": 10.942266,
        "USDTMT": 3.5,
        "USDTND": 3.122984,
        "USDTOP": 2.37745,
        "USDTRY": 32.304703,
        "USDTTD": 6.802237,
        "USDTWD": 31.9944,
        "USDTZS": 2557.496888,
        "USDUAH": 39.283271,
        "USDUGX": 3885.900209,
        "USDUYU": 37.823748,
        "USDUZS": 12625.000237,
        "USDVEF": 3628387.38319,
        "USDVES": 36.28861,
        "USDVND": 24795,
        "USDVUV": 120.675453,
        "USDWST": 2.766241,
        "USDXAF": 606.323369,
        "USDXAG": 0.040707,
        "USDXAU": 0.000456,
        "USDXCD": 2.70255,
        "USDXDR": 0.755273,
        "USDXOF": 604.505548,
        "USDXPF": 110.550116,
        "USDYER": 250.349764,
        "USDZAR": 18.93365,
        "USDZMK": 9001.202446,
        "USDZMW": 25.230855,
        "USDZWL": 321.999592
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
        
    
    const [source, setSource] = useState("USD");
    return (
        <>
        {/* {console.log(currentRates)} */}
        {/* {console.log(mappedQuotes)} */}
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
                    {mergedQuotes.map((quote, index) => {
                        return(
                            <tr key={index}>
                                <td>{quote.key}</td>
                                <td>{quote.liveRate}</td>
                                <td>{quote.historicalRate}</td>
                                <td>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>One</td>
                                                <td>Two</td>
                                                <td>Three</td>
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