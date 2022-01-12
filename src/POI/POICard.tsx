import React from 'react';
import { Avatar, HStack, Pressable, Text, CloseIcon } from 'native-base';
import { Location, POI, RootStackParamList } from '../types';
import { StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { removePOI } from '../store/POIListReducer';

export const POICard = ({ location, name, imageURL }: POI) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const dispatch = useDispatch();

    const goToMap = (location: Location) => {
        navigation.navigate('Map', { location });
    };

    const deletePOI = () => {
        dispatch(removePOI(name));
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
                <CloseIcon
                    size={'3'}
                    style={styles.closeIcon}
                    onPress={deletePOI}
                />
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
    },
    closeIcon: {
        position: 'absolute',
        right: 0,
        top: 0
    }
});
