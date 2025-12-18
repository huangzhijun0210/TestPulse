import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'

const initialState = {
    subject_tree: [],
    active_two: {}
}


export const subjectSlice = createSlice({
    name: 'subject', // 切片的名称，在redux调试工具中可以看到这个名字（方便调试）
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
    }
});

export default subjectSlice.reducer;