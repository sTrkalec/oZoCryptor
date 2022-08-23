import React from "react";

function Coin({ name, icon, price, symbol, linkWeb }) {
    return (
        <div className="coin">
            <h1>{name}</h1>
            <img src={icon} />
            <h3>$ {price.toFixed(2)}</h3>
            <h3>Symbol: {symbol}</h3>
            <a target="_blank" href={linkWeb}><button>Web Site {name}</button></a>
        </div>
    )
}

export default Coin;