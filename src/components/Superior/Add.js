import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Button,
Box,
Center,
Flex,
Stack,
Heading,
Input,
useToast
} 
from '@chakra-ui/react';
import { useNavigate } from 'react-router';
const Add = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [status, setStatus] = useState()
        const [formData, setFormData] = useState({
          name:"",
          email:"",
          address:"",
          number:"",
          status:""
        });
          const change = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          })
          }

        async function add(e){
          e.preventDefault()
          try{
          await axios.post(`http://localhost:3000/users`, formData)
          setStatus(true)
          toast({
            position: "top-center",
            title: 'User Added.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          navigate("/all")
            }catch(error){
              console.log("Something went wrong")
            } 
        }
        if (status){
          return <Add/>
        }
        return (
          <>
            <Center>
        <Flex direction='column' w='45%' mt='12'>
            <Box>
                <Center>
                <Heading>
                    Add User
                </Heading>
                </Center>
            </Box>
         <Box mt='10'>   
        <Stack spacing={'10'}>
        <Input type='text'
         id='name' 
         name="name"
         placeholder='Name*'  
         onChange={e=> change(e)}/>
        <Input type='email' 
        id='email'
        name="email" 
        placeholder='Email*'   
        onChange={e=> change(e)}/>
        <Input type='text' 
        id='address' 
        name="address"
        placeholder='Address' 
        onChange={e=> change(e)}/>
        <Input type='tel' 
        id='number' 
        name="number"
        placeholder='Number' 
        onChange={e=> change(e)}/>
        <Input type='text' 
        id='status' 
        name="status"
        placeholder='Active/Inactive' 
        onChange={e=> change(e)}/>
        <Center>
        <Flex>   
        <Button
              type="submit"
             colorScheme='facebook'
             variant='outline'
             onClick={e =>{add(e)}}> 
              Add User
            </Button> 
            </Flex>
            </Center>
        </Stack>
        </Box>
        </Flex>
        </Center>
          </>
        );
      };

export default Add