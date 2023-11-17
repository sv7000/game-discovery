import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
  //colorMode represent current modeand toggleColorMode is a function
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme='blue' isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch