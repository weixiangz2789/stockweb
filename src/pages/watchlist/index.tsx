import React, { useState } from "react";

const StockWatchlist = () => {
  const [stocks, setStocks] = useState<string[]>([]);

  // Function to add a stock to the watchlist
  const addStock = (symbol: string): void => {
    setStocks((prevStocks: string[]) => [...prevStocks, symbol]);
  };

  // Function to remove a stock from the watchlist
  const removeStock = (symbol: string): void => {
    setStocks((prevStocks: string[]) =>
      prevStocks.filter((stock: string) => stock !== symbol)
    );
  };

  return (
    <div>
      <h1>Stock Watchlist</h1>
      <ul>
        {stocks.length > 0 ? (
          stocks.map((stock: string, index: number) => (
            <li key={index}>
              {stock} <button onClick={() => removeStock(stock)}>Remove</button>
            </li>
          ))
        ) : (
          <li>No stocks in watchlist. Add something!</li>
        )}
      </ul>
      <div>
        <input
          type="text"
          id="newStockInput"
          placeholder="Enter stock symbol"
        />
        <button
          onClick={() => {
            const inputElement = document.getElementById(
              "newStockInput"
            ) as HTMLInputElement;
            const symbol: string = inputElement.value;
            if (symbol) {
              addStock(symbol);
              inputElement.value = "";
            }
          }}
        >
          Add Stock
        </button>
      </div>
    </div>
  );
};

export default StockWatchlist;
