import React from "react";

import store from "../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Avatar, Button, Center, Heading, Icon, Link, List, ListIcon, ListItem } from '@chakra-ui/react'
import NavBar from "../devComponents/navbar";
import Footer from "../devComponents/footer";
import  Head  from "next/head";

import NextLink from "next/link"

import {BellIcon, CheckCircleIcon} from "@chakra-ui/icons"

import {IoDownload} from "react-icons/io5"

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
        <div style={{minHeight: "100vh", position: "relative"}}>
          <Head>
        <title>Coronavirus-Helper Messenger</title>
        <meta name="description" content="Coronavirus-Helper Messenger" />
        <link rel="icon" href='/images/c-h-logo-round.png' />
        </Head>
          <div style={{paddingBottom: "2.5rem"}}>
          <NavBar link="../"/><br/><br/><br/>
          <Center>
            <Avatar src="/images/c-h-messenger-icon.png" size="2xl"/>
          </Center><br/><br/>
          <Center>
            <Heading as="h3" textDecoration="underline" textDecorationColor={"grey"}>
            {(store.getState().RuEnLanguageReducer.language === "ru") ? <h1>У нас есть следующие функции:</h1> : <h1>We have following features:</h1> }
            </Heading>
          </Center><br/>
          <Center>
          <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "Наш C-H  Messenger полностью безопасен. Вся ваша активность (сообщения, никнеймы, пароли, аватарки и т. д.) шифруется множетством способов." : "Our C-H Messenger is fully secure. All your activity (messages, nicknames, passwords, avatars and etc.) is encrypted in many ways."}
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "Используя современные технологии, мы достигли своей цели: мессенджер работает без кеша очень быстро даже на очень старых устройствах!" : "Using modern technologies we reached our aim: messenger is working without any cache very fast even on very old devices!"}
  </ListItem>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "С грядущим обновлением мы добавляем удобные уведомления, обновление ядра и новую функцию: DocTalk. Прямо сейчас вы можете поделиться своей ЛИЧНОЙ информацией со специалистами, но с DocTalk это выходит на новый уровень!" : "With upcoming update we add convenient notifications, core update and new feature: DocTalk. Right now you can share your PRIVATE info with specialists, but with DocTalk it is going to a new level!"}
  </ListItem>
  <ListItem>
    <ListIcon as={BellIcon} color='red.500' />
    {(store.getState().RuEnLanguageReducer.language === "ru") ? "На данный момент доступна только версия для Android. В настоящее время наша команда разрабатывает версию C-H Messenger для iOS." : "Right now only Android version is available. Our team is currently developing iOS version of C-H Messenger." }
  </ListItem>
  {/* You can also use custom icons from react-icons */}
</List>
          </Center><br/><br/>
          <Center>
            <NextLink href="https://github.com/MaximFedarau/Coronavirus-Helper/blob/main/app-debug.apk">
              <Button leftIcon={<IoDownload/>} colorScheme="blue">{(store.getState().RuEnLanguageReducer.language === "ru") ? "Скачать" : "Download"}</Button>
            </NextLink>
          </Center>
          </div><br/>
          <Footer position="absolute"/>
        </div>
    )//absolute
}

const ConnectedMessengerComponent = connect(mapStateToProps,mapDispatchToProps)(MessengerComponent)

export default function ReadyMessengerComponent() {
    return (
        <Provider store={store}>
            <ConnectedMessengerComponent/>
        </Provider>
    )
}
