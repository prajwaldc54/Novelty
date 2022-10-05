import React, { useEffect, useState } from 'react'
import { 
Box,
Button,
Center,
Input,
Text,
useToast
} 
from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  const navigate = useNavigate()
  const toast = useToast()
    const { id } = useParams()
    const [state,setState] = useState({
        name: "",
        email: "",
        address: "",
        number: "",
        status:""
    })
    useEffect(()=> {
      async function all() {
        try{
        const sabai = await axios.get(`http://localhost:3000/users/${id}`)
        setState(sabai.data)
        }catch(error){
          console.log("Something went wrong")
        }
      }
        all()
      }, [])

    const change = (e) => {
      setState({
      ...state,
      [e.target.name]: e.target.value
    })
    }
    async function add(e){
      e.preventDefault()
      try{
      await axios.put(`http://localhost:3000/users/${id}`, state)
      navigate("/all")
      toast({
        position: "top-center",
        title: 'User Sucessfully edited',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
        }catch(error){
          console.log("Something went wrong")
        } 
    }
  return (
    <>
    <Box w={'80%'} h={'100%'} m={'5'}>
        <Center>
        <Box h={'30%'} bg='gray'>
        <Text color={'white'}>
        Edit the user Details
        </Text>
        </Box>
        </Center>
        <Center>
        <Box h={'50%'}  >
        <Input variant='outline' placeholder='Name' value={state.name} name='name' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='Email' value={state.email} name='email' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='Address' value={state.address} name='address' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='Number' value={state.number} name='number' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='Active/inactive' value={state.status} name='status' onChange={e => change(e)}/>
        </Box>
        </Center>
        <Center>
        <Box h={'20%'}>    
        <Button
        colorScheme={'messenger'}
        onClick={e => add(e)}>
         Update
        </Button>
        </Box>
        </Center>
    </Box>
    </>
  )
}

export default Edit