import { createSlice} from "@reduxjs/toolkit";

export const homeOrNavSlice = createSlice({
    name: 'homeOrNav',
    initialState: {
        navbar: 'initial-render',
        home: 'fade-in'
    },
    reducers: {
        viewNav:(state)=>{
            state.home='fade-out'
            state.navbar='fade-in'
        },
        viewHome:(state)=>{
            state.home='fade-in'
            state.navbar="fade-out"
        }
    }
})
export default homeOrNavSlice;
export const {viewNav,viewHome} = homeOrNavSlice.actions