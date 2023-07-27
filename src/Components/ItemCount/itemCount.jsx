import {useState} from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd, initial}) =>{
    const [count, setCount] = useState(initial)
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const restar = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }
    return(
        <div className='d-flex flex-column align-items-center justify-content-between'>
            <div>
                <Button variant='outline-danger' onClick={restar}>-</Button>
                <span className='btn'>{count}</span>
                <Button variant='outline-success' onClick={sumar}>+</Button>
            </div>
            <Button className='mt-2' variant='outline-info' disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</Button>

        </div>
    )
}

export default ItemCount