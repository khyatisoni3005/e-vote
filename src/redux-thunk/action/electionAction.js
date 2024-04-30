import axios from "axios"
import { ADD_ELECTION, COMMON_ERROR, DELETE_ELECTION, GET_ELECTION, SUCCESS, UPDATE_ELECTION, VIEW_ELECTION_ID } from "../type"

export const submitElectionData = (electionData) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/v1/election/create", electionData)
            .then((res) => {
                console.log(res.data, "action ele");
                dispatch({
                    type: ADD_ELECTION,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "created successfylly"
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


export const getElectionData = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/v1/election/list")
            .then((res) => {

                dispatch({
                    type: GET_ELECTION,
                    payload: res.data.data
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

export const deleteElectionData = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:8000/v1/election/delete/${id}`,)
            .then((res) => {
                dispatch({
                    type: DELETE_ELECTION,
                    payload: id
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "deleted successfylly"
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

export const viewElectionData = (id) => {
    return (dispatch) => {
        dispatch({
            type: VIEW_ELECTION_ID,
            payload: id
        })
    }
}

export const updateElectionData = (electionData) => {
    return (dispatch) => {
        axios.put(`http://localhost:8000/v1/election/update/${electionData._id}`, electionData)
            .then((res) => {
                dispatch({
                    type: UPDATE_ELECTION,
                    payload: res.data.data
                })
                dispatch({
                    type: SUCCESS,
                    payload: {
                        message: "updated successfylly"
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