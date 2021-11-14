import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { POIList } from '../types';

export const MapComponent = ({ POIList }: POIList): JSX.Element => {
    return (
        <MapView style={{ flex: 1 }}>
            {POIList.map((POI) => {
                const { longitude, latitude } = POI.location;
                return <Marker coordinate={{ longitude, latitude }} />;
            })}
        </MapView>
    );
};
