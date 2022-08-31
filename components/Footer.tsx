import {
   Box,
   chakra,
   Container,
   Link,
   Stack,
   Text,
   useColorModeValue,
   VisuallyHidden,
 } from '@chakra-ui/react';
 
 
 const Footer: React.FC = () => {
   return (
      <Box
         mt={8}
         bg={'gray.800'}
         color={'gray.200'}
      >
         <Container maxW={'container.md'} py={4} textAlign={{ base: 'center'}}>
            <Text>© 2022 Goldwire </Text>
         </Container>
      </Box>
   );
 }

 export default Footer