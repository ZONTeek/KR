import React from 'react';
import { SafeAreaView } from "react-native";
import {MapContainer} from "./src/map/mapContainer";

const App = (): JSX.Element => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MapContainer/>
        </SafeAreaView>
    );
}

export default App;