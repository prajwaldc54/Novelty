import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { 
  useNavigate } 
  from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <>
 <Flex minWidth='max-content'
   alignItems='center'
   gap='2'   
   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
  <Box p={4}>
    <Heading size='md'>EMS (Employee Mnagement System)</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' p={4}>
    <Button colorScheme='teal' onClick={() => navigate('/signup')}>Sign Up</Button>
    <Button colorScheme='teal' onClick={() => navigate('/signin')}>Sign in</Button>
  </ButtonGroup>
</Flex>
    </>
  )
}

export default Nav