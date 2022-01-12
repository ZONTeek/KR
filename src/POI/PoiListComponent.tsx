import React, { useState } from 'react';
import {
    Box,
    FlatList,
    HamburgerIcon,
    Heading,
    HStack,
    View
} from 'native-base';
import { POICard } from './POICard';
import { ChoseCatalogModal } from './ChooseCatalogModal';
import { POI, POIList } from '../types';

export const POIComponent = ({ POIList }: POIList): JSX.Element => {
    const [isModalOpen, setModalOpen] = useState(false);

    const renderItem = ({ item }: { item: POI }) => {
        const { location, name, imageURL } = item;
        return <POICard location={location} name={name} imageURL={imageURL} />;
    };

    return (
        <Box
            alignItems={'center'}
            backgroundColor={'#94E8B4'}
            style={{ flex: 1 }}
        >
            <ChoseCatalogModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
            />
            <HStack justifyContent={'space-between'} width={'100%'}>
                <View style={{ width: '10%' }} />
                <Heading
                    pt={30}
                    mb={5}
                    backgroundColor={'red'}
                    alignContent={'center'}
                >
                    Points of interests
                </Heading>
                <HamburgerIcon
                    mr={2}
                    r={0}
                    alignSelf={'center'}
                    onPress={() => setModalOpen(!isModalOpen)}
                />
            </HStack>

            <FlatList data={POIList} renderItem={renderItem} />
        </Box>
    );
};
