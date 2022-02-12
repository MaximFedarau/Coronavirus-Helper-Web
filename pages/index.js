import { Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import React from 'react'

import store from "../store/store"
import { Provider } from 'react-redux'
import { connect } from "react-redux"

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

function Home() {

  /*const [language,setLanguage] = React.useState('en')

  console.log(0,language)

  function changeLanguage() {
    if (language === "en") {
      setLanguage("ru")
    }
    else if (language === "ru") {
      setLanguage("en")
    }

    console.log(language)

    if (language === undefined) {
      console.log(1)
    } else {
      console.log(2,language)
      console.log(localStorage.getItem('language'))
    }
  }*/

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

  React.useEffect(() => {
    //document.location.reload()
    console.log(1)
  },[]) 


  function checkLocalStorage() {
    if (typeof window !== 'undefined') console.log("localStorage is available")
  }

  return (
      <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeToggleButton/>
      <Link href="./product/bots">
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <a>Перейти к странице с ботами</a> : <a>Go to bots page</a>)}
      </Link><br/>
      <Link href="./product/messenger">
      {((store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к странице с messenger</a> : <a>Go to messenger page</a>)}
      </Link>
      <br/>
      <h1>{store.getState().RuEnLanguageReducer.language}</h1>
      <Button onClick={() => {
        store.dispatch(changeReduxLanguage())
      }}>Click</Button>
      <Button onClick={checkLocalStorage}>Check local storage</Button>
    </div>
  )
}

const ConnectedHome = connect(mapStateToProps,mapDispatchToProps)(Home)

export default function ReadyHome() {
  return (
    <Provider store={store}>
      <ConnectedHome/>
    </Provider>
  )
}
