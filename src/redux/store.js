import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import cartSlice from "./CartSlice";

const store = configureStore(
    {
        reducer: {
            counterStore: counterSlice,
            cartStore: cartSlice,
        }
    }
)

export default store;