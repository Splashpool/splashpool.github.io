import axios from 'axios';

import apiConfig from '../../config/api';
import * as userActionType from './userActionType';

export const getUser = () => async (dispatch) => {
    try {
        const result = await axios.get(`${apiConfig.API_BASE_URL}/users`);
        dispatch({
            type: userActionType.GET_USER,
            payload: result.data
        });
    } catch (error) {
        console.log(error);
    }
}