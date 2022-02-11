import {createStore} from "redux"
import { combineReducers } from "redux"

function RuEnLanguageReducer(state = {language: "en"},action) {
    switch(action.type) {
        case "CHANGE_LANGUAGE":
            if (state.language === "en") {
                return {...state, language: "ru"}
            } else {
                return {...state, language: "en"}
            }
        case "SET_LANGUAGE":
            return {...state,language: action.language}
        default:
            return state
    }
}

const reducer = combineReducers({RuEnLanguageReducer})

const store = createStore(reducer)

export default store