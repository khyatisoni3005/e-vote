import { combineReducers } from "redux"
import { adminReducer } from "./adminReducer"
import { commonReducer } from "./commonReducer"

const rootReducer = combineReducers({
    admin: adminReducer,
    common: commonReducer

})
export default rootReducer