import { Link } from "@chakra-ui/react"
import React from "react"

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Button } from '@chakra-ui/react'
import ThemeToggleButton from "../devComponents/theme-toggle-button"

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

function BotsComponent() {

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
            <ThemeToggleButton/>
            <Link href="./bots/telegram-bot"> 
                {(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к телеграм боту</a> : <a>Go to telegram bot</a>}
            </Link><br/>
            <Link href="./bots/discord-bot"> 
                {(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к дискорд боту</a> : <a>Go to discord bot</a>}
            </Link><br/>
            <Button onClick={() => {
        store.dispatch(changeReduxLanguage())
        }}>Click</Button>
        <Button><br/>
            <Link href="../">
                <a>Go back </a>
            </Link>
        </Button>
        </div>
    )
}

const ConnectedBotsComponent = connect(mapStateToProps,mapDispatchToProps)(BotsComponent)

export default function ReadyBotsComponent() {
    return (
        <Provider store={store}> 
            <ConnectedBotsComponent/>
        </Provider>
    )
}