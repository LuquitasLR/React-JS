import { createContext, useState } from "react";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({children})=>{
    
    const [products,setProducts] = useState([])
    
    const productsColletion = collection (db,"MoonLight")
    
    const getProducts = async ()=>{
    const data = await getDocs (productsColletion)
    setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
        
    useEffect(()=>{
        getProducts()
    },[])

    return(
        <FirebaseContext.Provider value={{productCartList,addProduct, removeProduct, clearProductCartList, isInCart, getTotalProducts}}>
            {children}
        </FirebaseContext.Provider>
    )
}