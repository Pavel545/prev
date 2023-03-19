import { STARTED, SUCCESS,FILURE } from "./types";


export const allStarted=()=>({
    type:STARTED,
})
export const allSusccess=(todos)=>({
    type:SUCCESS,
    payload:{
        todos,
    }
})

export const spacificSusccess=(specific)=>({
    type:SUCCESS,
    payload:{
        specific,
    }
})
export const allFilure=()=>({
    type:FILURE,
})