import React, { useState } from 'react'
import ItemCount from '../ItemCount/itemCount'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useCart from '../../Context/UseCart'

const ItemDetail = ({ producto }) => {
    const [productosAgregados, setProductosAgregados] = useState(0)
    const { addItem } = useCart()
    const onAdd = (cantidad) => {
        addItem({
            id: producto.id,
            category: producto.category,
            name: producto.name,
            price: producto.price,
        }, cantidad);
        setProductosAgregados(cantidad);
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>Detalle de: {producto.name}</h3>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <div className='agregarProductos'>
                {
                    productosAgregados > 0 ?
                        <div className="mb-3 ">
                            <Button as={Link} to='/' variant="outline-warning">Seguir comprando</Button>
                            <Button as={Link} to='/cart' variant="outline-info ms-4">Finalizar compra</Button>
                        </div> :
                        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

export default ItemDetail