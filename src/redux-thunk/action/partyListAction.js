import axios from "axios"
import { ADD_PARTYLIST, GET_PARTYLIST, COMMON_ERROR } from "../type"

export const submitConnectionPartyListData = (connectionData) => {

    return (dispatch) => {
        axios.post("http://localhost:8000/v1/partylist/create", connectionData)
            .then((res) => {
                dispatch({
                    type: ADD_PARTYLIST,
                    payload: res.data.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: "failed...!"
                    }
                })
            })
    }

}


export const getConnectionData = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/v1/partylist/list")
            .then((res) => {

                dispatch({
                    type: GET_PARTYLIST,
                    payload: res.data.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: "failed...!"
                    }
                })
            })
    }
}