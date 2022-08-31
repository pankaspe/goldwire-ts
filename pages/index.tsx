import type { NextPage } from "next";
import { Container, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react'

import Hero from "../components/Hero";
import websiteConfig from "../config/website";

{/* @ define custom card for this page */}
interface ILandingCard {
   title: string,
   body: string,
   bgColor: string,
   textColor: string,
   shadow?: string,
}

const LandingCard: React.FC<ILandingCard> = (props) => {
   return(
      <>
         <Box p={6} bg={props.bgColor} boxShadow={props.shadow} rounded={'md'}>
            <Heading fontWeight={600} fontSize={'2xl'} color={props.textColor} pb={4}>
               {props.title}
            </Heading>
            <Text color={props.textColor}>
               {props.body}
            </Text>
         </Box>
      </>
   )
}
{/* @ end custom card */}


{/* @ start main component page */}
const Home: NextPage = () => {
   return(
      <>
         <Hero 
            title={websiteConfig.meta.title}
            subTitle={websiteConfig.meta.subTitle}
         />

         <Container maxW={'container.lg'}>

            <Text textAlign={'center'} pb={6} color={'gray.500'} fontSize={{ base: 'xl' }}>
               {websiteConfig.homepage.intro}
            </Text>

            <SimpleGrid pt={8} columns={{sm: 1, md: 2}} spacing={8}>
               <LandingCard 
                  bgColor="yellow.500" 
                  textColor="white" 
                  shadow="lg"
                  title="Quando è nato?" 
                  body={websiteConfig.homepage.cards.one} 
               />
               <LandingCard 
                  bgColor="yellow.600" 
                  textColor="white" 
                  shadow="lg"
                  title="La mission" 
                  body={websiteConfig.homepage.cards.two} 
               />
            </SimpleGrid>

         </Container>
      </>
   )
 }

 export default Home