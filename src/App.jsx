import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import {useState} from "react";
import {useEffect} from "react";
import {getCoins} from "./api/cryptoApi.js";

function App() {

    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getCoins()
                setCoins(res)
                setFilteredCoins(res)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, []);

    return (
        <>
            <HomeScreen coins={coins} setCoins={setFilteredCoins} filteredCoins={filteredCoins}/>
        </>
    )
}

export default App
