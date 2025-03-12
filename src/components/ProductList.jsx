
import React from 'react'
import style from './productList.module.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

const products = [
    {name: 'Iphone 15', price: 100, id: 1},
    {name: 'Macbook Pro', price: 250, id: 2},
    {name: 'Airpods', price: 80, id: 3},

];

const ProductList = () => {
    const sendAction = useDispatch();

  return (
    <div className={style.shopContainer}>
        <h1 className="text-center mt-3">Redux Shopping Cart</h1>
        <div className={style.shoppingName}>
            <h3 className={style.products}>Products</h3>

                
                <div className={style.shopDiv}>
                    {/* MAPPING */}
                    {products.map((product) => 
                        <div key={product.id} className={style.productField}>
                        <div className={style.productCard}>
                            <div className={style.ItemBox}>
                                <h2 className={style.productName}>{product.name}</h2>
                                <p className={style.productPrice}>${product.price}</p>

                                <button className={style.add} onClick={() => sendAction(addItem(product))}>                                
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
        </div>
    </div>
  )
}

export default ProductList;

// import React from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../store/cartSlice";
// //Displaying Products and Dispatching Actions
// //the file defines a list of products with id, name and price
// //and lets users add products to cart

// const products = [
//   { id: 1, name: "iPhone 15", price: 1000 },
//   { id: 2, name: "MacBook Pro", price: 2500 },
//   { id: 3, name: "AirPods", price: 200 },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center">Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-md-4">
//             <div className="card shadow-sm p-3 mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">Price: ${product.price}</p>
//                 <button 
//                   className="btn btn-primary"
//                   onClick={() => dispatch(addItem(product))}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
