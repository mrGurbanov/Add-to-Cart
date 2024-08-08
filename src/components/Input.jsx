import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

export default function Input({handleAddToCart}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setQuantity(value);
    }
  };

  const incQuantity = () => {
    if (quantity < 100) {
      setQuantity(state => state + 1);
    }
  };

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  };

  // const currentTargetQuantity = () => {e.currentTarget.quantity.value} 

  return (
    <form onSubmit={e => {
      e.preventDefault();
      // console.log(e.currentTarget.quantity.value);
      
      handleAddToCart(e.currentTarget.quantity.value);
    }} className="flex items-center">
      <div className="flex items-center mr-2">
        <button onClick={e => {
          e.preventDefault();
          decQuantity();
        }} 
        className="px-5 py-1 border rounded-full">-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="100"
          step="1"
          name="quantity"
          className="w-16 text-center bg-white [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button onClick={e => {
          e.preventDefault(); 
          incQuantity()
        }} 
          className="px-4 py-1 border rounded-full">+</button>
      </div>
      <button type='submit' className="whitespace-nowrap flex items-center py-[10px] px-[12px] bg-black text-white border border-[#212529] rounded-lg cursor-pointer hover:bg-[#474343] duration-[200ms]">
        <FaCartShopping className="mr-1" />
        Add to cart
      </button>
    </form>
  );
}