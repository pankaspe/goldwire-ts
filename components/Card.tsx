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
   url: string,
 }
 
 const SocialProfileWithImage: React.FC<Card> = ({ name, profileImage, role, url }) => {
   return(
      <>
         <Center py={6}>
            <Box
               w={'full'}
               boxShadow={'xl'}
               rounded={'md'}
               overflow={'hidden'}
            >
               <Image
                  h={'120px'}
                  w={'full'}
                  src={
                     'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                  }
                  objectFit={'cover'}
               />
               <Flex justify={'center'} mt={-12}>
                  <Avatar
                     size={'xl'}
                     src={profileImage}
                     css={{
                        border: '2px solid white',
                     }}
                  />
               </Flex>
      
               <Box p={4}>
                  <Stack spacing={0} align={'center'} mb={5}>
                     <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        {name}
                     </Heading>
                     <Text color={'gray.500'}>{role}</Text>
                  </Stack>
         
                  <Button
                     as={Link}
                     href={url}
                     w={'full'}
                     mt={8}
                     bg={'yellow.500'}
                     color={'white'}
                     rounded={'md'}
                     _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                     }}>
                     Più info
                  </Button>
               </Box>
            </Box>
         </Center>
      </>
   )

 }

 export default SocialProfileWithImage