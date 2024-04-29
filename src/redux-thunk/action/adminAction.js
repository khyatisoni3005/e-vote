import axios from "axios";
import { ADMIN_LOGIN, ADMIN_LOGOUT, COMMON_ERROR, SUCCESS } from "../type";
import { type } from "@testing-library/user-event/dist/type";
import { json } from "react-router-dom";

export const adminLogin = (adminLoginData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/login/admin", adminLoginData)
            .then((res) => {
                localStorage.setItem("adminData", JSON.stringify(res.data))
                dispatch({
                    type: ADMIN_LOGIN,
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
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: "ENTER CURRECT DATA"
                    }

                })
            })
    }
}

export const adminLogOutAction = () => {
    return (dispatch) => {
        localStorage.removeItem('adminData')
        dispatch({
            type: ADMIN_LOGOUT
        })
        dispatch({
            type: SUCCESS,
            payload: {
                message: "LOGOUT SUCCESSFULLY"
            }
        })
    }
}