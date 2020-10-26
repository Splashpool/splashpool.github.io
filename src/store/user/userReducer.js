import * as userActionType from './userActionType';

const initialUserState = {
    userList: []
}

const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case userActionType.GET_USER:
            return {
                ...state,
                userList: payload
            }
        default:
            return state
    }
}

export default userReducer;