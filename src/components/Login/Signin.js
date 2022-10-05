import React, { useEffect, useState } from 'react'
import { Input,
Stack, 
Flex,
Center,
Box,
Heading,
Checkbox,
Button,
useToast,
} 
from 
'@chakra-ui/react'
import { useNavigate } from 'react-router'


const Signin = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [inpval, setInpval] = useState({
        email: "",
        password: "",

    })


    const getData = (e) => {
        console.log(e.target.value);
        
        const { value, name } = e.target;
        console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();
        const getuserArr = localStorage.getItem("novelty");
        const { email, password} = inpval;
        const pattern = new RegExp ("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
          if (email === "") {
             toast({
                position: 'top-center',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Email is requred!
                  </Box>
                ),
              })
        } else if (!email.includes("@")) {
             toast({
                position: 'top-center',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Please Enter valid email address
                  </Box>
                ),
              })
        } else if (password === "") {
             toast({  
                position: 'top-center',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Password field is requred
                  </Box>
                ),
              })
        }else if (!pattern.test (password) ){
            toast({
               position: 'top-center',
               render: () => (
                 <Box color='white' p={3} bg='red.500'>
                   Password must have atleast 1 Uppercase, 1 Lowercase, 1 special character and 8 characters 
                 </Box>
               ),
             })
            }       
        else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                })
                if (userlogin.length === 0) {
                    toast({
                        position: 'top-center',
                        render: () => (
                          <Box color='white' p={3} bg='red.500'>
                            Invalid Credintials
                          </Box>
                        ),
                      })
                } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("login_details", JSON.stringify(userlogin))
                    localStorage.setItem('login', true)
                    navigate("/dashboard")
                }
            }

        }

    }
    useEffect(() => {
      let login = localStorage.getItem('login')
      if(login){
        navigate('/dashboard')
      }
    })
  return (
    <>
    <form>
    <Center>
    <Flex direction='column' w='45%' mt='12'>
        <Box>
            <Center>
            <Heading>
                Sign In
            </Heading>
            </Center>
        </Box>
     <Box mt='10'>
        
    <Stack spacing={4}>
    <Input type='email' 
    id='email'
    name='email'
    placeholder='Email*'
    onChange={getData} />


    <Input type='password' 
    id='password'
    name='password'
    onChange={getData}
    placeholder='Password*' />
    <Checkbox defaultChecked pl='2'>I accept terms and condition of Novelty</Checkbox>

    <Center>
    <Flex>   
    <Button
          type="submit"
         colorScheme='facebook'
         variant='outline'
         onClick={addData}
         > 
          Submit
        </Button> 
        <Button
        ml={'3'}
         colorScheme='yellow'
         variant='outline'
         onClick={() => navigate('/signup')}
         > 
          Sign up
        </Button> 
        </Flex>
        </Center>
    </Stack>
    </Box>
    </Flex>
    </Center>
    
    </form>
        </>
)}

export default Signin