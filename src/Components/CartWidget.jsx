import "./css/cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import useCart from "../Context/UseCart";
import { Link } from "react-router-dom";


function CartWidget() {
    const { totalQuantity } = useCart();
    return (
        <Link to="/cart" className="cart-icon">
            <i className="bi bi-cart" style={{ color: "white" }} />
            {totalQuantity() > 0 && <span className="unidadCarrito">{totalQuantity()}</span>}
        </Link>
    );
}
export default CartWidget;