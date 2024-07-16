import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setCartItems, food_list, removeFromCart, addToCart, getTotalCardAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <React.Fragment key={item._id}>
              <div className='cart-items-title cart-items-item'>
                <img src={url + "/images/" + item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </React.Fragment>
          );
        }
        return null;
      })}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCardAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCardAmount() === 0 ? 0 : getTotalCardAmount() + 5}</b>
            </div>
          </div>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo card, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Promo code here' />
              <button>Submit </button>
            </div>
          </div>
        </div>
      </div>
      <button className='payment' onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Cart;
