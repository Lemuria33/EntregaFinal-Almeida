import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

function useGetDocumentById(id) {
    const [document, setDocument] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const documentRef = doc(db, "Productos", id);

        getDoc(documentRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data();
                    const documento = {
                        id: snapshot.id,
                        ...data,
                    };
                    console.log("Documento:", documento);
                    setDocument(documento);
                }
            })
            .catch((err) => console.error(err));

    }, [id]);

    return { document };
}

export default useGetDocumentById;