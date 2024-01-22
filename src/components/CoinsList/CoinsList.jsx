import styles from './CoinsList.module.css'

const CoinsList = ({coins}) => {
    return <div className={styles.listContainer}>
        {coins.map((coin) => {
            return (
                <li className={styles.coinItem} key={coin.uuid}>
                    <div className={styles.coinItemInfo}>
                        <img
                            className={styles.coinItemLogo}
                            src={coin.iconUrl}
                            alt={coin.name}
                        />
                        <p style={{color: coin.color === '#000000' || coin.color === '#3C3C3D' ? '#fff' : coin.color}}>
                            {coin.name}/USD</p>
                    </div>
                    <div className={styles.coinItemPrice}>
                        <p style={{color: coin.color === '#000000' || coin.color === '#3C3C3D' ? '#fff' : coin.color}}>
                            {(+coin.price).toFixed(2)} USD
                        </p>
                        <p style={{color: coin.color === '#000000' || coin.color === '#3C3C3D' ? '#fff' : coin.color}}>
                            {(+coin.btcPrice).toFixed(2)} BTC
                        </p>
                    </div>
                </li>
            )
        })}
    </div>
}

export default CoinsList