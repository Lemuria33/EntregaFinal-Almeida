import { useState } from "react";
import CartContext from "./CartContext";

function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    console.log(cart);

    function addItem(item, quantity) {

        const id = cart.findIndex((cartItem) => cartItem.id === item.id)

        if (id !== -1) {
            const updateCart = [...cart];
            updateCart[id].quantity += quantity;
            setCart(updateCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    function removeItem(id) {
        const updateCart = cart.filter((item) => item.id !== id);
        setCart(updateCart);
    }

    function clear() {
        setCart([]);
    }

    function isInCart(id) {
        return cart.some((item) => item.id === id);
    }

    function totalQuantity() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    function totalPrice() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider;