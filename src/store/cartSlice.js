import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload; //action.payload is item to be added
            const existingProduct = state.cart.find(item => item.id === product.id); //product object: name, price, id

            if (existingProduct) {
                existingProduct.quantity = existingProduct.quantity + 1;

            } else {
                state.cart.push({...product, quantity: 1});
            }
            state.totalPrice += product.price;  
            //cart[0] and product are the same
            //...product represents the new object state of the product
        },

        removeItem: (state, action) => {
            const id = action.payload;
            const itemToRemove = state.cart.find(item => item.id === id); //return the position or index of the object or product
            
            if (itemToRemove) {
                if(itemToRemove.quantity > 1) {
                    itemToRemove.quantity = itemToRemove.quantity - 1;
                }

                else {
                    state.cart = state.cart.filter(item => item.id !== id);
                    //state.cart.splice(index, 1) should not be used
                }
                state.totalPrice -= itemToRemove.price;
            }

        },
    },

});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart: [],
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const product = action.payload;
//             const existingProduct = state.cart.find(item => item.id === product.id);
//             if (existingProduct) {
//                 existingProduct.quantity = existingProduct.quantity + 1;
//             } else {
//                 state.cart.push({...product, quantity:1});
//             }

//             state.totalPrice = state.totalPrice + product.price;

//         },

//         removeItem: (state, action) => {
//             const id = action.payload;
//             const itemToRemove = state.cart.find(item => item.id === id);

//             if (itemToRemove) {
//                 if(itemToRemove.quantity > 1) {
//                     itemToRemove.quantity = itemToRemove.quantity - 1;
//                 } else {
//                     state.cart = state.cart.filter(item => item.id !== id);
//                 }

//                 state.totalPrice = state.totalPrice - itemToRemove.price;
//             }
//         },      
//     },
// });

// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
//   totalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const product = action.payload; //Extract full product info: id, name, price
//       const existingItem = state.cart.find((item) => item.id === product.id);
//       //matching item (object) is the same as p

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.cart.push({ ...product, quantity: 1 });
//       }
// //{..product, quantity: 1} creates a brand-new object with
// //quantity, so cart[0] and product are now different objects

//       state.totalPrice += product.price;
//     },
//     removeItem: (state, action) => {
//       const id = action.payload; //we only need the id
//       const itemToRemove = state.cart.find((item) => item.id === id);

//       if (itemToRemove) {
//         if (itemToRemove.quantity > 1) {
//           itemToRemove.quantity -= 1; // Decrease quantity instead of full removal
//         } else {
//           state.cart = state.cart.filter((item) => item.id !== id);
//         }
//         state.totalPrice -= itemToRemove.price;
//       }
//     },
//   },
// });

// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     items: [], //This is the cart items
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             state.items.push(action.payload); //action.payload is the item to be added
//             state.totalPrice = state.totalPrice + action.payload.price;
//         },

//         removeItem: (state, action) => {
//             const index = state.items.findIndex(item => item.id === action.payload); // Ensure payload is an ID
//             if (index !== -1) {
//                 console.log("Removing item:", state.items[index]); // Debugging
//                 console.log("Total before:", state.totalPrice);
                
//                 state.totalPrice -= state.items[index].price;
//                 state.items.splice(index, 1);
        
//                 console.log("Total after:", state.totalPrice);
//             } else {
//                 console.warn("Item not found with ID:", action.payload);
//             }
//         },
        
        

//     },

// });



// export const {addItem, removeItem} = cartSlice.actions;

// export default cartSlice.reducer;






// // // import {createSlice}
// // import { createSlice } from "@reduxjs/toolkit";


// // //this is the Redux state
// // //this file handles the carts state updates
// // const initialState = {
// //     items:[], //This is the state (cart items)
// //     totalPrice: 0,
// // };

// // const cartSlice = createSlice({
// //     name: 'cart',
// //     initialState,
// //     reducers: {
// //         addItem: (state, action) => {
// //             state.items.push(action.payload);
// //             state.totalPrice += action.payload.price;
// //     },

// //         removeItem:(state, action) => {
// //             const index = state.items.findIndex(item => item.id == action.payload) 
// //             //action.payload contains the item to be added
// //             if (index !== -1) {
// //                 state.totalPrice -= state.items[index].price;
// //                 state.items.splice(index, 1);
// //             }
// //         },
// //     },

// // });

// // export const {addItem, removeItem} = cartSlice.actions;

// // export default cartSlice.reducer;

