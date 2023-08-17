import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const token = JSON.parse(localStorage.getItem('token'))
export const fetchJobs = createAsyncThunk('jobSlice/fetchJobs',async()=>{
    let resp = await fetch('https://alrayademo-back.appssquare.com/api/admin/job-titles',{
            method:'GET',
            headers:{
                Accept : 'application/json',
                'Content-Type':'application/json',
                'X-Language' :'en',
                Authorization : `Bearer ${token.token}`
            }
        })
        resp = await resp.json()
        return resp.data


}
)


const jobSlice = createSlice({
    name:'jobSlice',
    initialState:[],
    extraReducers:(builder)=>{
        builder.addCase(fetchJobs.fulfilled,(state,action)=>{
            return  [...state, action.payload]
        })
    }
})


export default jobSlice.reducer