import React from "react"

import ThemeToggleButton from "./theme-toggle-button";

import store from "../store/store"
import { Provider } from 'react-redux'
import { connect } from "react-redux"
import { Button, Divider, Spacer, useColorMode } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

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

function NotReadyNavBar(props) {

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

    return (
        /*<Box
      position="fixed"
      as="nav"
      w="100%"
      bg={'red'}//useColorModeValue('#ffffff40', '#20202380')
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        align="center"
        justify="space-between"
      >
        <Spacer/>
        <Flex align='center' mr={5}>
        
        </Flex>
      </Container>
    </Box>*/
    <Flex bg={useColorModeValue('#f3ede6', '#20202380')} zIndex={1} as="nav" w="100%" css={{backdropFilter: "blur(10px)"}} position="fixed"> {/*useColorModeValue('#ffffff40', '#20202380')*/}
  <Box p='2' display="flex">
    <Heading size='md' align="center" display="flex" columnGap={'5px'}>
        {(props.link !== "nothing") ? 
                <NextLink href={props.link}><Button><ArrowBackIcon/></Button></NextLink>
                 : null}
        <NextLink href="/">
            <a style={{marginTop: '8px'}}>Coronavirus-Helper</a>
        </NextLink>
    </Heading>
  </Box>
  <Spacer />
  <Box display="flex" justifyContent="space-between" p={2} columnGap={'10px'}>
  <Button onClick={() => {
            store.dispatch(changeReduxLanguage())
            }}>{(store.getState().RuEnLanguageReducer.language === "ru") ? <a>English</a> : <a>Русский</a>}</Button>
    <ThemeToggleButton/>
  </Box>
</Flex>
    )
}

const ConnectedNavBar = connect(mapStateToProps,mapDispatchToProps)(NotReadyNavBar)

export default function NavBar(props) {
    return (
        <Provider store={store}>
            <ConnectedNavBar link={props.link}/>
            <Divider/>
        </Provider>
    )
}