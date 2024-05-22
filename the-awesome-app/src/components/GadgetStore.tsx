import axios from "axios";
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import {addToCart as addToRedux} from "../redux/gadgetReducer"
import React, {MouseEvent} from 'react';
import { Product } from "../model/Product";
import { CartItem } from "../model/CartItem";


const GadgetStore: React.FC = () => {


    const dispatch=useDispatch()
    const [products, setProducts] = useState<Product[]>([]);
   
    useEffect(() => {
        getProducts();

    }, [])
    
    async function getProducts() {

        try {
            const response = await axios.get<Product[]>('http://localhost:9000/products');
            const data = response.data;
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    function addToCart(product: Product): void {
        const cartItem=new CartItem(product,1)
        // dispatch({type:'ADD_TO_CART',payload:cartItem})dips
        dispatch(addToRedux(cartItem))


       
        
    }
    function renderProducts() {

        const productsView =  products.map((item, index) => {
           

            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={e => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;