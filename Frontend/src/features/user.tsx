

import { createSlice } from "@reduxjs/toolkit";

 type initialStateType  = {
    username: string
    Token: null | string
}
const initialState: initialStateType = {
    username: "",
    Token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {value: initialState},
    reducers:{
        login: (state, action)=> {
            state.value = action.payload
        },
       
    }

})

export const {login} = userSlice.actions
export default userSlice.reducer