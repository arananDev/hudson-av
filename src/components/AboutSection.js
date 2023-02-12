import React from 'react'
import { Container, chakra, Stack, Text, Button, } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { useNavigate } from 'react-router-dom';

function AboutSection() {
  const navigate = useNavigate()
  return (
    <Container id = 'aboutSection' p={{ base: 8, sm: 5 }} style = {{'paddingTop': '12em'}}>
    <Stack direction="column" spacing={6} alignItems="center">
      
      <chakra.h1
        fontSize={{ base: '4xl', sm: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        maxW="2000px"
      >
        Create user friendly and accessible apps{' '}
        <chakra.span color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
          with speed
        </chakra.span>
      </chakra.h1>
      <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
        Data Crackle promises to simplify your tech related issues in a easy to use platform, and give you a solution which doesn't overcomplicate. 
      </Text>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w={{ base: '100%', sm: 'auto' }}
        spacing={5}
      >
        <Button
          colorScheme="teal"
          variant="outline"
          rounded="md"
          size="lg"
          height="3.5rem"
          fontSize="1.2rem"
          onClick={() => (navigate('/contact'))}
        >
          Get Started
        </Button>
        
      </Stack>
    </Stack>
  </Container>
  )
}

export default AboutSection