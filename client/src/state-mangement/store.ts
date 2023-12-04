import { configureStore } from "@reduxjs/toolkit";
import { homeOrNavSlice } from "./slice/homeOrNavSlice";
import { portfolioSlice } from "./slice/porfolioSlice";
import blogSlice from './slice/blogSlice'

const store =configureStore({
    reducer:{
        homeOrNav:homeOrNavSlice.reducer,
        projects:portfolioSlice.reducer,
        blog:blogSlice.reducer
    }
})
export default store;