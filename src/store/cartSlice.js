import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [], //This is the cart items
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload); //action.payload is the item to be added
            state.totalPrice = state.totalPrice + action.payload.price;
        },

        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id == action.payload);
            if (index !== -1) {
                state.totalPrice = state.totalPrice - state.items[index].price;
                state.items.splice(index, 1);

            }
        },

    },

});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;






// // import {createSlice}
// import { createSlice } from "@reduxjs/toolkit";


// //this is the Redux state
// //this file handles the carts state updates
// const initialState = {
//     items:[], //This is the state (cart items)
//     totalPrice: 0,
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             state.items.push(action.payload);
//             state.totalPrice += action.payload.price;
//     },

//         removeItem:(state, action) => {
//             const index = state.items.findIndex(item => item.id == action.payload) 
//             //action.payload contains the item to be added
//             if (index !== -1) {
//                 state.totalPrice -= state.items[index].price;
//                 state.items.splice(index, 1);
//             }
//         },
//     },

// });

// export const {addItem, removeItem} = cartSlice.actions;

// export default cartSlice.reducer;

