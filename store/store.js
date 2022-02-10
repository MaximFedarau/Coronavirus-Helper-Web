import {combineReducers} from "redux"
import {createStore} from "redux"

function RuEnLanguageReducer(state = {language: "en"},action) {
    switch(action.type) {
        case "CHANGE_LANGUAGE":
            if (state.language === "en") return {language: "ru"}
            else if (state.language === "ru") return {language: "en"}
        case "SET_LANGUAGE":
            return {language: action.language}
        default:
            return state
    }
}

const reducer = combineReducers({RuEnLanguageReducer})
const store = createStore(reducer)

export default store
