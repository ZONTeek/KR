import { Text } from 'native-base';
import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Location, POIList } from '../types';
import { ToolTip } from './ToolTip';

const DELTA = { latitudeDelta: 0.04, longitudeDelta: 0.05 };

export const MapComponent: ({
    POIList,
    location
}: MapComponentProps) => JSX.Element = ({ POIList, location }) => {
    const mapRef = useRef<MapView>(null);

    const goToLocation = (location: any) => {
        mapRef?.current?.animateToRegion({ ...location, ...DELTA });
    };

    useEffect(() => {
        location && goToLocation(location);
    }, [location]);

    return (
        <MapView style={{ flex: 1 }} ref={mapRef}>
            {POIList.map((POI) => {
                const { longitude, latitude } = POI.location;
                return (
                    <Marker
                        coordinate={{ longitude, latitude }}
                        key={POI.imageURL}
                    >
                        <ToolTip imageURL={POI.imageURL} name={POI.name} />
                    </Marker>
                );
            })}
        </MapView>
    );
};

type MapComponentProps = POIList & { location: Location };
