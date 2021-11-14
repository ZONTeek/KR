import React from 'react';
import { MapComponent } from './mapComponent';
import { useSelector } from 'react-redux';
import { selectPOI } from '../store/POIListReducer';

export const MapContainer = (): JSX.Element => {
    const POIList = useSelector(selectPOI);

    return <MapComponent POIList={POIList} />;
};
