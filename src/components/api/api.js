import { exchangeRateHost_apiKey as apiKey } from "../../assets/keys";
import axios from "axios";

const DATE = '2024-03-27'
const URL = `http://api.exchangerate.host/list?access_key=${apiKey}`;
const liveURL = `http://api.exchangerate.host/live?access_key=${apiKey}`
const historicalURL = `http://api.exchangerate.host/historical?access_key=${apiKey}&date=${DATE}`
export async function fetchData(){
    const response = await axios.get(URL);
    const liveResponse = await axios.get(liveURL);
    const historicalResponse = await axios.get(historicalURL);
    //console.log(response)
    return [response, liveResponse, historicalResponse];
}