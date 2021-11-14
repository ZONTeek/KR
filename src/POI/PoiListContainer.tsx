import React from 'react';
import { POIComponent } from './PoiListComponent';
import { useSelector } from 'react-redux';
import { selectPOI } from '../store/POIListReducer';

export const POIContainer = (): JSX.Element => {
    const POIList = useSelector(selectPOI);

    return <POIComponent POIList={POIList} />;
};
