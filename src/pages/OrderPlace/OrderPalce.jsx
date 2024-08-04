import React, { useContext } from 'react'
import './OrderPlace.css'
import { StoreContext } from '../../context/StoreContext'

function OrderPalce() {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
                    <h2>cart totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivary Fee</p>
                            <p>$2</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount() + 2}</b>
                        </div>

                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
      </div>
    </div>
  )
}

export default OrderPalce 
