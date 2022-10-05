import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'


const Home = () => {
 
  return (
    <>
    <Box>
    <Nav/>
    </Box>
    <Box >
    <Image 
    src='https://www.ntaskmanager.com/wp-content/uploads/2021/03/Best-employee-management-system.jpg.webp'
    alt='EMS'
    width='100%' />
    </Box>
    </>
  )
}

export default Home