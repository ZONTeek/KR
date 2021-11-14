import React from 'react';
import { Avatar, Box, HStack, Text } from 'native-base';
import { POI } from '../types';

export const POICard = ({ location, name, imageURL }: POI) => {
    return (
        <Box>
            <HStack alignItems={'center'} width={300} m={1}>
                <Avatar
                    source={imageURL ? { uri: imageURL } : undefined}
                    mr={5}
                    width={20}
                    height={20}
                />
                <Text fontSize={'lg'} textAlign={'center'} overflow={'hidden'}>
                    {name}
                </Text>
            </HStack>
        </Box>
    );
};
