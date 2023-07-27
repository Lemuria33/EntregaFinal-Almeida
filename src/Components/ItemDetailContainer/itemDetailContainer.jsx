import React,{useEffect, useState} from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        getItem(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
    }, [id])
return (
    <div>
    <ItemDetail producto={producto}/>
    </div>
)
}

export default ItemDetailContainer