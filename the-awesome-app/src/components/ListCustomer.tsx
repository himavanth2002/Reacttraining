import axios from "axios"
import { useEffect, useState } from "react"
import { Customer } from "../model/Customer"
// import './ListProducts.css'
function ListCustomer(){
    const [customers,setCustomers]=useState<Array<Customer>>([])
    useEffect(()=>{
        fetchCustomers()
    },[])
    function fetchCustomers(){
        const promise=axios.get<Array<Customer>>("http://localhost:9000/customers")
        promise.then((response)=>{
            console.log("sucess",response)
            setCustomers(response.data)

        },(error)=>{ console.log("error",error)}

        )
    }
    return (
        <div>
            <h4>List Products</h4>
            <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'center'}}>
                {customers.map((item)=>{
                    return(
                        <div>
                            <p>Id:{item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.location}</p>
                
                            </div>
                    )
                })

                }
            </div>
        </div>
    )
}
export default ListCustomer