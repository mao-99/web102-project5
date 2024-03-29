import { useState, useEffect } from "react"
import { fetchData } from "./api/api"
import axios from "axios"
export default function Index() {
    // const [allCurrencies, setAllCurrencies] = useState([])
    // useEffect(() => {
    //     const fetchCurrencies = async () => {
    //         let [data, liveData] = await fetchData();
    //         const currencies = data.data.currencies;
    //         setAllCurrencies(currencies);
    //         console.log(currencies);
    //     };
    //     fetchCurrencies();
    // }, [])
    // const mappedArray = Object.keys(allCurrencies).map(key => {
    //     return {
    //         key: key,
    //         value: allCurrencies[key]
    //     };
    //     });

    const mappedArray = [
        {
            "key": "AED",
            "value": "United Arab Emirates Dirham"
        },
        {
            "key": "AFN",
            "value": "Afghan Afghani"
        },
        {
            "key": "ALL",
            "value": "Albanian Lek"
        },
        {
            "key": "AMD",
            "value": "Armenian Dram"
        },
        {
            "key": "ANG",
            "value": "Netherlands Antillean Guilder"
        },
        {
            "key": "AOA",
            "value": "Angolan Kwanza"
        },
        {
            "key": "ARS",
            "value": "Argentine Peso"
        },
        {
            "key": "AUD",
            "value": "Australian Dollar"
        },
        {
            "key": "AWG",
            "value": "Aruban Florin"
        },
        {
            "key": "AZN",
            "value": "Azerbaijani Manat"
        },
        {
            "key": "BAM",
            "value": "Bosnia-Herzegovina Convertible Mark"
        },
        {
            "key": "BBD",
            "value": "Barbadian Dollar"
        },
        {
            "key": "BDT",
            "value": "Bangladeshi Taka"
        },
        {
            "key": "BGN",
            "value": "Bulgarian Lev"
        },
        {
            "key": "BHD",
            "value": "Bahraini Dinar"
        },
        {
            "key": "BIF",
            "value": "Burundian Franc"
        },
        {
            "key": "BMD",
            "value": "Bermudan Dollar"
        },
        {
            "key": "BND",
            "value": "Brunei Dollar"
        },
        {
            "key": "BOB",
            "value": "Bolivian Boliviano"
        },
        {
            "key": "BRL",
            "value": "Brazilian Real"
        },
        {
            "key": "BSD",
            "value": "Bahamian Dollar"
        },
        {
            "key": "BTC",
            "value": "Bitcoin"
        },
        {
            "key": "BTN",
            "value": "Bhutanese Ngultrum"
        },
        {
            "key": "BWP",
            "value": "Botswanan Pula"
        },
        {
            "key": "BYN",
            "value": "New Belarusian Ruble"
        },
        {
            "key": "BYR",
            "value": "Belarusian Ruble"
        },
        {
            "key": "BZD",
            "value": "Belize Dollar"
        },
        {
            "key": "CAD",
            "value": "Canadian Dollar"
        },
        {
            "key": "CDF",
            "value": "Congolese Franc"
        },
        {
            "key": "CHF",
            "value": "Swiss Franc"
        },
        {
            "key": "CLF",
            "value": "Chilean Unit of Account (UF)"
        },
        {
            "key": "CLP",
            "value": "Chilean Peso"
        },
        {
            "key": "CNY",
            "value": "Chinese Yuan"
        },
        {
            "key": "CNH",
            "value": "Chinese Yuan Offshore"
        },
        {
            "key": "COP",
            "value": "Colombian Peso"
        },
        {
            "key": "CRC",
            "value": "Costa Rican Colón"
        },
        {
            "key": "CUC",
            "value": "Cuban Convertible Peso"
        },
        {
            "key": "CUP",
            "value": "Cuban Peso"
        },
        {
            "key": "CVE",
            "value": "Cape Verdean Escudo"
        },
        {
            "key": "CZK",
            "value": "Czech Republic Koruna"
        },
        {
            "key": "DJF",
            "value": "Djiboutian Franc"
        },
        {
            "key": "DKK",
            "value": "Danish Krone"
        },
        {
            "key": "DOP",
            "value": "Dominican Peso"
        },
        {
            "key": "DZD",
            "value": "Algerian Dinar"
        },
        {
            "key": "EGP",
            "value": "Egyptian Pound"
        },
        {
            "key": "ERN",
            "value": "Eritrean Nakfa"
        },
        {
            "key": "ETB",
            "value": "Ethiopian Birr"
        },
        {
            "key": "EUR",
            "value": "Euro"
        },
        {
            "key": "FJD",
            "value": "Fijian Dollar"
        },
        {
            "key": "FKP",
            "value": "Falkland Islands Pound"
        },
        {
            "key": "GBP",
            "value": "British Pound Sterling"
        },
        {
            "key": "GEL",
            "value": "Georgian Lari"
        },
        {
            "key": "GGP",
            "value": "Guernsey Pound"
        },
        {
            "key": "GHS",
            "value": "Ghanaian Cedi"
        },
        {
            "key": "GIP",
            "value": "Gibraltar Pound"
        },
        {
            "key": "GMD",
            "value": "Gambian Dalasi"
        },
        {
            "key": "GNF",
            "value": "Guinean Franc"
        },
        {
            "key": "GTQ",
            "value": "Guatemalan Quetzal"
        },
        {
            "key": "GYD",
            "value": "Guyanaese Dollar"
        },
        {
            "key": "HKD",
            "value": "Hong Kong Dollar"
        },
        {
            "key": "HNL",
            "value": "Honduran Lempira"
        },
        {
            "key": "HRK",
            "value": "Croatian Kuna"
        },
        {
            "key": "HTG",
            "value": "Haitian Gourde"
        },
        {
            "key": "HUF",
            "value": "Hungarian Forint"
        },
        {
            "key": "IDR",
            "value": "Indonesian Rupiah"
        },
        {
            "key": "ILS",
            "value": "Israeli New Sheqel"
        },
        {
            "key": "IMP",
            "value": "Manx pound"
        },
        {
            "key": "INR",
            "value": "Indian Rupee"
        },
        {
            "key": "IQD",
            "value": "Iraqi Dinar"
        },
        {
            "key": "IRR",
            "value": "Iranian Rial"
        },
        {
            "key": "ISK",
            "value": "Icelandic Króna"
        },
        {
            "key": "JEP",
            "value": "Jersey Pound"
        },
        {
            "key": "JMD",
            "value": "Jamaican Dollar"
        },
        {
            "key": "JOD",
            "value": "Jordanian Dinar"
        },
        {
            "key": "JPY",
            "value": "Japanese Yen"
        },
        {
            "key": "KES",
            "value": "Kenyan Shilling"
        },
        {
            "key": "KGS",
            "value": "Kyrgystani Som"
        },
        {
            "key": "KHR",
            "value": "Cambodian Riel"
        },
        {
            "key": "KMF",
            "value": "Comorian Franc"
        },
        {
            "key": "KPW",
            "value": "North Korean Won"
        },
        {
            "key": "KRW",
            "value": "South Korean Won"
        },
        {
            "key": "KWD",
            "value": "Kuwaiti Dinar"
        },
        {
            "key": "KYD",
            "value": "Cayman Islands Dollar"
        },
        {
            "key": "KZT",
            "value": "Kazakhstani Tenge"
        },
        {
            "key": "LAK",
            "value": "Laotian Kip"
        },
        {
            "key": "LBP",
            "value": "Lebanese Pound"
        },
        {
            "key": "LKR",
            "value": "Sri Lankan Rupee"
        },
        {
            "key": "LRD",
            "value": "Liberian Dollar"
        },
        {
            "key": "LSL",
            "value": "Lesotho Loti"
        },
        {
            "key": "LTL",
            "value": "Lithuanian Litas"
        },
        {
            "key": "LVL",
            "value": "Latvian Lats"
        },
        {
            "key": "LYD",
            "value": "Libyan Dinar"
        },
        {
            "key": "MAD",
            "value": "Moroccan Dirham"
        },
        {
            "key": "MDL",
            "value": "Moldovan Leu"
        },
        {
            "key": "MGA",
            "value": "Malagasy Ariary"
        },
        {
            "key": "MKD",
            "value": "Macedonian Denar"
        },
        {
            "key": "MMK",
            "value": "Myanma Kyat"
        },
        {
            "key": "MNT",
            "value": "Mongolian Tugrik"
        },
        {
            "key": "MOP",
            "value": "Macanese Pataca"
        },
        {
            "key": "MRU",
            "value": "Mauritanian Ouguiya"
        },
        {
            "key": "MUR",
            "value": "Mauritian Rupee"
        },
        {
            "key": "MVR",
            "value": "Maldivian Rufiyaa"
        },
        {
            "key": "MWK",
            "value": "Malawian Kwacha"
        },
        {
            "key": "MXN",
            "value": "Mexican Peso"
        },
        {
            "key": "MYR",
            "value": "Malaysian Ringgit"
        },
        {
            "key": "MZN",
            "value": "Mozambican Metical"
        },
        {
            "key": "NAD",
            "value": "Namibian Dollar"
        },
        {
            "key": "NGN",
            "value": "Nigerian Naira"
        },
        {
            "key": "NIO",
            "value": "Nicaraguan Córdoba"
        },
        {
            "key": "NOK",
            "value": "Norwegian Krone"
        },
        {
            "key": "NPR",
            "value": "Nepalese Rupee"
        },
        {
            "key": "NZD",
            "value": "New Zealand Dollar"
        },
        {
            "key": "OMR",
            "value": "Omani Rial"
        },
        {
            "key": "PAB",
            "value": "Panamanian Balboa"
        },
        {
            "key": "PEN",
            "value": "Peruvian Nuevo Sol"
        },
        {
            "key": "PGK",
            "value": "Papua New Guinean Kina"
        },
        {
            "key": "PHP",
            "value": "Philippine Peso"
        },
        {
            "key": "PKR",
            "value": "Pakistani Rupee"
        },
        {
            "key": "PLN",
            "value": "Polish Zloty"
        },
        {
            "key": "PYG",
            "value": "Paraguayan Guarani"
        },
        {
            "key": "QAR",
            "value": "Qatari Rial"
        },
        {
            "key": "RON",
            "value": "Romanian Leu"
        },
        {
            "key": "RSD",
            "value": "Serbian Dinar"
        },
        {
            "key": "RUB",
            "value": "Russian Ruble"
        },
        {
            "key": "RWF",
            "value": "Rwandan Franc"
        },
        {
            "key": "SAR",
            "value": "Saudi Riyal"
        },
        {
            "key": "SBD",
            "value": "Solomon Islands Dollar"
        },
        {
            "key": "SCR",
            "value": "Seychellois Rupee"
        },
        {
            "key": "SDG",
            "value": "South Sudanese Pound"
        },
        {
            "key": "SEK",
            "value": "Swedish Krona"
        },
        {
            "key": "SGD",
            "value": "Singapore Dollar"
        },
        {
            "key": "SHP",
            "value": "Saint Helena Pound"
        },
        {
            "key": "SLE",
            "value": "Sierra Leonean Leone"
        },
        {
            "key": "SLL",
            "value": "Sierra Leonean Leone"
        },
        {
            "key": "SOS",
            "value": "Somali Shilling"
        },
        {
            "key": "SRD",
            "value": "Surinamese Dollar"
        },
        {
            "key": "STD",
            "value": "São Tomé and Príncipe Dobra"
        },
        {
            "key": "SVC",
            "value": "Salvadoran Colón"
        },
        {
            "key": "SYP",
            "value": "Syrian Pound"
        },
        {
            "key": "SZL",
            "value": "Swazi Lilangeni"
        },
        {
            "key": "THB",
            "value": "Thai Baht"
        },
        {
            "key": "TJS",
            "value": "Tajikistani Somoni"
        },
        {
            "key": "TMT",
            "value": "Turkmenistani Manat"
        },
        {
            "key": "TND",
            "value": "Tunisian Dinar"
        },
        {
            "key": "TOP",
            "value": "Tongan Paʻanga"
        },
        {
            "key": "TRY",
            "value": "Turkish Lira"
        },
        {
            "key": "TTD",
            "value": "Trinidad and Tobago Dollar"
        },
        {
            "key": "TWD",
            "value": "New Taiwan Dollar"
        },
        {
            "key": "TZS",
            "value": "Tanzanian Shilling"
        },
        {
            "key": "UAH",
            "value": "Ukrainian Hryvnia"
        },
        {
            "key": "UGX",
            "value": "Ugandan Shilling"
        },
        {
            "key": "USD",
            "value": "United States Dollar"
        },
        {
            "key": "UYU",
            "value": "Uruguayan Peso"
        },
        {
            "key": "UZS",
            "value": "Uzbekistan Som"
        },
        {
            "key": "VEF",
            "value": "Venezuelan Bolívar Fuerte"
        },
        {
            "key": "VES",
            "value": "Sovereign Bolivar"
        },
        {
            "key": "VND",
            "value": "Vietnamese Dong"
        },
        {
            "key": "VUV",
            "value": "Vanuatu Vatu"
        },
        {
            "key": "WST",
            "value": "Samoan Tala"
        },
        {
            "key": "XAF",
            "value": "CFA Franc BEAC"
        },
        {
            "key": "XAG",
            "value": "Silver (troy ounce)"
        },
        {
            "key": "XAU",
            "value": "Gold (troy ounce)"
        },
        {
            "key": "XCD",
            "value": "East Caribbean Dollar"
        },
        {
            "key": "XDR",
            "value": "Special Drawing Rights"
        },
        {
            "key": "XOF",
            "value": "CFA Franc BCEAO"
        },
        {
            "key": "XPF",
            "value": "CFP Franc"
        },
        {
            "key": "YER",
            "value": "Yemeni Rial"
        },
        {
            "key": "ZAR",
            "value": "South African Rand"
        },
        {
            "key": "ZMK",
            "value": "Zambian Kwacha (pre-2013)"
        },
        {
            "key": "ZMW",
            "value": "Zambian Kwacha"
        },
        {
            "key": "ZWL",
            "value": "Zimbabwean Dollar"
        }
    ]

    return (
        <>
        <div className="index">
            <h2>Currency Index</h2>
            {mappedArray.map((currency, index) => {
                return (<div key={index} className="currencyRow"><strong>{currency.key} : </strong>{currency.value}</div>)
            })}
        </div>
        </>
    )
}