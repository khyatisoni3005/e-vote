import { ADD_PARTY, DELETE_PARTY, EMPTY_ID, GET_PARTY, UPDATE_PARTY, VIEW_PARTY_ID } from "../type"

let initialState = {
    partyList: [],
    viewPartyId: null

}

export const partyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PARTY:
            return {
                ...state,
                partyList: action.payload
            }
        case DELETE_PARTY: {

            return {
                ...state,
                partyList: state.partyList.filter((val) => val._id !== action.payload)
            }
        }
        case ADD_PARTY:
            return {
                ...state,
                partyList: [...state.partyList, action.payload]
            }
        case VIEW_PARTY_ID:
            return {
                ...state,
                viewPartyId: action.payload

            }
        case EMPTY_ID:
            return {
                ...state,
                viewPartyId: action.payload
            }
        case UPDATE_PARTY:
            return {
                ...state,
                partyList: state.partyList.map((val) => {
                    if (val._id == action.payload._id) {
                        return action.payload
                    } else {
                        return val
                    }
                })
            }
        default: return {
            ...state
        }
    }
}