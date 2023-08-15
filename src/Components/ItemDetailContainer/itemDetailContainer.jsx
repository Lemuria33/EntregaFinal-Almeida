import useGetDocumentById from '../Hooks/useGetDocumentById'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const {document} = useGetDocumentById(id)
return (
    
    <div>
    { !document ? <p>Cargando...</p> : <ItemDetail producto={document}/>}
    </div>
)
}

export default ItemDetailContainer