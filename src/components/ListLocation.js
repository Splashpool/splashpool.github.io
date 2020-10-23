import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getLocation } from '../store/location/locationAction';

export default function ListLocation() {
    const dispatch = useDispatch();


    useEffect(() => {
        getLocationList();
    },[]);

    const getLocationList = () => {
        dispatch(getLocation());
    }
    

    return (
        <div>

        </div>
    )
}
