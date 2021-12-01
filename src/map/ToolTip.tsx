import React from 'react';
import { Callout } from 'react-native-maps';
import { Image, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
export const ToolTip = ({
    imageURL,
    name,
    description
}: ToolTipProps): JSX.Element => {
    return (
        <Callout style={styles.container} tooltip={false}>
            <VStack alignItems={'center'}>
                <Text style={styles.header}>{name}</Text>
                <Text style={styles.imgContainer}>
                    <Image
                        source={imageURL ? { uri: imageURL } : undefined}
                        alt={name}
                        style={styles.image}
                    />
                </Text>
                <Text style={styles.description}>{description}</Text>
            </VStack>
        </Callout>
    );
};

type ToolTipProps = {
    imageURL: string;
    name: string;
    description?: string;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        height: 250,
        width: 200
    },
    header: { marginVertical: 15, fontSize: 20, textAlign: 'center' },
    imgContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        width: 130,
        height: 100,
        borderRadius: 10
    },
    image: {
        height: 150,
        width: 200,
        resizeMode: 'cover',
        borderRadius: 10
    },
    description: {
        textAlign: 'center'
    }
});
