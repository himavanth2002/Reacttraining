import axios from "axios";
import { store } from "../redux/store";
import { config } from "process";
axios.interceptors.request.use((config)=>
{
    const state=store.getState()
    const acccessToken=state.auth.acccessToken
    const baseUrl="http://localhost:9000"
    const loginUrl=`${baseUrl}/login`
    if(config.url!==loginUrl && config.url?.startsWith(baseUrl) && acccessToken){
        config.headers.Authorization=`Bearer ${acccessToken}`
    }
    return config
})