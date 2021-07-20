import React from 'react';
import Stock from '../components/Stock'

const StockContainer = props =>  {
  let stocks = props.stocks

  return (
    <div className="stockContainer">
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={props.addPortfolio} /> )}
    </div>
  );
}

export default StockContainer