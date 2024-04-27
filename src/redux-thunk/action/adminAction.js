import axios from "axios";
import { ADMIN_LOGIN, COMMON_ERROR } from "../type";
import { type } from "@testing-library/user-event/dist/type";

export const adminLogin = (adminLoginData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/login/admin", adminLoginData)
            .then((res) => {
                dispatch({
                    type: ADMIN_LOGIN,
                    payload: res.data
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