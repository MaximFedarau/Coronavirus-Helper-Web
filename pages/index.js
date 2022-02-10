import { Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import React from 'react'

import TestComponent from '../components-ru/TestComponent'



export default function Home() {

  const [language,setLanguage] = React.useState('en')

  console.log(0,language,localStorage.getItem('language'))

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
    }
  }

  React.useLayoutEffect(() => {
    if (localStorage.getItem('language')) {
      setLanguage((localStorage.getItem('language')))
    } else {
      localStorage.setItem('language', language)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

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

