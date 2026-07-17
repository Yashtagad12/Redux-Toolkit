import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../../redux/CartSlice';

const Cart = () => {

    const dispatch = useDispatch()

    // Get all cart items from Redux
    const cart = useSelector((myStore) => myStore.cartStore.cart);
    const totalQuantity = useSelector((myStore) => myStore.cartStore.totalQuantity);

    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

    // Calculate tax (5%)
    const tax = subtotal * 0.05;

    // Shipping cost
    const shipping = 15.00;

    // Calculate grand total
    const grandTotal = subtotal + tax + shipping;

    // Handle remove item
    const handleRemove = (id) => {
        dispatch(removeItem({ id }))
    }

    // Handle clear cart
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    // If cart is empty
    if (cart.length === 0) {
        return (
            <div className="p-6 md:p-10 bg-white rounded-xl shadow-gray-400">
                <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>
                <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
        )
    }

    return (
        <div className="p-6 md:p-10 bg-white rounded-xl shadow-gray-400">

            <h1 className="text-4xl font-bold mb-10">
                Shopping Cart
            </h1>

            {/* Column Labels */}
            <div className="hidden md:grid grid-cols-12 gap-4 border-b pb-4 mb-6 text-gray-400 text-sm uppercase">

                <div className="col-span-2">Image</div>

                <div className="col-span-4">
                    Product
                </div>

                <div className="col-span-1">
                    Price
                </div>

                <div className="col-span-2">
                    Quantity
                </div>

                <div className="col-span-1">
                    Remove
                </div>

                <div className="col-span-2 text-right">
                    Total
                </div>

            </div>

            {/* Loop through cart items */}
            {
                cart.map((item) => (
                    <div key={item.id} className="border-b pb-8 mb-8">

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

                            <div className="md:col-span-2 flex justify-center">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-28 h-28 object-cover rounded-lg"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300?text=Product+Image'
                                    }}
                                />

                            </div>

                            <div className="md:col-span-4">

                                <h3 className="font-semibold text-lg">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 mt-2 leading-7 line-clamp-2">
                                    {item.description}
                                </p>

                            </div>

                            <div className="md:col-span-1 font-medium">
                                ${item.price}
                            </div>

                            <div className="md:col-span-2">

                                <input
                                    type="number"
                                    defaultValue="1"
                                    className="w-20 border rounded-md px-3 py-2"
                                />

                            </div>

                            <div className="md:col-span-1">

                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition"
                                >
                                    Remove
                                </button>

                            </div>

                            <div className="md:col-span-2 text-right font-semibold text-lg">
                                ${item.price}
                            </div>

                        </div>

                    </div>
                ))
            }


            {/* Totals */}

            <div className="flex justify-end">

                <div className="w-full md:w-96 space-y-4">

                    <div className="flex justify-between border-b pb-3">

                        <span className="text-gray-500">
                            Subtotal
                        </span>

                        <span className="font-medium">
                            ${subtotal.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between border-b pb-3">

                        <span className="text-gray-500">
                            Tax (5%)
                        </span>

                        <span className="font-medium">
                            ${tax.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between border-b pb-3">

                        <span className="text-gray-500">
                            Shipping
                        </span>

                        <span className="font-medium">
                            ${shipping.toFixed(2)}
                        </span>

                    </div>

                    <div className="flex justify-between text-2xl font-bold pt-2">

                        <span>
                            Grand Total
                        </span>

                        <span>
                            ${grandTotal.toFixed(2)}
                        </span>

                    </div>

                    <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-md text-xl font-semibold transition">
                        Checkout
                    </button>

                    <button
                        onClick={handleClearCart}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-semibold transition"
                    >
                        Clear Cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Cart;