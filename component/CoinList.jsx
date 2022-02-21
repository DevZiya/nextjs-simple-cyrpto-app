import Coins from "./Coins/Coins";

export default function CoinList({ filterCoins }) {
  return (
    <>
      {filterCoins.map((coins) => (
        <Coins
          key={coins.id}
          name={coins.name}
          id={coins.id}
          price={coins.current_price}
          symbol = {coins.symbol}
          marketcap = {coins.market_cap}
          volume={coins.total_volume}
          pricechange = {coins.price_change_percentage_24h}
          image = {coins.image}
        />
      ))}
    </>
  );
}
