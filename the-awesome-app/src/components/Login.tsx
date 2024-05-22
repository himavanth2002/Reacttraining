import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

 function Login(){
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()
    async function handleLogin(){
        if(name&&password){
            try{const  response=await axios.post('http://localhost:9000/login',{name,password})
                setError('')
                dispatch({type:'SET_AUTH_STATE',payload:{
                    isAuthenticated:true,
                    name,
                    acccessToken:response.data.accessToken,
                    refreshToken:response.data.accessToken
                }})
                navigate("/products")

            }
            catch(error){
                dispatch({type:'SET_AUTH_STATE',payload:{
                    isAuthenticated:false,
                    name,
                    acccessToken:'',
                    refreshToken:'',}})
                setError('invalid credential')}}
        else{
            setError('please enter the credentials')
        }
    }
    return(
        <div>
            <h4>Login</h4> 
            {error?<div className="alert alert-danger">{error} </div>:null}
            <Input label="UserName" type="text" value={name}
            onChange={e=>setName(e.target.value)} placeholder="ENter the name"/>
            // <div className="form-group">
            //     <label>UserName</label>
            //     <input className="form-control" type="text" value={name}
                onChange={
                    e=>setName(e.target.value)
                }/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password"  onChange={
                    e=>setPassword(e.target.value)
                }/>
            </div>
            <div>
                <button className="btn btn-success" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
export default Login