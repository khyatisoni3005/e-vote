import { COMMON_ERROR, SUCCESS } from "../type"

let initialState = {
    alertObj: {
        message: "",
        success: false
    }


}


export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMON_ERROR:
            return {
                alertObj: {
                    message: action.payload.message,
                    success: false
                }
            }
        case SUCCESS:
            console.log("reducer SUCCESS")
            return {
                alertObj: {
                    message: action.payload.message,
                    success: true
                }

            }
        default:
            return { ...state }

    }

}