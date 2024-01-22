import styles from './Card.module.css'
import {useState} from "react";
import {formatDate} from "../../helpers/formatDate.js";

const Card = () => {
    const [balance, setBalance] = useState(0)
    return <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div className={styles.balanceContainer}>
                <p className={styles.userBalance}>USER BALANCE</p>
                <p className={styles.date}>{formatDate(new Date())}</p>
                <button onClick={() => setBalance(balance + 1000)} className={styles.button}>Add balance</button>
            </div>
            <div className={styles.userData}>
                <p className={styles.username}>Artsiom Kiyashko</p>
                <p className={styles.balance}>{balance}$</p>
            </div>
        </div>
    </div>
}

export default Card