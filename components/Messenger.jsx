import React from "react";

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Button, Center, Link } from '@chakra-ui/react'
import NavBar from "../devComponents/navbar";
import Footer from "../devComponents/footer";
import  Head  from "next/head";

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
        <div>
          <Head>
        <title>Coronavirus-Helper Messenger</title>
        <meta name="description" content="Coronavirus-Helper Messenger" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
          <NavBar link="../"/><br/><br/><br/>
          <Center>
          {(store.getState().RuEnLanguageReducer.language === "ru") ? <h1>Про messenger</h1> : <h1>About messenger</h1> }
          </Center>
          <Footer/>
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
