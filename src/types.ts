export type POIList = {
    POIList: POI[];
};

export type POI = {
    name: string;
    location: Location;
    imageURL: string;
};

export type Location = {
    longitude: number;
    latitude: number;
};

export type RootStackParamList = {
    Map?: { location: Location };
    POIList: undefined;
};
