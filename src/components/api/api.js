import { exchangeRateHost_apiKey as apiKey } from "../../assets/keys";
import axios from "axios";

//const DATE = '2024-03-27';
export function generateDates(number){
    //This function generates all the dates that fall within the range of the provided parameter.
    //The dates go from the current date and goes back by one day for each generated date.
    //It takes a number as a parameter, and returns an array of previous dates in the format: YYYY-MM--DD
    //Output: ['YYYY-MM-DD', 'YYYY-MM-DD', ...]
    let today = new Date();
    const allDates = [];
    let currentDate = String(today.getDate()).padStart(2,'0');
    let currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    let currentYear = String(today.getFullYear());
    let currDate;
    let myDate = new Date(currentYear, currentMonth-1, currentDate);
    do{
      if (myDate.getDate() > 0){
        currentDate = String(myDate.getDate()).padStart(2,'0');
        currentMonth = String(myDate.getMonth() + 1).padStart(2,'0')
        currentYear = String(myDate.getFullYear())
        currDate = `${currentYear}-${currentMonth}-${currentDate}`;
        allDates.push(currDate);
        myDate.setDate(myDate.getDate() - 1);
        number--;
      }
    }
      while (number > 0)
    //console.log(currentDate);
    return allDates;
  }

//const URL = `http://api.exchangerate.host/list?access_key=${apiKey}`;
//const liveURL = `http://api.exchangerate.host/live?access_key=${apiKey}&source=${}`
//const historicalURL = `http://api.exchangerate.host/historical?access_key=${apiKey}&date=${DATE}`;
let historicalResponses = [];

export async function fetchHistoricalData(timeFrame){
    const promises = generateDates(timeFrame).map(async (date, index) =>{
        const historicalURL = `http://api.exchangerate.host/historical?access_key=${apiKey}&date=${date}`;
        const historicalResponse = await axios.get(historicalURL);
        //console.log(historicalResponse);
        //historicalResponses.push(historicalResponse.data.quotes);
        return historicalResponse.data.quotes;
    })
    return Promise.all(promises);
}

export async function fetchData(){
    //const response = await axios.get(URL);
    const liveURL = `http://api.exchangerate.host/live?access_key=${apiKey}`;
    const liveResponse = await axios.get(liveURL);
    //const historicalResponse = await axios.get(historicalURL);
    // const historicalResponses = [];

    //console.log(response)
    return [liveResponse];
}