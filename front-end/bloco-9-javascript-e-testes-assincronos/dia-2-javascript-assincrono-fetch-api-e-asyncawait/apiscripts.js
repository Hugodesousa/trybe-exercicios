const listCoin = (coins) => {
  const topCoins = coins.filter((coin) => coin.rank <= 10)
  const endTopCoins = topCoins
    .map(({ name, priceUsd, symbol }) => ({ name, priceUsd, symbol }));
  endTopCoins.forEach(({ name, priceUsd, symbol }) => {
  const olCoin = document.getElementById('listCoins')
   const li = document.createElement('li')
  li.innerHTML = `${name} ${symbol} esta valendo ${priceUsd}`
  olCoin.appendChild(li)
  });
    
 
  
  
};

const getCoin = () => {
  const url = 'https://api.coincap.io/v2/assets'
  fetch(url).then((response) => response.json())
    .then((dateCoin) => listCoin(dateCoin.data))

};
getCoin()