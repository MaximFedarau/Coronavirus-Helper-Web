import React from "react";

import store from "../../store/store"
import {Provider} from "react-redux"
import {connect} from "react-redux" 

import { Avatar, Badge, Button, Center, Icon, Link, Text } from '@chakra-ui/react'
import NavBar from "../../devComponents/navbar";
import Footer from "../../devComponents/footer";
import Head from "next/head";
import { BsTelegram } from "react-icons/bs";

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

function TelegramBotComponent() {

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
            <title>Coronavirus-Helper Telegram-Bot</title>
            <meta name="description" content="Coronavirus-Helper Telegram-Bot" />
            <link rel="icon" href='/images/c-h-logo-round.png' />
            </Head>
          <NavBar link="./"/><br/><br/><br/>
            <Center>
            <a target="_blank" href="https://t.me/coronavirus_project_bot" rel="noreferrer">
            <Icon as={BsTelegram} color="blue.200" boxSize="10em"/>
            </a>
            </Center><br/><br/><br/>
            <Center>
              <Badge colorScheme="purple">{(store.getState().RuEnLanguageReducer.language === "ru") ? "Ноябрьское обновление" : "November Update"}</Badge>&nbsp;
              <Text>
                {(store.getState().RuEnLanguageReducer.language === "ru") ? "Мы добавили пару новых функций и улучшили старые." : "We add some more features and upgrade the old ones."}
              </Text>
            </Center><br/>
            <Center>
              <ul style={{listStyleType:"none"}}>
                <li>{(store.getState().RuEnLanguageReducer.language === "ru") ? "1) Язык бота автоматически подстраивается под язык пользователя на данном устройстве и на данном аккаунте." : "1) The language of the bot automatically adjusts to the language of the user on this device and on this account."}</li>
                <li>{(store.getState().RuEnLanguageReducer.language === "ru") ? "2) Мы добавили функцию /geo, с помощью которой по геопозиции пользователя определяется ближайший пункт сдачи теста на коронавариус и пункт вакцинации." : "2) We have added the /geo function, which determines the nearest coronavarius test point and vaccination point based on the user's geolocation."}</li>
                <li>{(store.getState().RuEnLanguageReducer.language === "ru") ? "3) Количество стран в функции /stat было увеличнено до 120. " : "3) The number of countries in the /stat function has been increased to 120."}</li>
                <li>{(store.getState().RuEnLanguageReducer.language === "ru") ? "4) Общая производительность бота улучшена." : "4) The overall performance of the bot has been improved."}</li>
              </ul>
            </Center>
          </div> 
          <Footer position="absolute"/>  
        </div>
    )
}

const ConnectedTelegramBotComponent = connect(mapStateToProps,mapDispatchToProps)(TelegramBotComponent)

export default function ReadyTelegramBotComponent() {
    return (
        <Provider store={store}> 
            <ConnectedTelegramBotComponent/>
        </Provider>
    )
}