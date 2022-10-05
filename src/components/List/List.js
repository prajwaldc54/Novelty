import { Avatar, Box, Button, Center, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const List = ({post}) => {

  return (
    <>
<Center>
    <SimpleGrid
    width={'80%'}
    columns={{ sm: 0, md: 3 }}
    spacing='8'
    p='10'
    rounded='lg'
    color='gray.400'
    >
    { 
       post.map((d) => {

        return(
    <Box key={d.id}
    boxShadow='dark-lg' 
    p='6'
    rounded='md'
    bg='white'>
    <Center>
    <Wrap>
    <WrapItem>
    <Avatar
    name='Dan Abrahmov'
    src='https://bit.ly/dan-abramov'
    size={'2xl'} />
    </WrapItem>
    </Wrap>
    </Center>
    <Center>
    <Box pt={'2'} color='black'>
    {d.name}
    </Box>
    </Center>
    <Center>
    <Box p={'2'} color='black'>
    {d.email}
    </Box>
    </Center>
    <Center>
    <Box>
    <Button
    bg={'blue.600'}>
      <Link to={`/user/${d.id}`}>View Profile</Link>
    </Button>
    </Box>
    </Center>
    </Box>
    )
    })
    }    
    </SimpleGrid>
    </Center>
 
    </>
  )
}

export default List