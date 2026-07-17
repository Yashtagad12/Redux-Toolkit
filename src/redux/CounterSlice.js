import { createSlice } from "@reduxjs/toolkit";

/**
 * Counter Slice
 * Manages counter state with increment, decrement, and reset actions
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        /**
         * Increment counter by 1
         */
        increment: (state) => {
            state.count += 1;
        },
        /**
         * Decrement counter by 1
         */
        decrement: (state) => {
            state.count -= 1;
        },
        /**
         * Reset counter to 0
         */
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;