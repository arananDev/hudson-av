import React from 'react'
import { Container, Box, chakra, Text, Icon, SimpleGrid, Button, Center} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdWebAsset, MdOutlineMobileFriendly, MdModelTraining, MdAccessibilityNew } from 'react-icons/md';
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Web Applications',
    content:
      'Need a website built with a simple UI for your users and technical processes under the hood? We can build both these components',
    icon: MdWebAsset
  },
  {
    heading: 'Mobile Apps',
    content: `With our tech stack we can build Mobile Applications which run on IOS, Android, and even online!`,
    icon: MdOutlineMobileFriendly
  },
  {
    heading: 'Machine Learning',
    content:
      'Want to use Machine Learning and AI to automate your business but do not know how? Have a talk with us and let us see if we can help',
    icon: MdModelTraining
  },
  {
    heading: 'Customer Support',
    content: `Even after the project is finished, we are always available to help debug any issues you're still having and help you out if you're confused about any aspect of the product`,
    icon: MdAccessibilityNew
  }
];




function ServicesSection() {
  const navigate = useNavigate()

    return (
        <Container  id = 'serviceSection' maxW="6xl" p={{ base: 5, md: 10 }} style = {{'paddingTop': '12em'}}>
          <chakra.h3 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
            Services
          </chakra.h3>
          <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
            {features.map((feature, index) => (
              <Box key={index} textAlign="center">
                <Icon as={feature.icon} w={10} h={10} color="blue.400" />
                <chakra.h3 fontWeight="semibold" fontSize="2xl">
                  {feature.heading}
                </chakra.h3>
                <Text fontSize="md">{feature.content}</Text>
              </Box>
            ))}
          </SimpleGrid>
          <Center marginTop = {'50'}>
          <Button
          onClick={() => (navigate('/contact'))}
          colorScheme="teal"
          variant="outline"
          rounded="md"
          size="lg"
          height="3.5rem"
          fontSize="1.2rem"
        >
          Get Started
        </Button>

          </Center>
          
        </Container>
      );
}

export default ServicesSection