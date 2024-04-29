import { userLoginDataSubmit } from "../action/userAction"
import { ADD_USER, DELETE_USER, GET_USER, USER_LOGIN, VIEW_USER } from "../type"

let initialState = {
    isUserLoggedin: false,
    displayUser: null,
    userDataList: [],
    userId: null

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isUserLoggedin: true,
                displayUser: action.payload.data.user
            }
        case ADD_USER:
            let newUser = [...state.userDataList, action.payload]
            return {
                ...state,
                userDataList: newUser

            }
        case GET_USER:
            console.log(action.payload, "reducer");
            return {

                ...state,
                userDataList: action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                userDataList: state.userDataList.filter((val) => val._id !== action.payload)
            }
        case VIEW_USER:
            return {
                ...state,
                userId: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
