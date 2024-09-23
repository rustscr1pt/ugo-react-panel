import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import route_fillers from "../../../../constants&addons/route_fillers";

export const ManageImages = createSlice({
    name : "ManageImages",
    initialState : {
        ImagesListing : []
    },
    reducers : {
        clearImageListing(state) {
            state.value = []
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.ImagesListing = action.payload
            })
    }
});

export const fetchImages = createAsyncThunk(
    'image_storage/fetchImages',
    async () => {
        const response = await axios
            .get(`${route_fillers}/image-plugin/extract_images/`);
        console.log(response.data);
        return response.data
    }
)

export const {clearImageListing} = ManageImages.actions;

export default ManageImages.reducer;