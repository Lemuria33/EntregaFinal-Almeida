import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Checkout() {
    const { orderId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);


    return (
        <>
            <div>Gracias por tu compra!</div>
            <p>Tu ID es: {
                loading ? <p>Cargando...</p> : <p>{orderId}</p>
            }
            </p>
        </>



    )
}

export default Checkout;