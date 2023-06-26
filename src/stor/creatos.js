import { STARTED, SUCCESS,FILURE, SPECIFIC } from "./types";


export const allStarted=()=>({
    type:STARTED,
})
export const allSusccess=(todos)=>({
    type:SUCCESS,
    payload:{
        todos:{
        todos,
            
        }
    }
})


export const spacificSusccess=(todos)=>({
    type:SPECIFIC,
    payload:{
        todos:{
        todos,
            
        }
    }
})
export const allFilure=()=>({
    type:FILURE,
})