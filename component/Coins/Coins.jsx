import styles from './coins.module.css'
import Link from 'next/link'; 

const Coins = (props) => {
  const {
    name,
    id,
    price,
    symbol,
    marketcap,
    volume,
    pricechange,
    image,
  } = props;
  return (
    <Link href="/coins/[id]" as={`/coins/${id}`} key={id}>
    <div className={styles.coin_container} >
      <div className={styles.coin_row}>
          <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>{volume.toLocaleString()}</p>

              {pricechange < 0 ? 
                <p className={styles.coin_percent,styles.red}>{pricechange.toFixed(2)}%</p> :
                <p className={styles.coin_percent, styles.green}>{pricechange.toFixed(2)}%</p> 
            }
            <p className={styles.coin_marketcap}>Mkt Cap:{marketcap.toLocaleString()}</p>
          </div>
      </div>
    </div>
    </Link>
  )
};

export default Coins;
