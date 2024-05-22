import axios from 'axios'
import { ChangeEvent, useEffect,useState,MouseEvent } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../model/Product'
import { useNavigate } from 'react-router-dom'
function EditProduct(){
    const params=useParams()
    const [product,setProduct]=useState<Product>(new Product())
    useEffect(()=>{
        fetchProduct()

    },[])
    async function fetchProduct() {
        try{
            const repsonse=await axios.get<Product>(`http://localhost:9000/products/${params.id}`)
            setProduct(repsonse.data)
        }
        catch(error){

        }
        
    }
    function handleChangeName(evt:ChangeEvent<HTMLInputElement>){
        const updatedValue=evt.target.value 
        const copyOfProduct={...product}
        copyOfProduct.name=updatedValue
        setProduct(copyOfProduct)

    }
    function handleChangePrice(evt:ChangeEvent<HTMLInputElement>){
        setProduct({...product,price:Number(evt.target.value)})
    }
    function handleChangeDesc(evt:ChangeEvent<HTMLInputElement>){
        setProduct({...product,description:(evt.target.value)})
    }
    // function cancel(){
    //     useNavigate

    // }
    async function save(e:MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        try{
            const response=await axios.put(`http://localhost:9000/products/${params.id}`,product)
            alert("updated successfully")

        }
        catch(error){
            alert("error updating product")
        }

    }

    return(
        <div>
            <h4>Edit Product</h4>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" id="name"  placeholder="Name" value={product.name} onChange={handleChangeName}/>
                </div><div>
                    <label>Price</label>
                    <input className="form-control" id="price"  placeholder="Name" value={product.price} onChange={handleChangePrice} />
                    </div>
                <div>
                    <label>Description</label>
                    <input className="form-control" id="description"  placeholder="Name" value={product.description} onChange={handleChangePrice}/>
                    </div><br/>
                <div>
                    <button className="btn btn-primary" onClick={save}>Save</button>&nbsp;
                    <button className="btn btn-warning" >cancel</button>
                </div>

            </form>
        </div>
    )
}
export default EditProduct