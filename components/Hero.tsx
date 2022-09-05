import { useState } from 'react';
import ChakraImage from '../helper/chakraImage';
import people from '../public/multicultural.svg';

import {
   Box,
   Heading,
   Container,
   Text,
   Button,
   Stack,
   Input,
   Alert,
   AlertIcon,
   AlertTitle,
   AlertDescription,
} from '@chakra-ui/react';

interface IMessage {
   status: any,
   message: string
}

const AlertMessage: React.FC<IMessage> = (props) => {
   return(
      <>
         <Alert status={props.status} variant='subtle'>
            <AlertIcon />
            {props.message}
         </Alert>
      </>
   )
}
{/* @ end custom card */}

export interface Hero {
   title: string,
   subTitle: string,
}

const Hero: React.FC<Hero> = ({ title, subTitle }) => {

   const [email, setEmail] = useState("");
   const [message, setMessage] = useState(null || "");
   const [statusName, setStatusName] = useState(null || "");
 
   const handleEmailChange = (e: any) => {
     setEmail(e.target.value);
     setMessage("")
     setStatusName("")
   }
 
   const handleSubmit = async () => {
     if (!/\S+@\S+\.\S+/.test(email)) {
       setMessage("Email non valida!");
       setStatusName("error"); 
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
       setStatusName("info"); 
     } else {
       setMessage("Email inserita nella lista di attesa!");
       setStatusName("success"); 
     }
   }
   
   return(
      <>
         <Container maxW={'container.md'}>
            <Stack
               as={Box}
               textAlign={'center'}
               spacing={{ base: 6, md: 10 }}
               py={{ base: 6, md: 10 }}
            >
               
               <Heading as={'h1'}>
                  <ChakraImage
                     alt={title}
                     src={'/logo-gw.png'}
                     width={420}
                     height={230}
                     quality={100}
                     placeholder="blur"
                     blurDataURL={'/logo-gw.png'}
                  />
               </Heading>

               <Text
                  as={'h2'}
                  fontWeight={600}
                  fontSize={{ base: '3xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={'yellow.500'}
               >
                  {subTitle}
               </Text>

               <ChakraImage
                  alt={people}
                  src={people}
                  width={720}
                  height={280}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={people}
               />

               <Stack
                  direction={'column'}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}
                  w={'full'}
               >

                  {message ? <AlertMessage status={statusName} message={message} /> : null }

                  <Stack direction={{ base: 'column', md: 'row' }} w={'full'}>

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
