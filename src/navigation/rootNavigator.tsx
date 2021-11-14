import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapContainer } from '../map/mapContainer';
import { POIContainer } from '../POI/PoiListContainer';
import { HamburgerIcon, SearchIcon } from 'native-base';

const RootStack = createBottomTabNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName={'POIList'}
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'purple' },
                tabBarShowLabel: false
            }}
        >
            <RootStack.Screen
                name={'Map'}
                component={MapContainer}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            size={8}
                            color={focused ? 'gold' : 'black'}
                        />
                    )
                }}
            />
            <RootStack.Screen
                name={'POIList'}
                component={POIContainer}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <HamburgerIcon
                            size={8}
                            color={focused ? 'gold' : 'black'}
                        />
                    )
                }}
            />
        </RootStack.Navigator>
    );
};

type RootStackParamList = {
    Map: undefined;
    POIList: undefined;
};
