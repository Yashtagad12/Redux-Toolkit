import React from 'react'
import { increment, decrement, reset } from "../../redux/CounterSlice";
import { useDispatch } from 'react-redux';

const CounterButtons = () => {

    const dispatch = useDispatch();

    const addcount = () => {
        dispatch(increment())
    }

    const subtractcount = () => {
        dispatch(decrement())
    }

    const resetcount = () => {
        dispatch(reset())
    }

    return (
        <>
            <div className='flex justify-center align-center gap-2'>
                <button onClick={addcount} className="bg-emerald-700 text-white p-3 rounded-md border border-transparent transition-colors duration-200 hover:bg-white hover:border-emerald-700 hover:text-emerald-700"
                >Increment</button>
                <button onClick={subtractcount} className='bg-amber-300 text-black p-3 rounded-md border border-transparent transition-colors duration-200 hover:bg-white hover:border-amber-300'>Decrement</button>
                <button
                    onClick={resetcount}
                    className="bg-gray-700 text-white px-4 py-2 rounded ml-2"
                >
                    Reset
                </button>
            </div>
        </>
    )
}

export default CounterButtons;