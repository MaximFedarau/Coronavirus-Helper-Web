import React from "react";

import store from "../../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Button, Link } from '@chakra-ui/react'
import ThemeToggleButton from "../../devComponents/theme-toggle-button";
import NavBar from "../../devComponents/navbar";
import Footer from "../../devComponents/footer";
import Head from "next/head";

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

function DiscordBotComponent() {

    /*React.useLayoutEffect(() => {//add else statement
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
    }, [store.getState().RuEnLanguageReducer.language])*/

    return (
        <div style={{minHeight: "100vh", position: "relative"}}> 
          <div style={{paddingBottom: "2.5rem"}}>
            <Head>
              <title>Coronavirus-Helper Discord-Bot</title>
              <meta name="description" content="Coronavirus-Helper Discord-Bot" />
              <link rel="icon" href='/images/c-h-logo-round.png' />
            </Head>
          <NavBar link="./"/>
            {(store.getState().RuEnLanguageReducer.language === "ru") ? <h1>Дискорд бот</h1> : <h1>Discord Bot</h1>}    
          </div> 
          <Footer position="absolute"/>
        </div>
    )
}

const ConnectedDiscordBotComponent = connect(mapStateToProps,mapDispatchToProps)(DiscordBotComponent)

export default function ReadyDiscordBotComponent() {
    return (
        <Provider store={store}>
            <ConnectedDiscordBotComponent/>
        </Provider>
    )
}