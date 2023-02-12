import {React, useState} from 'react'
import axios from 'axios';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

const API_KEY = '586a7f28884b3d53e72e0a0fcf2ff1b969c68bb3be717a9ab60203ea9e45306c'



 

function ContactUsSection() {
  const [loading, setLoading] = useState(false)
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()


  async function sendEmail() {
    setLoading(true)
    await axios({
      method: "POST",
      url: `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`,
      data: {
        senderId: '39ec7195-ef49-4f16-a22c-d098cfdb9b9d',
        to: '39ec7195-ef49-4f16-a22c-d098cfdb9b9d@mailslurp.com',
        subject: subject,
        body: `
        email: ${email}
        name: ${userName}
        message: ${message}
        `,
      }
    })
    alert('Your interest has been registered. We will contact you back shortly')
    setLoading(false)
    navigate('/')

  }

  
    return (
        <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }} >
          <Stack spacing={10}>
            <Flex align="center" justify="center" direction="column">
              <Heading fontSize="4xl" mb={2}>
                Contact Us
              </Heading>
              <Text fontSize="md" textAlign="center">
                Let us see what we can do about your business needs
              </Text>
            </Flex>
            <VStack
              as="form"
              spacing={8}
              w="100%"
              bg={useColorModeValue('white', 'gray.700')}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="Ahmad" rounded="md" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value = {email} onChange={(e) => {setEmail(e.target.value)}} placeholder="test@test.com" rounded="md" />
                  </FormControl>
                </Stack>
                <FormControl id="subject">
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" value = {subject} onChange={(e) => {setSubject(e.target.value)}} placeholder="Enter subject here" rounded="md" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea value={message} size="lg" onChange={(e) => {setMessage(e.target.value)}} placeholder="Enter your message" rounded="md" />
                </FormControl>
              </VStack>
              <VStack w="100%">
                {loading ? <Spinner size='xl' />
                : (<Button
                  onClick={sendEmail}
                  bg="green.300"
                  color="white"
                  _hover={{
                    bg: 'green.500'
                  }}
                  rounded="md"
                  w={{ base: '100%', md: 'max-content' }}
                >
                  Send Message
                </Button>)}
                
              </VStack>
            </VStack>
          </Stack>
        </Container>
      );
}

export default ContactUsSection