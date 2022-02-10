import { Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import React from 'react'

import TestComponent from '../components-ru/TestComponent'



export default function Home() {

  const [language,setLanguage] = React.useState('en')

  function changeLanguage() {
    if (language === "en") {
      setLanguage("ru")
      //localStorage.setItem('language', "ru")
    }
    else if (language === "ru") {
      setLanguage("en")
      //localStorage.setItem('language', "en")
    }
    //console.log(localStorage.getItem('language'))
  }

  /*React.useEffect(() => {
    setLanguage(localStorage.getItem("language"))
    console.log(localStorage.getItem('language'))
  },[])*/

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="./product/bots">
        <a>Go to bots page</a>
      </Link><br/>
      <Link href="./product/messenger">
        <a>Go to messenger page</a>
      </Link>
      <h1>{language}</h1>
      <Button onClick={changeLanguage}>Change language</Button>
      <br/>
    </div>
  )
}

