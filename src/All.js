import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Avatar, Box, Button,  Center,  Heading,  Input, Select, SimpleGrid, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const All = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  const [sortValue, setSortValue] = useState("")
  const [posts, setPosts] = useState([])

  const sortOptions = ["name", "email", "address", "number"]
  useEffect(()=> {
    all()
  }, [])
const all = async() => {
return await axios
.get("http://localhost:3000/users")
.then((response) => setPosts(response.data))
.catch((err)=> console.log(err))
}
const handleSearch = async(e) => {
e.preventDefault()
return await axios.get(`http://localhost:3000/users?q=${value}`)
.then((response) => {
  setPosts(response.data)
  setValue("")
})
.catch((err) => console.log(err))
}

const handleReset = () => {
  all()
}
const handleSort = async(e) => {
  let value = e.target.value
  setSortValue(value)
  return await axios.get(`http://localhost:3000/users?_sort=${value}&_order=asc`)
  .then((response) => {
    setPosts(response.data)
  })
  .catch((err) => console.log(err))
  }
  const handleFilter = async(value) => {
    return await axios.get(`http://localhost:3000/users?status=${value}`)
    .then((response) => {
      setPosts(response.data)
    })
    .catch((err) => console.log(err))
    }
  return (
    <>
      <Box h={'100vh'} bg='gray.50'>
      <Box w={'100%'} h={'20%'} pl='200px'>
      <SimpleGrid
        columns={3}>
        <Box w={'20%'} p={'3'}>
        <img 
        src='https://media-exp1.licdn.com/dms/image/C560BAQEnldyj4bXt1Q/company-logo_200_200/0/1519869793626?e=2147483647&v=beta&t=S-EvaraEoQg4MMavKvpnNTxp0qwS_Wot2OkXQD_bSq0'
        alt='logo'>
        </img>
        </Box>
        <Box>
        <Text  fontSize={'3xl'}>
        User List
        </Text>
        </Box> 
        <Box p={'3'}>
          <Stack direction='row' spacing={4}>
        <Button onClick={() => navigate('/add-user')}>Add user</Button>
        <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
        </Stack>
        </Box>
        </SimpleGrid>
      </Box>
      <Box w={'100%'} h={'20%'} pl='200px'>
      <SimpleGrid
        columns={3}>
        <Box w={'40%'} p={'3'}>
        <Select 
        placeholder='Sort By:'
        onChange={handleSort}
        value={sortValue}>
        {
          sortOptions.map((item,index) => (
            <option value={item} key={index}>{item}</option> 
          ))
        }
        </Select>
        </Box>
        <Box w='50%'>
        <form 
        onSubmit={handleSearch}>
    <Input type='text'
     placeholder='Search User'
     value={value}
     onChange = {(e) => setValue(e.target.value) }/>
      <Stack direction='row' spacing={4}  p='5'>
        <Button 
        type='submit'
        colorScheme='facebook'
         variant='solid'
         >
           Search
        </Button>
         <Button 
         type='submit'
         colorScheme='yellow'
          variant='solid'
          onClick={() => handleReset}>
           Reset
          </Button>
          </Stack>
          </form>
        </Box> 
        <Box p={'3'}>
          <Text pl='12'
          pb='3'>
            Status: 
          </Text>
          <Stack direction='row' spacing={4}>
        <Button  colorScheme='green' onClick={() => handleFilter("Active")} >Active</Button>
        <Button colorScheme='red' onClick={() => handleFilter("Inactive")} >Inactive</Button>
        </Stack>
        </Box>
        </SimpleGrid>
      </Box>
 
      <Box w={'100%'} h={'50%'}>
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
        posts.length === 0 ? (
          <Heading>
            No Data Found
          </Heading> 
        )
        :
        (
          posts.map((d) => (
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
        ))
      )}   
    </SimpleGrid>
    </Center>
      </Box>
      </Box>
    </>
  )
}

export default All