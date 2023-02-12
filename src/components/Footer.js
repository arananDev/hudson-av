import {
    Stack,
    Link,
    Text,
  } from '@chakra-ui/react';

  
  const Footer = () => {
    return (
     
        <Stack style = {{marginTop: '5em'}} direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
          <Text fontSize="md">
            Built by{' '}
            <Link
              href="https://github.com/arananDev"
              textDecoration="underline"
              _hover={{ textDecoration: 'underline' }}
              isExternal
            >
              Aranan Wijayasooria
            </Link>
          </Text>
        </Stack>
    );
  };
  
 
  
  export default Footer;