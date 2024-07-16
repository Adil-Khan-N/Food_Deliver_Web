import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {

  // const [itemCount,setItemCount] = useState(0)
  const {cartItems,setCartItems,removeFromCart,addToCart, url} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={url+ "/images/" + image} alt="" className="food-item-image" />
      </div>
          
        {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        :<div className='food-item-counter'>
          <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} className='babloo' alt="" />
          <p>{cartItems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} className='babloo' alt="" />
        </div>
      }
        
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
/* {!cartItems[id]
?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
:<div className='food-item-counter'>
<img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
<p>{cartItems}</p>
<img onClick={()=>{setItemCount(prev=>prev+1)}} src={assets.add_icon_green} alt="" />
</div>
} */




