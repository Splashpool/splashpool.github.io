import axios from 'axios';
import { toast } from 'react-toastify';

import apiConfig from '../../config/api';
import * as locationActionType from './locationActionType';

export const getLocation = () => async (dispatch) => {
    try {
        dispatch({ type: locationActionType.GET_LOCATION_BEGINS });
        const result = await axios.get(`${apiConfig.API_BASE_URL}/locations`);
        dispatch({
            type: locationActionType.GET_LOCATION_SUCCESS,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
        dispatch({ type: locationActionType.GET_LOCATION_FAILURE });
        toast.error(error.message);
    }
}

export const addLocation = (locationData) => async (dispatch) => {
    try {
        dispatch({ type: locationActionType.ADD_LOCATION_BEGINS });
        const result = await axios.post(`${apiConfig.API_BASE_URL}/locations`, locationData);
            dispatch({
                type: locationActionType.ADD_LOCATION_SUCCESS,
                payload: result.data
            });
            toast.success('Location Added Successfully!');
    } catch (error) {
        console.log(error);
        dispatch({ type: locationActionType.ADD_LOCATION_FAILURE });
        toast.error(error.message);
        throw error;
    }
}

export const deleteLocation = (locationId) => async (dispatch) => {
    try {
        dispatch({ type: locationActionType.DELETE_LOCATION_BEGINS });
        await axios.delete(`${apiConfig.API_BASE_URL}/locations?locationId=${locationId}`);
            dispatch({
                type: locationActionType.DELETE_LOCATION_SUCCESS,
                payload: locationId
            });
            toast.success('Location Deleted Successfully!');
    } catch (error) {
        console.log(error);
        dispatch({ type: locationActionType.DELETE_LOCATION_FAILURE });
        toast.error(error.message);
        throw error;
    }
}

export const updateLocationStatus = (locationData) => async (dispatch) => {
    try {
        dispatch({ type: locationActionType.UPDATE_LOCATION_BEGINS });
        const result = await axios.put(`${apiConfig.API_BASE_URL}/locations?locationId=${locationData.locationId}`, locationData);
            dispatch({
                type: locationActionType.UPDATE_LOCATION_SUCCESS,
                payload: result.data
            });
            toast.success('Location Updated Successfully!');
    } catch (error) {
        console.log(error);
        dispatch({ type: locationActionType.UPDATE_LOCATION_FAILURE });
        toast.error(error.message);
        throw error;
    }
}