import { combineReducers } from "redux"
import { adminReducer } from "./adminReducer"
import { commonReducer } from "./commonReducer"
import {userReducer} from "./userReducer"

const rootReducer = combineReducers({
    admin: adminReducer,
    common: commonReducer,
    user: userReducer

})
export default rootReducer