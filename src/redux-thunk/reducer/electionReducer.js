import { ADD_ELECTION, DELETE_ELECTION, EMPTY_ID, GET_ELECTION, UPDATE_ELECTION, VIEW_ELECTION_ID } from "../type"

let initialState = {
    electionDataList: [],
    viewElectionId: null,

}
export const electionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ELECTION:
            let newData = [...state.electionDataList, action.payload]
            return {
                ...state,
                electionDataList: newData
            }
        case GET_ELECTION:
            return {
                ...state,
                electionDataList: action.payload
            }
        case DELETE_ELECTION:
            return {
                ...state,
                electionDataList: state.electionDataList.filter((val) => val._id !== action.payload)
            }
        case VIEW_ELECTION_ID:
            return {
                ...state,
                viewElectionId: action.payload
            }
        case UPDATE_ELECTION:
            return {
                ...state,
                electionDataList: state.electionDataList.map((val) => {
                    if (val._id == action.payload._id) {
                        return action.payload
                    }
                    return val
                })
            }
        case EMPTY_ID:
            return {
                ...state,
                viewElectionId: action.payload
            }
        default:
            return {
                ...state
            }
    }
}