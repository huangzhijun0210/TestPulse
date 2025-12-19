import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'
import axios from '@/http'
import { AxiosRes } from '../../http';

const initialState = {
    subject_tree: [],
    active_two: {}
}

export const get_subject_tree_async = createAsyncThunk(
    'get/subject_tree',
    async (action, state) => {
        const res: AxiosRes = await axios.get('/api/subject');
        return res.data.data;
    }

)

export const subjectSlice = createSlice({
    name: 'subject', // 切片的名称，在redux调试工具中可以看到这个名字（方便调试）
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(get_subject_tree_async.fulfilled, (state, action) => {
                state.subject_tree = action.payload;
            })
    }
});


export const select_subject_tree = (state: RootState) => {
    return state.subject.subject_tree
}

export default subjectSlice.reducer;