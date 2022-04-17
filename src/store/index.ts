import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"

import { reducer } from "../reducers"

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>
export default store