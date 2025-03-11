import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart); //Gets {items: [...], totalPrice: 15}
//   const dispatch = useDispatch();
    const sendAction = useDispatch();

  return (
    <div className="container mt-4">
        <h2 className="text-center">Shopping Cart</h2>
        {cart.items.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
        ) : (
            <div className="list-group">
            {cart.items.map((item) => (
                <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price}
                <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => sendAction(removeItem(item.id))}
                >
                    Remove
                </button>
                </div>
            ))}
            </div>
        )}
        <h4 className="text-end mt-3">Total: ${cart.totalPrice}</h4>
    </div>
  );
};

export default Cart;
