import React from "react";
import "./Placeorder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
const Placeorder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    
    <form className="place-order">
      <div className="placeorder-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first name" />
          <input placeholder="last name" type="text" />
        </div>
        <input type="email" placeholder="Email Address"/><input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" /><input type="text" placeholder="State"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="ZipCode" /><input type="text" placeholder="country"/>
        </div>
        <input type="text" placeholder="Phone" name="" id="" />
      </div>
      <div className="placeorder-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+2}</p>
            </div>
            
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
