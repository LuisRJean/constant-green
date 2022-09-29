import React from 'react';

import Link from 'next/link';
import { AiOutlineShop } from 'react-icons/ai';

import { Cart } from './';
import { useStateContext  } from '../pages/product/context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext(); 
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Constant Green</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShop />
        <span className="cart-items-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
      </div>
  )
}

export default Navbar