import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: 'projec',
 initialState: [{id:1,title:'my first project',github:"https://github.com/n-s-iroagba/takum",writeUp:'blah blah blah',link:"https://www.xnxx.com"}],
    reducers:{
    setPorfolio:(state:any,action:any) =>{
        state.push(action)
    }
}
})
export default portfolioSlice.reducer;
export const{setPorfolio} = portfolioSlice.actions;