import axios from "axios";
import { GET_PARTY, SUCCESS, COMMON_ERROR, DELETE_PARTY, ADD_PARTY, VIEW_PARTY_ID, UPDATE_PARTY } from "../type";

export const getPartyList = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/v1/party/list')
            .then((res) => {
                dispatch({
                    type: GET_PARTY,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "party listt"
                    }
                })
            }).catch((error) => {
                dispatch({
                    type: COMMON_ERROR,
                    payload: {
                        message: "failed...!"
                    }
                })
            })
    }

}

export const deletepartyData = (id) => {

    return (dispatch) => {
        axios.delete(`http://localhost:8000/v1/party/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: DELETE_PARTY,
                    payload: id
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "deleted successfully...!"
                    }
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


export const submitPartyData = (partyData) => {
    return (dispatch) => {
        axios.post('http://localhost:8000/v1/party/create_party', partyData)
            .then((res) => {
                dispatch({
                    type: ADD_PARTY,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "create successfully...!"
                    }
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

export const viewPartyData = (id) => {
    return (dispatch) => {
        dispatch({
            type: VIEW_PARTY_ID,
            payload: id
        })
    }
}

export const updatePartyData = (partydata) => {
    return (dispatch) => {
        axios.put(`http://localhost:8000/v1/party/update/${partydata._id}`, partydata)

            .then((res) => {
                dispatch({
                    type: UPDATE_PARTY,
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