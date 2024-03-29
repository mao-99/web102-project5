import styles from './header.module.css';
import { useState } from 'react';
export default function Header(){
    const [selectedCurrencies, setSelectedCurrencies] = useState([]);

    const handleCurrencyClick = (currency) => {
        const isSelected = selectedCurrencies.includes(currency);

        //isSelected ? setSelectedCurrencies(selectedCurrencies.filter(curr => curr!== currency)) : setSelectedCurrencies([...selectedCurrencies, currency]);
        if (isSelected){
            let filtered = selectedCurrencies.filter((curr) => curr !== currency);
            //console.log(filtered);
            //setSelectedCurrencies();
        }
        else{
            setSelectedCurrencies([...selectedCurrencies, currency]);
        }
    }

    return(
        <>
        <div className={`${styles.currencies}`}>
            <div className={`${styles.currency} ${selectedCurrencies.includes('USD') ? styles.selected: ''}`} onClick={handleCurrencyClick('USD')}>
                <p>USD</p>
            </div>
            <div className={`${styles.currency} ${selectedCurrencies.includes('USD') ? styles.selected: ''}`} onClick={handleCurrencyClick('USD')}>
                <p>GBP</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>EUR</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>JPY</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>CNY</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>RUB</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>CHF</p>
            </div>
            <div className={`${styles.currency}`}>
                <p>NGN</p>
            </div>
        </div>
        </>
    )
}