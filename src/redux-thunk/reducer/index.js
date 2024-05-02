import { combineReducers } from "redux"
import { adminReducer } from "./adminReducer"
import { commonReducer } from "./commonReducer"
import { userReducer } from "./userReducer"
import { electionReducer } from "./electionReducer"
import { partyReducer } from "./partyReducer"
import { connectionReducer } from "./partyListReducer"

const rootReducer = combineReducers({
    admin: adminReducer,
    common: commonReducer,
    user: userReducer,
    election: electionReducer,
    party: partyReducer,
    connection: connectionReducer



})
export default rootReducer