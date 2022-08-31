import {
   Heading,
   Avatar,
   Box,
   Center,
   Image,
   Flex,
   Text,
   Stack,
   Button,
   Link,
 } from '@chakra-ui/react';

 export interface Card {
   name: string,
   profileImage: string,
   role: string,
 }
 
 const SocialProfileWithImage: React.FC<Card> = ({ name, profileImage, role }) => {
   return(
      <>
         <Center py={6}>
            <Box
               w={'full'}
               overflow={'hidden'}
               my={4}
            >
               <Flex justify={'center'}>
                  <Avatar
                     boxShadow={'md'}
                     size={'xl'}
                     src={profileImage}
                     css={{
                        border: '2px solid white',
                     }}
                  />
               </Flex>
      
               <Box>
                  <Stack spacing={0} align={'center'} mb={0}>
                     <Heading fontSize={{ base: 'lg', md: 'lg', lg: '2xl'}} fontWeight={500} fontFamily={'body'}>
                        {name}
                     </Heading>
                     <Text color={'gray.500'}>{role}</Text>
                  </Stack>
               </Box>
            </Box>
         </Center>
      </>
   )

 }

 export default SocialProfileWithImage