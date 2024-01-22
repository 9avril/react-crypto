import styles from './FilterInput.module.css'
import {useState} from "react";
import {useEffect} from "react";

const FilterInput = ({coins, setCoins}) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const filteredCoins = coins.filter((coin) => {
            return coin.name.toLowerCase().includes(value.toLowerCase());
        });
        setCoins(filteredCoins);
    }, [value]);

    return (
        <div className={styles.inputBlock}>
            <input
                onChange={(event) => setValue(event.target.value)}
                className={styles.input}
                placeholder={'Bitcoin'}
                type="text"
                value={value}
            />
        </div>
    )
}

export default FilterInput