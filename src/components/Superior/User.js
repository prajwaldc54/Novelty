import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import
{Box,
Text,
Center,
Table,
Thead,
Tbody,
Tr,
Th,
Td,
TableContainer,
Button,
SimpleGrid,
useToast
} 
from '@chakra-ui/react'
import { useParams, Link, useNavigate } from 'react-router-dom';
const User = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [post, setPost] = useState([])
  useEffect(()=> {
    async function all() {
      try{
      const sabai = await axios.get(`http://localhost:3000/users/${id}`)
        setPost(sabai.data)
      }catch(error){
        console.log("Something went wrong")
      }
    }
    all()
  }, [])

  const { id } = useParams()

  const handleDelete = async id =>{
    await axios.delete(`http://localhost:3000/users/${id}`)
    toast({
      position: "top-center",
      title: 'User Sucessfully Deleted',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
    navigate("/all")
  }

  return (
    <>
    <Center>
  <Box h={'70%'} w={'70%'} m={'25'}>
   <Text fontSize={'4xl'}>
     User Details
     </Text>
     <TableContainer mt={'12'}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Address</Th>
        <Th isNumeric>Phone</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{post.name}</Td>
        <Td>{post.email}</Td>
        <Td>{post.address}</Td>
        <Td isNumeric>{post.number}</Td>
        <Td>{post.status}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  </Box>  
  </Center>
  <Center>
  <Box w={'70%'} h={'70%'}>
   <SimpleGrid columns={2} spacing={1}> 
   <Box>
  <Button 
  colorScheme={'facebook'}
  >
    <Link to={`/edit/${post.id}`}>Edit User</Link>
  </Button>
  </Box>
  <Box>
  <Button 
  colorScheme={'red'}
  onClick={() => handleDelete(post.id)}>
    Delete
  </Button>
  </Box>
  </SimpleGrid>
  </Box>
  </Center>
    </>
  )
}

export default User