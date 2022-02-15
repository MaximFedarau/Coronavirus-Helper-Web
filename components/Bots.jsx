import { Button, Center, Flex, Link, useColorModeValue } from "@chakra-ui/react"
import React from "react"

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import NavBar from "../devComponents/navbar"
import Footer from "../devComponents/footer"

import NextLink from "next/link"
import Head from "next/head"
import { ChevronRightIcon } from "@chakra-ui/icons"

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
                <title>Coronavirus-Helper Bots</title>
                <meta name="description" content="Coronavirus-Helper Bots Lobby" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
            <NavBar link="../"/><br/><br/><br/>
            <Center>
            <Flex border="solid" borderRadius="0.5rem" borderColor={useColorModeValue("gray.500","gray.200")} borderWidth="2px">
                Hi!
            </Flex>
            </Center>
            <Center>
            <Flex>
                Hello!
            </Flex>
            </Center>
            <Center>
            <NextLink href="./bots/telegram-bot"> 
                <Button colorScheme="telegram" rightIcon={<ChevronRightIcon/>}>{(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к Telegram Боту</a> : <a>Go to Telegram Bot</a>}</Button>
            </NextLink>
            </Center><br/>
            <Center>
                <NextLink href="./bots/discord-bot">
                    <Button colorScheme="facebook" rightIcon={<ChevronRightIcon/>}>{(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к Discord Боту</a> : <a>Go to Discord Bot</a>}</Button>            
                </NextLink>
            </Center><br/>
            </div>
            <Footer position="absolute"/>
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