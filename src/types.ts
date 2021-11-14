export type POIList = {
    POIList: POI[];
};

export type POI = {
    name: string;
    location: {
        longitude: number;
        latitude: number;
    };
    imageURL: string;
};
