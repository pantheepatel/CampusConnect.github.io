import React, { useState, useEffect } from "react"
// import 'tailwindcss/stubs/defaultConfig.stub';
import styled from "styled-components"
import tw from "twin.macro"
import { SectionHeading as HeadingTitle } from "./title.js";
import Team from "./DeveloperCard/Team.js";
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api


const Container = tw.div`relative`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;


function CardC() {
  const [cards, setCardData] = useState()  //store club data 

  useEffect(() => {
    // console.log('into')
    clubData_().then(response => {
      console.log('response', response)
      setCardData(response.data['clubData'])
      // setCardData(response.data["clubData"]);
      // console.log('cards',cards)
    })// save response in clubdata
  }, [])

  // const cards = [
  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
  //     title: "Specialty Clubs",
  //     description:
  //       "Specialty clubs offer a great way to bring students together from one or multiple schools from one community to come togetherto serve. Some students form specialty clubs to provide service that aligns with their shared academic field of study, like medical program students offering healthcare support in their communities",
  //     url: "https://google.com"
  //   },

  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //     title: "Music Flux",
  //     description:
  //       "The Music Club provides an inclusive platform to the music lovers to dip in the musical ocean, and also to participate and showcase their musical skill. It is a place where students come to jam, learn, and make music of different essence. The club conducts a variety of activities throughout the year ranging from grand intra-campus shows to fierce musical competitions, productive musical workshops to preparing students to excel in nation-wide contests.",
  //     url: "https://google.com"
  //   },

  //   {
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
  //     title: "Nightspear",
  //     description:
  //       "This dance club is to boost up the morale of students and to highlight the talent of dance and creativity.It is a great platform for those students who are passionate towards dancing. It also provides ample opportunities by conducting Dance competitions",
  //     url: "https://google.com"
  //   }
  // ];

  return (
    <>
      <Container>
        <SingleColumn>
          <HeadingInfoContainer>
            <HeadingTitle>Popular Clubs</HeadingTitle>
            <HeadingDescription>
              If a school does not approve your chartered club, consider chartering a Campus Lions club that operates independently from the school
            </HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            {
              cards.map((card, i) => (
                <Card key={i} reversed={i % 2 === 1}>
                  <Image imageSrc={card.club_image} />
                  <Details>
                    <Title>{card.club_name}</Title>
                    <Description class='homeDes'>{card.club_description}</Description>
                    <Link to={`/club/${card.club_id}`}>See Clubs Details</Link>
                  </Details>
                </Card>
              ))
            }
          </Content>
        </SingleColumn>
      </Container>
      <Team />
    </>
  );
}



export default CardC