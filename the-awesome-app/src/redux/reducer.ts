type AuthState={
    isAuthenticated:boolean,
    name:string,
    acccessToken:string,
    refreshToken:string
}
const intialState:AuthState={
    isAuthenticated:false,
    name:'',
    acccessToken:'',
    refreshToken:''
}
export const authReducer=(currentState=intialState,action:any)=>{
    if(action.type==='SET_AUTH_STATE'){

        return{...action.payload}
    }
    return currentState

}