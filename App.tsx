import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { RootNavigator } from './src/navigation/rootNavigator';
import { NativeBaseProvider } from 'native-base';

const mockData = [
    {
        name: 'Krasnodar',
        location: {
            latitude: 45.04484,
            longitude: 38.97603
        }
    },
    {
        name: 'Saint Petersburg',
        location: {
            latitude: 59.93863,
            longitude: 30.31413
        }
    },
    {
        name: 'Moscow',
        location: {
            latitude: 55.75222,
            longitude: 37.61556
        }
    }
];

const App = (): JSX.Element => {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Provider store={store}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <RootNavigator />
                    </SafeAreaView>
                </Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
};

export default App;
