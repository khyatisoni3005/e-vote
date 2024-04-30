import { combineReducers } from "redux"
import { adminReducer } from "./adminReducer"
import { commonReducer } from "./commonReducer"
import { userReducer } from "./userReducer"
import { electionReducer } from "./electionReducer"

const rootReducer = combineReducers({
    admin: adminReducer,
    common: commonReducer,
    user: userReducer,
    election: electionReducer

})
export default rootReducer