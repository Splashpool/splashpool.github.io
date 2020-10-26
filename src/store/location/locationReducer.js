import * as locationActionType from './locationActionType';

const initialLocationState = {
    locationList: [],
    getLocationLoading: false,
    addLocationLoading: false,
    deleteLocationLoading: false,
    updateLocationLoading: false
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
        case locationActionType.DELETE_LOCATION_BEGINS:
            return {
                ...state,
                deleteLocationLoading: true
            }
        case locationActionType.DELETE_LOCATION_SUCCESS:
            return {
                ...state,
                locationList: state.locationList.filter(location => location.locationId !== payload),
                deleteLocationLoading: false
            }
        case locationActionType.DELETE_LOCATION_FAILURE:
            return {
                ...state,
                deleteLocationLoading: false
            }
        case locationActionType.UPDATE_LOCATION_BEGINS:
            return {
                ...state,
                updateLocationLoading: true
            }
        case locationActionType.UPDATE_LOCATION_SUCCESS:
            return {
                ...state,
                locationList: state.locationList.map(location => (location.locationId === payload.locationId) ? payload : location),
                updateLocationLoading: false
            }
        case locationActionType.UPDATE_LOCATION_FAILURE:
            return {
                ...state,
                updateLocationLoading: false
            }
        default:
            return state
    }
}

export default locationReducer;