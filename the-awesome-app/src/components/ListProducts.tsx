import axios from "axios"
import { useEffect, useState } from "react"
import { Product } from "../model/Product"
import './ListProducts.css'
import EditProduct from "./EditProduct"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
// import { error } from "console"
function ListProducts(){
    const [products,setProducts]=useState<Array<Product>>([])
    const navigate=useNavigate()
    const auth=useSelector((state:any)=>state.auth)
    useEffect(()=>{
        console.log("ListProducts Mounted")
        fetchProductsAsync()
        return ()=>{
            console.log("unmounted")
        }
    },[])
    // useEffect(()=>{
    //     console.log("products updated",products)
    // },[products])
    async function fetchProductsAsync(){
        try{//headers are set in the interceptors
            // const headers={"Authorization":`Bearer ${auth.acccessToken}`}
        
            // const response=await axios.get("http://localhost:9000/secure_products",{headers});
            const response=await axios.get("http://localhost:9000/secure_products")
            console.log("sucess",response)
            setProducts(response.data)
        }
        catch(error){
            console.log(error)
        }


    }
    // function fetchProducts(){
    //     const promise=axios.get<Array<Product>>("http://localhost:9000/secure_products")
    //     promise.then((response)=>{
    //         console.log("sucess",response)
    //         setProducts(response.data)

    //     },(error)=>{ console.log("error",error)}

    //     )
    // }
    async function deleteProduct(product:Product){
        try{
            // const response=await axios.delete(`http://localhost:9000/products/${product.id}`)
            // alert(`product with ${product.id} deleted`)
            // // fetchProductsAsync()
            const copyOfProducts=[...products]
            const indexofElementTODelete=copyOfProducts.findIndex(item=> item.id===product.id)
            if(indexofElementTODelete!==-1){
                copyOfProducts.splice(indexofElementTODelete,1)
                setProducts(copyOfProducts)
            }

        }
        catch(error){
            alert(`${product.id} not found`)
        }
    }
    function editProduct(product:Product){
        navigate(`/products/${product.id}`)
    }
    return (
        <div>
            <h4>List Products</h4>
            <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'center'}}>
                {products.map((item)=>{
                    return(
                        <div className="product">
                            <p>Id:{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        <div><button onClick={()=>{deleteProduct(item)}}>Delete</button>
                        <button onClick={()=>editProduct(item)}>Edit</button></div>
                            </div>
                    )
                })

                }
            </div>
        </div>
    )
}
export default ListProducts