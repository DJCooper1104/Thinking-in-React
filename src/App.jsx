import React from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div className="app">
      <h1>Product Filter</h1>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
