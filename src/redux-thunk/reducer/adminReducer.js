import { ADMIN_LOGIN, ADMIN_LOGOUT } from "../type"

let initialState = {
    isLoggedin: false
}


export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return {
                ...state,
                isLoggedin: true

            }
        case ADMIN_LOGOUT:
            return {
                ...state,
                isLoggedin: false
            }
        default:
            return state

    }

}