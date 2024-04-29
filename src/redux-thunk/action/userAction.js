import axios from "axios"
import { ADD_USER, COMMON_ERROR, DELETE_USER, GET_USER, SUCCESS, USER_LOGIN, VIEW_USER } from "../type"
import { type } from "@testing-library/user-event/dist/type"

export const userLoginDataSubmit = (userLoginData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/login/user", userLoginData)
            .then((res) => {
                localStorage.setItem("userLoginData", JSON.stringify(res.data.user))
                dispatch({
                    type: USER_LOGIN,
                    payload: res.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "LOGIN SUCCESSFULLY"
                    }
                })

            })
            .catch((error) => {
                console.log("userLoginDataSubmit", error);
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
                    payload: res.data
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
                console.log(res.data.data, "acrion res.data");
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