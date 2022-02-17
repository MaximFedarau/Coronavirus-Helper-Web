import React from "react";

import store from "../../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Badge, Button, Center, Icon, Link , Text} from '@chakra-ui/react'
import ThemeToggleButton from "../../devComponents/theme-toggle-button";
import NavBar from "../../devComponents/navbar";
import Footer from "../../devComponents/footer";
import Head from "next/head";

import {FaDiscord} from "react-icons/fa"

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
          <NavBar link="./"/><br/><br/><br/>
          <Center>
            <a target="_blank" href="https://discord.gg/fgHzz7t4DH" rel="noreferrer">
            <Icon as={FaDiscord} boxSize="10em" style={{color: "rgb(88,101,242)"}}/>
            </a>
          </Center><br/><br/><br/>
          <Center>
          <Badge colorScheme="purple">{(store.getState().RuEnLanguageReducer.language === "ru") ? "Ноябрьское обновление" : "November Update"}</Badge>&nbsp;
              <Text>
                {(store.getState().RuEnLanguageReducer.language === "ru") ? "Количество стран в функции !stat было изменено на 63." : "The number of countries in the !stat function has been changed to 63."}
              </Text>
            </Center><br/>
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