import { useContext } from "react";
import CartContext from "./CartContext";


function useCart() {
    const result = useContext(CartContext);

    return result;
}

export default useCart;