import * as locationActionType from './locationActionType';

const initialLocationState = {
    locationList: [],
    getLocationLoading: false,
    addLocationLoading: false
}

const locationReducer = (state = initialLocationState, { type, payload }) => {
    switch (type) {
        case locationActionType.GET_LOCATION_BEGINS:
            return {
                ...state,
                getLocationLoading: true
            }
        case locationActionType.GET_LOCATION_SUCCESS:
            return {
                ...state,
                locationList: payload,
                getLocationLoading: false
            }
        case locationActionType.GET_LOCATION_FAILURE:
            return {
                ...state,
                getLocationLoading: false
            }
        case locationActionType.ADD_LOCATION_BEGINS:
            return {
                ...state,
                addLocationLoading: true
            }
        case locationActionType.ADD_LOCATION_SUCCESS:
            return {
                ...state,
                locationList: [...state.locationList, payload],
                addLocationLoading: false
            }
        case locationActionType.ADD_LOCATION_FAILURE:
            return {
                ...state,
                addLocationLoading: false
            }
        default:
            return state
    }
}

export default locationReducer;