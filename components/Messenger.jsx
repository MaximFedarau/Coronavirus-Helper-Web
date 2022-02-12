import React from "react";

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Button } from '@chakra-ui/react'

function changeReduxLanguage() {
    return {
      type: "CHANGE_LANGUAGE"
    }
}
  
function setReduxLanguage(language) {
    return {
      type: "SET_LANGUAGE", 
      language
    }
}
  
function mapStateToProps(state) {
    return {
      language: state.RuEnLanguageReducer.language
    }
}
  
const mapDispatchToProps = {
    changeReduxLanguage,
    setReduxLanguage
}

function MessengerComponent() {

    React.useLayoutEffect(() => {//add else statement
        if (typeof window !== 'undefined') {
          if (localStorage.getItem('language')) {
            //setLanguage((sessionStorage.getItem('language')))
            store.dispatch(setReduxLanguage(localStorage.getItem('language')))
            console.log(1)
          } else {
            //sessionStorage.setItem('language', language)
            localStorage.setItem('language', store.getState().RuEnLanguageReducer.language)
          }
        }
    }, [])
    
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('language', store.getState().RuEnLanguageReducer.language)
        }
      }, [store.getState().RuEnLanguageReducer.language])

    return (
        <div>
            {(store.getState().RuEnLanguageReducer.language === "ru") ? <h1>Про messenger</h1> : <h1>About messenger</h1> }
            <Button onClick={() => {
        store.dispatch(changeReduxLanguage())
        }}>Click</Button>
        </div>
    )
}

const ConnectedMessengerComponent = connect(mapStateToProps,mapDispatchToProps)(MessengerComponent)

export default function ReadyMessengerComponent() {
    return (
        <Provider store={store}>
            <ConnectedMessengerComponent/>
        </Provider>
    )
}