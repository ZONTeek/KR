import React from 'react';
import { Callout } from 'react-native-maps';
import { Image, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
export const ToolTip = ({ imageURL, name }: ToolTipProps): JSX.Element => {
    return (
        <Callout style={styles.container}>
            <VStack alignItems={'center'}>
                <Text>
                    <Image
                        source={imageURL ? { uri: imageURL } : undefined}
                        alt={name}
                        style={styles.image}
                    />
                </Text>
                <Text>{name}</Text>
            </VStack>
        </Callout>
    );
};

type ToolTipProps = {
    imageURL: string;
    name: string;
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    image: {
        width: 80,
        height: 100
    }
});
