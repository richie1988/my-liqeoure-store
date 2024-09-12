import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../context/storeContext'

function PlaceOrder() {

  const {getTotalCartAmount}=useContext(StoreContext);



  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="mult-fileds">
          <input type="text" placeholder='First Name' required/>
          <input type="text" placeholder='Last Name' required/>
        </div>
        <input type="email" placeholder='Email address' required/>
        <input type="text" placeholder='Street address' required/>
        <div className="mult-fileds">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="mult-fileds">
          <input type="text" placeholder='Zip Code' required/>
          <input type="text" placeholder='Country' required/>
        </div>
        <input type="text" placeholder='Phone Number'/>
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder