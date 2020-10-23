import axios from 'axios';

import apiConfig from '../../config/api';
import * as locationActionType from './locationActionType';

export const getLocation = () => async (dispatch) => {
    try {
        const result = await axios.get(`${apiConfig.API_BASE_URL}/locations`);
        dispatch({
            type: locationActionType.GET_LOCATION,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
}