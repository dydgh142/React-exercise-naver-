import React from 'react';
import './PriceDiscount.css';

const PriceDiscount = () => {
  return (
    <div className="discount">
      <span className="discount-percent">88%</span>
      <div className="discount-wrap">
        <span className="real-price">56,760원</span>
        <div className="discount-price">
          <span>6,370</span>
          <span>원</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDiscount;
