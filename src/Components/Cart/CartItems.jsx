import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import useCart from "../../Context/UseCart";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import "../css/cartItems.css"

function CartItems() {
    const { cart, removeItem, clear, totalPrice } = useCart();
    const [orderId, setOrderId] = useState();
    const navigate = useNavigate();

    const order = {
        buyer: {
            name: "Agustín",
            email: "agustin.almeid@gmail.com",
            phone: "12312312312"
        },
        items: cart.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })),
        total: totalPrice(),

    }

    function handleOrder() {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)
            .then(({ id }) => {
                setOrderId(id);
                console.log(id);
                navigate(`/cart/checkout/${id}`);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="cart-container">
            <h3 className="carritoDeCompras">Carrito de Compras</h3>
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>Tu carrito está Vacío.</p>
                    <Button as={Link} to="/" variant="danger">
                        Ver Productos
                    </Button>
                </div>
            ) : (
                <div className="cart-items">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>${item.price * item.quantity}</td>
                                    <td>
                                        <Button variant="outline-danger" onClick={() => removeItem(item.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-summary">
                        <p>Precio Total: ${totalPrice()}</p>
                        <Button variant="danger" onClick={clear}>
                            Vaciar Carrito
                        </Button>
                        <Button as={Link} to="/" variant="danger ms-2">
                            Seguir Comprando
                        </Button>
                        <Button as={Link} to={`/cart/checkout/${orderId}`} variant="outline-success ms-2" onClick={handleOrder}>
                            Terminar mi Compra
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartItems;