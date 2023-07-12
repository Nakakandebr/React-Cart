
import React, { useContext } from 'react';
// import React ,{ useState} from 'react';

import { ShopContext} from '../../context/shop-context';

import './cart.css'



export const CartItem = (props) => {
    const  {id , productName, price ,productImage } = props.data;
    const {cartItems ,    removeFromCart,addToCart ,updateCartItemCount  } = useContext(ShopContext);

  return (
    <div className='cartItem'>
       
        <img src={productImage} alt={productName} />
        <div className='description'>
            <h6>{productName}</h6>
            <h6>${price}</h6>
            <div className='countHandler'>
                <button onClick={()=> removeFromCart(id)}>-</button>
            
                <input  value={cartItems[id]}  onChange={(e)=>updateCartItemCount (Number(e.target.value) , id)
                    
                
                } />


            

                
              
            
               <button onClick={()=> addToCart(id)}>+</button>

            </div >
            
            </div>
        </div>


       
    
  );
};



