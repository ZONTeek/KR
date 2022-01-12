import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Location, POIList } from '../types';
import { ToolTip } from './ToolTip';
import { Modal, Pressable, Text } from 'native-base';
import { AddPoiModal } from './AddPoiModal';
import { ChoseCatalogModal } from '../POI/ChooseCatalogModal';

const DELTA = { latitudeDelta: 0.04, longitudeDelta: 0.05 };
const initialRegion = {
    latitude: 45.03547033171371,
    longitude: 38.97530226202055,
    ...DELTA
};

export const MapComponent = ({
    POIList,
    location,
    tempMarker,
    setTempMarker,
    isModalOpen,
    toggleModal
}: MapComponentProps): JSX.Element => {
    const mapRef = useRef<MapView>(null);

    const goToLocation = (location: any) => {
        mapRef?.current?.animateToRegion({ ...location, ...DELTA });
    };

    useEffect(() => {
        location && goToLocation(location);
    }, [location]);

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                ref={mapRef}
                initialRegion={initialRegion}
                onPress={(e) => {
                    setTempMarker(e.nativeEvent.coordinate);
                }}
            >
                {POIList.map((POI) => {
                    const { longitude, latitude } = POI.location;
                    return (
                        <Marker
                            coordinate={{ longitude, latitude }}
                            key={POI.imageURL}
                        >
                            <ToolTip
                                imageURL={POI.imageURL}
                                name={POI.name}
                                description={POI.description}
                            />
                        </Marker>
                    );
                })}
                {tempMarker && (
                    <Marker coordinate={tempMarker}>
                        <Callout onPress={() => toggleModal()}>
                            <Text>Add POI</Text>
                        </Callout>
                    </Marker>
                )}
            </MapView>
            <AddPoiModal
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
                location={tempMarker}
                setTempMarker={setTempMarker}
            />
        </>
    );
};

type MapComponentProps = POIList & {
    location: Location;
    tempMarker: Location | null;
    setTempMarker: Dispatch<SetStateAction<Location | null>>;
    isModalOpen: boolean;
    setModalOpen?: Dispatch<SetStateAction<boolean>>;
    toggleModal: () => void;
};
