// import {createStore} from 'react-redux'
const redux=require('redux')
const createStore=redux.createStore

//intial state
const initState={
    count:10,
    message:'Hello Redux'
}
//reducer
const reducer=(currentState=initState,action)=>{
    if(action.type==='INC_CTR'){
        return{
            ...currentState,
            count:currentState.count+1
        }
    }
    if(action.type==='ADD_TO_CTR'){
        return{
        ...currentState,
        count:currentState.count+action.value
        }
    }
        return currentState
}
//store
const store=createStore(reducer)
console.log("store",store.getState())
//subscribe
store.subscribe(()=>{
    console.log("subscribe",store.getState())
})
//dispatch an action
store.dispatch({type:'INC_CTR'})
console.log("Store",store.getState())
store.dispatch({type:'ADD_TO_CTR',value:10})
console.log("Store",store.getState())

store.dispatch({type:'UPDATED_LOC',payload:{location:'hyderrabad'}})
console.log("Store",store.getState())
