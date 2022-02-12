import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {  useColorMode } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/react"

export default function ThemeToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode} colorScheme={colorMode === 'light' ? "purple" : "orange"}>
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
      </header>
    )
  }