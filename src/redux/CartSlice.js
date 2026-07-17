import { createSlice } from "@reduxjs/toolkit";

/**
 * Cart Slice
 * Manages shopping cart state with item cart operations
 */
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalQuantity: 0,
    },
    reducers: {
        /**
         * Add item to cart (prepend new product object)
         */
        addItem: (state, reqData) => {
            const { cartobj } = reqData.payload;
            state.cart = [cartobj, ...state.cart];
            state.totalQuantity += 1;
        },
        /**
         * Remove item from cart by id
         */
        removeItem: (state, reqData) => {
            const { id } = reqData.payload;
            state.cart = state.cart.filter((item) => item.id !== id);
            state.totalQuantity = state.cart.length;
        },
        /**
         * Clear all items from cart
         */
        clearCart: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;