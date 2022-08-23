import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import Coin from './components/Coin';
import logo from './ozo.png';

function App() {

  const [listOfcoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=52").then((res) => {
      console.log(res.data)
      setListOfCoins(res.data.coins)
    })

  }, []);

  const filteredCoins = listOfcoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
  })

  return (

    <div className="App">
      <div className='cryptoHeader'>
        <div>
          <img className='logo' src={logo} />
        </div>
        <input type="text" placeholder='Bitcoin...' onChange={(event) => {
          setSearchWord(event.target.value)
        }}></input>
      </div>
      <div className='cryptoDisplay'>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              linkWeb={coin.websiteUrl}
            />
          )
        })}
      </div>

    </div>
  );
}

export default App;
