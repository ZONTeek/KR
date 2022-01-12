import React, { useEffect, useState } from 'react';
import { MapComponent } from './mapComponent';
import { useSelector } from 'react-redux';
import { selectPOI } from '../store/POIListReducer';
import { Callout, Marker } from 'react-native-maps';
import { Text } from 'native-base';
import { Location } from '../types';

export const MapContainer = ({ route }: any): JSX.Element => {
    const POIList = useSelector(selectPOI);
    const location = route?.params?.location;
    const [tempMarker, setTempMarker] = useState<Location | null>(null);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <MapComponent
            POIList={POIList}
            location={location}
            tempMarker={tempMarker}
            setTempMarker={setTempMarker}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
        />
    );
};
