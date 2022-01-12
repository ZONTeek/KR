import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { POI } from '../types';
import { RootState } from './store';
import Krasnodar from './defaultLocations/krasnodar.json';
import Moscow from './defaultLocations/moscow.json';
import SPB from './defaultLocations/saint-petersburg.json';

const initialState = {
    value: [...Krasnodar]
};

export const POIListSlice = createSlice({
    name: 'POIList',
    initialState,
    reducers: {
        addPOI: (state, action: PayloadAction<any>) => {
            state.value = [...state.value, action.payload];
        },
        removePOI: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(
                (item) => item.name !== action.payload
            );
        },
        changeCatalog: (state, action: PayloadAction<any>) => {
            switch (action.payload) {
                case 'Krasnodar': {
                    state.value = Krasnodar;
                    break;
                }
                case 'Moscow': {
                    state.value = Moscow;
                    break;
                }
                case 'SPB': {
                    state.value = SPB;
                    break;
                }
                default: {
                    state.value = [...Krasnodar];
                }
            }
        }
    }
});
export const selectPOI = (state: RootState) => state.POIList.value;
export const { addPOI, removePOI, changeCatalog } = POIListSlice.actions;
export default POIListSlice.reducer;
