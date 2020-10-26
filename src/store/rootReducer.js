import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import locationReducer from './location/locationReducer';

const reducer = combineReducers({
    user: userReducer,
    location: locationReducer
})

export default reducer;