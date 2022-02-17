import { Button, Center, ListItem, Flex, Heading, ListIcon, List, Text, useColorModeValue, Divider, Spacer, Icon } from "@chakra-ui/react"
import React from "react"

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import NavBar from "../devComponents/navbar"
import Footer from "../devComponents/footer"

import NextLink from "next/link"
import Head from "next/head"
import { ChevronRightIcon } from "@chakra-ui/icons"

import {BellIcon, CheckCircleIcon} from "@chakra-ui/icons"

import {IoLogoDiscord} from "react-icons/io5"
import {BsTelegram} from "react-icons/bs"

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
                <link rel="icon" href='/images/c-h-logo-round.png' />
                </Head>
            <NavBar link="../"/><br/><br/><br/>
            <Center>
                <Heading as="h3" textDecoration="underline" textDecorationColor={"grey"}>{(store.getState().RuEnLanguageReducer.language === "ru") ? "Наши боты оптимизированы под разные платформы" : "Our Bots are optimised for various platfotms"}</Heading>
            </Center><br/>
            <Center>
            <Flex border="solid" borderRadius="0.5rem" borderColor={useColorModeValue("gray.500","gray.200")} borderWidth="2px">
                <Center>
                <Text as="h1" fontSize="20px">
                    &nbsp;<Icon as={BsTelegram}/>&nbsp;{(store.getState().RuEnLanguageReducer.language === "ru") ? "Наш Telegram Бот имеет много возможностей:" : "Our Telegram Bot has large oportunities:"}
                </Text>&nbsp;
                <Divider orientation="vertical" width="3px" bg={useColorModeValue("gray.500","gray.200")}></Divider>&nbsp;
                </Center><br/>
                <Center>
                <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "Бот автоматически подстраивается под Ваш язык и Вам не нужно беспокоиться об его настройках." : "The Bot automatically adjusts to your language and you do not need to worry about its settings."}
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "У Вас всегда будет возможность связаться с разработчиками по любому вопросу." : "You will always have the opportunity to contact the developers for any issue."}
  </ListItem></List>
                </Center>
            </Flex>
            </Center><br/>
            <Center>
            <NextLink href="./bots/telegram-bot"> 
                <Button colorScheme="telegram" rightIcon={<ChevronRightIcon/>}>{(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к Telegram Боту</a> : <a>Go to Telegram Bot</a>}</Button>
            </NextLink>
            </Center><br/>
            <Center>
            <Flex border="solid" borderRadius="0.5rem" borderColor={useColorModeValue("gray.500","gray.200")} borderWidth="2px">
            <Center>
                <Text as="h1" fontSize="20px">
                &nbsp;<Icon as={IoLogoDiscord}/>&nbsp;{(store.getState().RuEnLanguageReducer.language === "ru") ? "Наш Discord Бот имеет много возможностей:" : "Our Discord Bot has large oportunities:"}
                </Text>&nbsp;
                <Divider orientation="vertical" width="3px" bg={useColorModeValue("gray.500","gray.200")}></Divider>&nbsp;
                </Center><br/>
                <Center>
                <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "Вы попадаете на наш сервер с дружелюбными участниками и модерацией." : "You are entering our server with friendly members and moderators."}{/*Вы попадаете на наш сервер с дружелюбными участниками и модерацией.  You are entering our server with friendly members and moderators.*/}
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "Бот обладет всеми теми же возможностями, что и Telegram Бот, только в Discord!" : "The bot will have all the same features as the Telegram Bot, only in Discord!"}
  </ListItem></List>
                </Center>
            </Flex>
            </Center><br/>
            <Center>
                <NextLink href="./bots/discord-bot">
                    <Button colorScheme="facebook" rightIcon={<ChevronRightIcon/>}>{(store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к Discord Боту</a> : <a>Go to Discord Bot</a>}</Button>            
                </NextLink>
            </Center>
            <br/>
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