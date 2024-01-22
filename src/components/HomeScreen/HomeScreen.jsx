import Header from "../Header/Header.jsx";
import styles from "./HomeScreen.module.css"
import Card from "../Card/Card.jsx";
import FilterInput from "../FilterInput/FilterInput.jsx";
import CoinsList from "../CoinsList/CoinsList.jsx";

const HomeScreen = ({coins, setCoins, filteredCoins}) => {

    return <div className={styles.container}>
        <Header/>
        <Card/>
        <FilterInput coins={coins} setCoins={setCoins} filteredCoins={filteredCoins}/>
        <CoinsList coins={filteredCoins}/>
    </div>
}

export default HomeScreen