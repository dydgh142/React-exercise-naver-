import React from 'react';
import './style.css';
import {
  ProductMain,
  PriceDiscount,
  Delivery,
  Counter,
  PurchaseButton,
} from './components/index';

export default function App() {
  return (
    <div className="App">
      <ProductMain />
      <PriceDiscount />
      <Delivery />
      <Counter />
      <PurchaseButton />
    </div>
  );
}
