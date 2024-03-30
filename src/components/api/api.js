import { exchangeRateHost_apiKey as apiKey } from "../../assets/keys";
import axios from "axios";

const DATE = '2024-03-27';
export function generateDates(number) {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index (0 for January)
    var day = today.getDate();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    var formattedDate = year + '-' + month + '-' + day;

    let allDates = [];
    allDates = [...allDates, formattedDate];

    var newDate = new Date(year, month - 1, day); // Creating a new date object with current date

    // Check if the number of days is greater than the current date of the month
    if (number > day) {
        // Reduce the month by one
        newDate.setMonth(newDate.getMonth() - 1);
        var lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate();
        while (number > 0) {
            if (number > lastDayOfPreviousMonth) {
                allDates.unshift(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${lastDayOfPreviousMonth}`);
                number -= lastDayOfPreviousMonth;
                newDate.setMonth(newDate.getMonth() - 1);
                lastDayOfPreviousMonth = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0).getDate();
            } else {
                allDates.unshift(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${lastDayOfPreviousMonth - number + 1}`);
                break;
            }
        }
    } else {
        // If the number of days is not greater than the current date of the month, just subtract the days
        var newDay = day - 1;
        //allDates.unshift(`${year}-${month}-${newDay}`);
        while(number > 1){
            var nextDay = newDay - 1;
            allDates.unshift(`${year}-${month}-${newDay}`);
            newDay = newDay - 1;
            number--;
        }
    }
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