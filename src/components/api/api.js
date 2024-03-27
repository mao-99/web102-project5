import { exchangeRateHost_apiKey as apiKey } from "./keys";
import axios from "axios";

const URL = `http://api.exchangerate.host/list?access_key=${apiKey}`;
const liveURL = `http://api.exchangerate.host/live?access_key=${apiKey}`
export async function fetchData(){
    const response = await axios.get(URL);
    const liveResponse = await axios.get(liveURL);
    //console.log(response)
    return [response, liveResponse];
}