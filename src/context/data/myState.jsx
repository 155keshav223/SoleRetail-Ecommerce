import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { fireDB } from '../../firebase/firebaseConfig';
import { QuerySnapshot, Timestamp, addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-toastify';

function myState(props) {
    const [mode,setmode]=useState('light')
    const toggleMode=() =>{
        if (mode==='light'){
            setmode('dark');
            document.body.style.backgroundColor="rgb(17,24,39)"
        }
        else{
            setmode('light');
            document.body.style.backgroundColor="white"
        } 
    } 
    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState({
        title:null,
        price: null,
        imageUrl: null,
        category: null,
        description:null,
        time: Timestamp.now(),
        date:new Date().toLocaleDateString(
            "en-US",
            {
                month:"short",
                day:"2-digit",
                year:"numeric",
            }
        )
    })
    //ADD Product section:

    const addProduct = async() => {
        if(products.title == null || products.price==null || products.imageUrl==null|| products.category==null || products.description==null){
            return toast.error('Please fill all the fields')
        }
        const productRef =collection(fireDB,"products")
        setLoading(true)
        try{
            await addDoc(productRef,products)
            toast.success("Product Add Successfully")
            getProductData()
            closeModal()
            setLoading(false)
        }
        catch(error){
            setLoading(false)
        }
        setProducts("")
    }
    const [product,setProduct]=useState([]);
    // get products
    const getProductData = async () =>{
        setLoading(true)
        try{
            const q=query(
                collection(fireDB,"products"),
                orderBy("time"),

            );
            const data = onSnapshot(q,(QuerySnapshot)=> {
                let productsArray = [];
                QuerySnapshot.forEach((doc)=>{
                    productsArray.push({...doc.data(),id:doc.id});
                });
                setProduct(productsArray)
                setLoading(false);
            });
            return()=>data;
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(()=>{
        getProductData();
    },[]);

  return (
    <MyContext.Provider value ={{mode,toggleMode,loading,setLoading,products,setProducts,addProduct}} >
        {props.children}
    </MyContext.Provider>
  )
}
export default myState