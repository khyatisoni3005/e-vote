import { ADD_PARTY, ADD_PARTYLIST, GET_PARTYLIST } from "../type"

let initinalState = {
    connectionData: []
}

export const connectionReducer = (state = initinalState, action) => {
    switch (action.type) {
        case ADD_PARTYLIST:
            return {
                ...state,
                connectionData: [...state.connectionData, action.payload]

            }
        case GET_PARTYLIST:
            return {
                ...state,
                connectionData: action.payload
            }
        default:
            return {
                ...state
            }
    }
}