import React from 'react';
import { Avatar, HStack, Pressable, Text } from 'native-base';
import { Location, POI, RootStackParamList } from '../types';
import { StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export const POICard = ({ location, name, imageURL }: POI) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const goToMap = (location: Location) => {
        navigation.navigate('Map', { location });
    };

    return (
        <Pressable style={styles.container} onPress={() => goToMap(location)}>
            <HStack alignItems={'center'} width={300} m={1}>
                <Avatar
                    key={imageURL}
                    source={imageURL ? { uri: imageURL } : undefined}
                    mr={5}
                    width={20}
                    height={20}
                />
                <Text
                    fontSize={'lg'}
                    textAlign={'center'}
                    overflow={'hidden'}
                    width={'70%'}
                >
                    {name}
                </Text>
            </HStack>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: '#efdede',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    avatar: {
        width: 30
    }
});
