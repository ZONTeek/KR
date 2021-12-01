import React from 'react';
import { MapComponent } from './mapComponent';
import { useSelector } from 'react-redux';
import { selectPOI } from '../store/POIListReducer';

export const MapContainer = ({ route }: any): JSX.Element => {
    const POIList = useSelector(selectPOI);
    const location = route?.params?.location;
    return <MapComponent POIList={POIList} location={location} />;
};
