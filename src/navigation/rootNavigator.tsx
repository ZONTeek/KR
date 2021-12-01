import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HamburgerIcon, SearchIcon } from 'native-base';
import { MapContainer } from '../map/mapContainer';
import { POIContainer } from '../POI/PoiListContainer';
import { RootStackParamList } from '../types';

const RootStack = createBottomTabNavigator<RootStackParamList>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName={'Map'}
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#4E6151' },
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
                            color={focused ? '#72BDA3' : '#5E8C61'}
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
                            color={focused ? '#72BDA3' : '#5E8C61'}
                        />
                    )
                }}
            />
        </RootStack.Navigator>
    );
};
