import React, { useEffect, useState } from "react";
import {
  Input,
  Stack,
  Flex,
  Center,
  Box,
  Heading,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Signup = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [data, setData] = useState([]);

  const getData = (e) => {
    console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();

    const { name, email, password, repassword } = inpval;
    const pattern = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    );
    if (name === "") {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            name field is requred!
          </Box>
        ),
      });
    } else if (email === "") {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            name field is requred!
          </Box>
        ),
      });
    } else if (!email.includes("@")) {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Please Enter valid email address
          </Box>
        ),
      });
    } else if (password === "") {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            password field is requred
          </Box>
        ),
      });
    } else if (!pattern.test(password)) {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Password must have atleast 1 Uppercase, 1 Lowercase, 1 special
            character and 8 characters
          </Box>
        ),
      });
    } else if (repassword !== password) {
      toast({
        position: "top-center",
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Password Doesnt match
          </Box>
        ),
      });
    } else {
      console.log("data added succesfully");
      navigate("/signin");
      localStorage.setItem("novelty", JSON.stringify([...data, inpval]));
    }
  };
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
          <Flex direction="column" w="45%" mt="12">
            <Box>
              <Center>
                <Heading>Sign Up</Heading>
              </Center>
            </Box>
            <Box mt="10">
              <Stack spacing={4}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  onChange={getData}
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={getData}
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  onChange={getData}
                />

                <Input
                  type="password"
                  name="repassword"
                  placeholder="Retype-password*"
                  onChange={getData}
                />

                <Checkbox defaultChecked pl="2">
                  I accept terms and condition of Novelty
                </Checkbox>
                <Center>
                  <Flex>
                    <Button
                      type="submit"
                      colorScheme="teal"
                      variant="outline"
                      onClick={addData}
                    >
                      Submit
                    </Button>
                    <Button
                      ml={"5"}
                      type="submit"
                      colorScheme="facebook"
                      onClick={() => navigate("/signin")}
                    >
                      Already have an account?
                    </Button>
                  </Flex>
                </Center>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </form>
    </>
  );
};

export default Signup;
