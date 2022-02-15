import { Center, Button, Link, Tag , useColorModeValue, Heading, TagLeftIcon, TagLabel, Text, Avatar, Spacer} from '@chakra-ui/react'

import Head from 'next/head'

import NextLink from "next/link"

import React from 'react'

import store from "../store/store"
import { Provider } from 'react-redux'
import { connect } from "react-redux"

import NavBar from '../devComponents/navbar'
import Footer from '../devComponents/footer'
import { ArrowLeftIcon, ChevronRightIcon, InfoOutlineIcon, WarningIcon } from '@chakra-ui/icons'

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
        <title>Coronavirus-Helper</title>
        <meta name="description" content="Coronavirus-Helper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar link="nothing"/>
      <br/><br/><br/>
      <Center>
      <Avatar name="Coronavirus-Helper Logo" src="/images/c-h-logo.jpeg" size="2xl"/>
      </Center><br/><br/>
      <Center>
        <Tag colorScheme={"red"} fontSize="17px" size="lg">
        <TagLeftIcon as={WarningIcon}/>
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p>Привет! Coronavirus-Helper — это проект с открытым исходным кодом, который предоставляет людям помощь в поиске актуальной информации о Covid-19.</p> : <p>Hello! Coronavirus-Helper is an open-source project, that provides people help in finding the latest info about Covid-19.</p>)}
        </Tag>
      </Center><br/>
      <Center>
        <Heading as="h3" textDecoration="underline" textDecorationColor={"grey"}>
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p>Какую помощь вы оказываете?</p> : <p>What kind of help do you provide?</p>)}
        </Heading>
      </Center><br/><br/>
      <Center>
      <Tag size={"lg"} variant='subtle' colorScheme='cyan'>
      <TagLeftIcon boxSize='12px' as={InfoOutlineIcon} />
      {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p style={{textOverflow: "ellipsis"}}>
Мы предоставляем современные и удобные технологии: Ботов и Мессенджер.</p> : <p>We provide modern and convenient technologies: Bots and Messenger.</p>)}
    </Tag>
      </Center><br/><br/>
      <Center>
        <Heading as="h3" textDecoration="underline" textDecorationColor={"grey"}>
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p>Узнать больше...</p> : <p>Learn more...</p>)}
        </Heading>
      </Center><br/>
      <Center>
        <Tag fontSize="23px" variant="solid" bg={useColorModeValue("blue.500","purple.500")} size="lg">
        <p style={{width:"400px"}}>
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p>С нашей системой ботов вы можете найти ближайший пункт вакцинации, где вы можете сделать вакцину или пройти тест на коронавирус, статистику в реальном времени и многое другое!</p> : <p>With our Bots system you can find closest vaccinationn point, whre you can make a vaccine or be tested for coronavirus, real-time statistics and even more!</p>)}
        </p>
        </Tag>
      </Center><br/>
      <Center>
      <NextLink href="./product/bots">
        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <a>Перейти к странице с ботами</a> : <a>Go to bots page</a>)}
        </Button>
      </NextLink>
      </Center><br/>
      <Center>
        <Tag fontSize="23px" variant="solid" bg={useColorModeValue("blue.500","purple.500")} size="lg">
        <p style={{width:"400px"}}>
        {((store.getState().RuEnLanguageReducer.language === "ru") ?  <p>Наш Мессенджер единственный, что работает с полной безопасностью, скоростью и облачным хранилищем и вычислениями без кеша. С его помощью вы можете связаться со своими врачами, используя специальные функции, родственниками, друзьями и коллегами.</p> : <p>Our Messenger is the only one, who works with full security, speed and cloud storaging and calculations without no cache. Using it you can connect with your doctors, using special functions, relatives, friends and coworkers.</p>)}
        </p>
        </Tag>
      </Center><br/>
      <Center>
      <NextLink href="./product/messenger">
      <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
      {((store.getState().RuEnLanguageReducer.language === "ru") ? <a>Перейти к странице с мессенджером</a> : <a>Go to messenger page</a>)}
        </Button>
      </NextLink>
      </Center><br/>
      <Footer/>
      <style jxs>
        {`
          p {
           overflow-wrap: break-word;
          }
        `}
      </style>
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
