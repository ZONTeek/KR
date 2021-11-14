import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { POI } from '../types';
import { RootState } from './store';

const initialState = {
    value: [
        {
            name: 'Krasnodar',
            location: {
                latitude: 45.04484,
                longitude: 38.97603
            },
            imageURL:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Krasnodar_teatr.jpg/1280px-Krasnodar_teatr.jpg'
        },
        {
            name: 'Saint Petersburg',
            location: {
                latitude: 59.93863,
                longitude: 30.31413
            },
            imageURL:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Palace_Bridge_SPB_%28img2%29_Crop.jpg/1920px-Palace_Bridge_SPB_%28img2%29_Crop.jpg'
        },
        {
            name: 'Moscow',
            location: {
                latitude: 55.75222,
                longitude: 37.61556
            },
            imageURL:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Moscow_July_2011-16.jpg/1280px-Moscow_July_2011-16.jpg'
        }
    ]
};

export const POIListSlice = createSlice({
    name: 'POIList',
    initialState,
    reducers: {
        addPOI: (state, action: PayloadAction<POI>) => {
            state.value.push(action.payload);
        },
        removePOI: (state, action: PayloadAction<POI>) => {
            state.value.push(action.payload);
        }
    }
});

export const selectPOI = (state: RootState) => state.POIList.value;
export const { addPOI, removePOI } = POIListSlice.actions;
export default POIListSlice.reducer;
