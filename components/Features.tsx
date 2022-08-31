import {
   Box,
   Container,
   Heading,
   SimpleGrid,
   Icon,
   Text,
   Stack,
   HStack,
   VStack,
 } from '@chakra-ui/react';
 
 import { CheckIcon } from '@chakra-ui/icons';
 
 export interface Features {
   title: string,
   dataBody: any
}
 
 const Features: React.FC<Features> = ({ title, dataBody }) => {
   return (
     <Box py={12}>
       <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
         <Heading color={'gray.700'} fontWeight={500} fontSize={{ base: '4xl' }}>{title}</Heading>
         <Text color={'gray.600'} fontSize={'xl'}>
         Vogliamo creare una rete di contatti tra persone provenienti da contest professionali differenti, tutte desiderose d raccontare la propria storia.
         </Text>
       </Stack>
 
       <Container maxW={'6xl'} mt={10}>
         <SimpleGrid columns={{ base: 1, md: 2  }} spacing={10}>
               <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                     <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                     <Text fontWeight={600}>Creazione</Text>
                     <Text color={'gray.600'}>{dataBody.creazione}</Text>
                  </VStack>
               </HStack>
               <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                     <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                     <Text fontWeight={600}>Collaborazione</Text>
                     <Text color={'gray.600'}>{dataBody.collaborazione}</Text>
                  </VStack>
               </HStack>
               <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                     <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                     <Text fontWeight={600}>Condivisione</Text>
                     <Text color={'gray.600'}>{dataBody.condivisione}</Text>
                  </VStack>
               </HStack>
               <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                     <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                     <Text fontWeight={600}>Promozione</Text>
                     <Text color={'gray.600'}>{dataBody.promozione}</Text>
                  </VStack>
               </HStack>
               <HStack align={'top'}>
                  <Box color={'green.400'} px={2}>
                     <Icon as={CheckIcon} />
                  </Box>
                  <VStack align={'start'}>
                     <Text fontWeight={600}>Scambi</Text>
                     <Text color={'gray.600'}>{dataBody.scambi}</Text>
                  </VStack>
               </HStack>
         </SimpleGrid>
       </Container>
     </Box>
   );
 }

 export default Features