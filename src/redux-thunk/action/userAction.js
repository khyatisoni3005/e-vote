import axios from "axios"
import { ADD_USER, COMMON_ERROR, DELETE_USER, EMPTY_ID, GET_USER, SUCCESS, UPDATE_USER, USER_LOGIN, VIEW_USER } from "../type"

export const userLoginDataSubmit = (userLoginData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/login/user", userLoginData)
            .then((res) => {
                localStorage.setItem("userLoginData", JSON.stringify(res.data.data.user))
                dispatch({
                    type: USER_LOGIN,
                    payload: res.data.data.user
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "LOGIN SUCCESSFULLY"
                    }
                })

            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: error
                    }
                })
            })
    }
}
// ADD USER
export const userDataAction = (userData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/user/create", userData)
            .then((res) => {
                dispatch({
                    type: ADD_USER,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "USER CREATED SUCCESSFULLY"
                    }
                })

            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: error
                    }
                })
            })
    }
}

// get data 



export const getUserDataList = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/v1/user/list")
            .then((res) => {
                dispatch({
                    type: GET_USER,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "USER CREATED SUCCESSFULLY"
                    }
                })

            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: error
                    }
                })
            })
    }
}
// delete user
export const deleteUserData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8000/v1/user/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_USER,
                    payload: id
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "USER CREATED SUCCESSFULLY"
                    }
                })

            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: error
                    }
                })
            })
    }
}

export const viewUserData = (id) => {

    return (dispatch) =>
        dispatch({
            type: VIEW_USER,
            payload: id
        })

}

//update data 


export const updateUserDataAction = (userData) => {
    return (dispatch) => {
        axios.put(`http://localhost:8000/v1/user/update/${userData._id}`, userData)
            .then((res) => {
                dispatch({
                    type: UPDATE_USER,
                    payload: res.data.data
                })

                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "USER updated SUCCESSFULLY"
                    }
                })

            })

    }
}


export const emptyViewId = () => {

    return (dispatch) =>
        dispatch({
            type: EMPTY_ID,
            payload: ""
        })
}