import { ADMIN_LOGIN } from "../type"

let initialState = {
    adminData: []
}


export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADMIN_LOGIN:
            return {
                ...state,
            }
        default:
        return state

    }

}