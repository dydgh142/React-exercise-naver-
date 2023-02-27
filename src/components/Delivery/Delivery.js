import React from 'react';
import './Delivery.css';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-wrapper">
        <span className="subtitle">택배배송</span>
        <span className="line">|</span>
        <span className="delivery-price">3000원</span>
        <span className="delivery-text">(주문시 결제)</span>
      </div>
      <div>10개마다 부과</div>
    </div>
  );
};

export default Delivery;
