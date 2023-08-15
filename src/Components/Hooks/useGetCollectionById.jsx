import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";

function useGetCollectionByCategory(categoryId) {
    const [collectionData, setCollectionData] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, "Productos");

        if (categoryId) {

            const q = query(collectionRef, where("category", "==", categoryId));

            getDocs(q)
                .then((snapshot) => {
                    const newData = snapshot.docs.map((snapshot) => ({
                        id: snapshot.id,
                        ...snapshot.data()
                    }));

                    setCollectionData(newData);
                })
                .catch((err) => {
                    console.error("Error", err);
                    setCollectionData([]);
                });
        } else {

            getDocs(collectionRef)
                .then((snapshot) => {
                    const newData = snapshot.docs.map((snapshot) => ({
                        id: snapshot.id,
                        ...snapshot.data()
                    }));

                    setCollectionData(newData);
                })
                .catch((err) => {
                    console.error("Error", err);
                    setCollectionData([]);
                });
        }

    }, [categoryId]);

    return { collectionData };
}

export default useGetCollectionByCategory;