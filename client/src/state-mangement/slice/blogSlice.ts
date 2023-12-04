import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: [{id:1,title:'first blog',link:'https://xnxx.com'},{id:2,title:'second blog',link:'https://xnxx.com'},{id:3,title:'third blog',link:'https://xnxx.com'}],
    reducers: {
        addBlog:(state:any,{payload})=>{
            state.push(payload)
        }
    }
})
export default blogSlice;
export const {addBlog}= blogSlice.actions