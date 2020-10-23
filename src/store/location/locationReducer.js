import * as locationActionType from './locationActionType';

const initialLocationState = {
    locationList: []
}

const locationReducer = (state = initialLocationState, { type, payload }) => {
    switch (type) {
        case locationActionType.GET_LOCATION:
            return {
                ...state,
                locationList: payload
            }
        default:
            return state
    }
}

export default locationReducer;