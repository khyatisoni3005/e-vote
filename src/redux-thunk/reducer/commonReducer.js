import { COMMON_ERROR } from "../type"

let initialState = {
    message: "",
    success: false

}


export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_ERROR:
            return {
                ...state,
                message: action.payload.message
            }
        default:
            return state

    }

}