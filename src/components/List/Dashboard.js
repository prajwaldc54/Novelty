import { DeleteIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Icon} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { UserData } from '../../Utilis/Data';
import Barchart from '../Chart/Barchart';
import Linegraph from '../Chart/Linegraph';
import Piechart from '../Chart/Piechart';

const Dashboard = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ]
      },
    ],
  });
  const handleClick = () => {
    localStorage.clear()
    navigate('/signin')
  }
  return (
    <>
      <HStack>
      <Box w='20%' h='721px'   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>
        <Flex dir='column' mt='10' ml='7' >
      <Icon as={ViewIcon} m='1'/>
      <Button ml='1'
      mt='-2'
      variant='ghost'
      onClick={() => navigate('/all')}>
        User List
      </Button>
      </Flex>
      <Flex dir='column' mt='10' ml='7' >
      <Icon as={DeleteIcon} m='1'/>
      <Button ml='1'
      type='submit'
      mt='-2'
      variant='ghost'
      onClick={handleClick}>
        Logout
      </Button>
      </Flex>
      </Box>
      <Flex w='80%' h='700px' direction='column' pl='300px'>
      <Box h='180px' w='500px' ml='-300'>
        <Barchart charData={userData}/>
      </Box>
     
      <Box h='180px' w='500px' pt='20'>
      <Linegraph charData={userData}/>
      </Box>
    
      <Box w='250px' ml='600' mt='20'>
      <Piechart charData={userData} />
      </Box>
      </Flex>
      </HStack>

    </>
  )
}

export default Dashboard