import React from 'react';
import { Box, FlatList, Heading } from 'native-base';
import { POI, POIList } from '../types';
import { POICard } from './POICard';

export const POIComponent = ({ POIList }: POIList): JSX.Element => {
    const renderItem = ({ item }: { item: POI }) => {
        const { location, name, imageURL } = item;
        return <POICard location={location} name={name} imageURL={imageURL} />;
    };

    return (
        <Box alignItems={'center'}>
            <Heading pt={30} justifyContent={'space-around'} mb={5}>
                Points of interests
            </Heading>
            <FlatList data={POIList} renderItem={renderItem} />
        </Box>
    );
};
