import type { NextPage } from "next";
import { Container, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react'

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SocialProfileWithImage from "../components/Card";
import Features from "../components/Features";
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

            <Text textAlign={'center'} pb={12} color={'gray.500'} fontSize={{ base: 'xl' }}>
               {websiteConfig.homepage.intro}
            </Text>

            {/* @ info box */}
            <SimpleGrid pb={12} columns={{sm: 1, md: 2}} spacing={8}>
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
            {/* @ end info box */}

            {/* @ faq box */}
            <Features
               title={websiteConfig.faq.title}
               dataBody={websiteConfig.faq.dataBody}
            />
            {/* @ end faq box */}

            {/* @ team box */}
            <Text textAlign={'center'} color={'gray.700'} fontWeight={500} fontSize={{ base: '4xl' }}>
               Il team
            </Text>

            <SimpleGrid textAlign={'center'} columns={{sm: 2, md: 5 }} spacing={8}>
               <SocialProfileWithImage 
                  name={websiteConfig.team.founder.name} 
                  profileImage={websiteConfig.team.founder.avatar}
                  role={websiteConfig.team.founder.role}
               />
               <SocialProfileWithImage 
                  name={websiteConfig.team.coFounder.name} 
                  profileImage={websiteConfig.team.coFounder.avatar}
                  role={websiteConfig.team.coFounder.role}
               />
               <SocialProfileWithImage 
                  name={websiteConfig.team.dev.name} 
                  profileImage={websiteConfig.team.dev.avatar}
                  role={websiteConfig.team.dev.role}
               />
               <SocialProfileWithImage 
                  name={websiteConfig.team.president.name} 
                  profileImage={websiteConfig.team.president.avatar}
                  role={websiteConfig.team.president.role}
               />
               <SocialProfileWithImage 
                  name={websiteConfig.team.adminEvent.name} 
                  profileImage={websiteConfig.team.adminEvent.avatar}
                  role={websiteConfig.team.adminEvent.role}
               />
            </SimpleGrid>
            {/* @ end team box */}

         </Container>

         <Footer />
      </>
   )
 }

 export default Home