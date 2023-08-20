import useGetCollectionByCategory from './Hooks/useGetCollectionById';
import ItemList from './ItemList/itemList';
import { useParams } from 'react-router-dom';
import "./css/itemListContainer.css";

const ItemListContainer = ({greeting})=>{
    const {categoryId}= useParams()
    const {collectionData} = useGetCollectionByCategory(categoryId)

    return (
        <div>
            {
                !collectionData ? <p>Cargando...</p>
                : <div>
                <h1 className='greeting'>{greeting} <span>{categoryId && categoryId}</span></h1>
                <ItemList productos={collectionData}/>
            </div>
            }  
        </div>
    )
}

export default ItemListContainer;