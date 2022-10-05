import React from 'react'
import {Text,
SimpleGrid,
Box,
Button,
Stack,
 } from '@chakra-ui/react'
 import { 
useNavigate } 
from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  return (
    <>
        <SimpleGrid
        columns={3}>
        <Box w={'20%'} p={'3'}>
        <img 
        src='https://media-exp1.licdn.com/dms/image/C560BAQEnldyj4bXt1Q/company-logo_200_200/0/1519869793626?e=2147483647&v=beta&t=S-EvaraEoQg4MMavKvpnNTxp0qwS_Wot2OkXQD_bSq0'
        alt='logo'>
        </img>
        </Box>
        <Box>
        <Text  fontSize={'5xl'}>
        User List
        </Text>
        </Box> 
        <Box p={'3'}>
          <Stack direction='row' spacing={4}>
        <Button onClick={() => navigate('/add-user')}>Add user</Button>
        <Button >Logout</Button>
        </Stack>
        </Box>
        </SimpleGrid>

    </>
  )
}

export default Header