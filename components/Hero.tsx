import { useState } from 'react';

import {
   Box,
   Heading,
   Container,
   Text,
   Button,
   Stack,
   Input,
} from '@chakra-ui/react';

export interface Hero {
   title: string,
   subTitle: string,
}

const Hero: React.FC<Hero> = ({ title, subTitle }) => {

   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [className, setClassName] = useState("");
 
   const handleEmailChange = (e: any) => {
     setEmail(e.target.value);
     setMessage("")
     setClassName("")
   }
 
   const handleSubmit = async () => {
     if (!/\S+@\S+\.\S+/.test(email)) {
       setMessage("Email non valida!");
       setClassName("error");
       return;
     }
     const res = await fetch('/api/subscriber/add', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: email,
       }),
     });
     const data = await res.json()
     if (data.error) {
       setMessage("Email già presente nella lista di attesa!");
       setClassName("error");
     } else {
       setMessage("Email inserita nella lista di attesa!");
       setClassName("success");
     }
   }
   
   return(
      <>
         <Container maxW={'container.md'}>
            <Stack
               as={Box}
               textAlign={'center'}
               spacing={{ base: 8, md: 14 }}
               py={{ base: 16, md: 20 }}
            >
               
               <Heading
                  as={'h1'}
                  fontWeight={700}
                  fontSize={{ base: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                  color={'yellow.500'}
               >
                  {title}
               </Heading>
               <Text
                  as={'h2'}
                  fontWeight={600}
                  fontSize={{ base: '3xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={'grey.900'}
               >
                  {subTitle}
               </Text>

               <Stack
                  direction={'column'}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}
                  w={'full'}
               >

                  <Stack direction={{ base: 'column', md: 'row' }} w={'full'}>
                     {message}
                     <Input
                        onChange={handleEmailChange}
                        type={'email'}
                        placeholder={'email'}
                        color={'gray.800'}
                        bg={'gray.100'}
                        rounded={'md'}
                        border={0}
                        _focus={{
                           bg:'gray.200',
                           outline: 'none',
                        }}
                     />
                     <Button
                        onClick={handleSubmit}
                        color={'white'}
                        bg={'gray.600'}
                        rounded={'lg'}
                        px={6}
                        _hover={{
                           bg: 'yellow.700',
                        }}
                     >
                        pre registrati
                     </Button>
                  </Stack>

               </Stack>

            </Stack>
         </Container>
      </>
   )
}

export default Hero
