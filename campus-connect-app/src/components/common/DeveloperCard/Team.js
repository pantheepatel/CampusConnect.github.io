import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "./Layout";
import { SectionHeading, Subheading as SubheadingBase } from "./Heading";

import { ReactComponent as TwitterIcon } from "./icons/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "./icons/github-icon.svg";

import Panthee from '../../../assets/Panthee.jpg'
import Yagnik from '../../../assets/Yagnik.jpg'
import Yash from '../../../assets/Yash.jpg'
// import Het from '../../../assets/Het.jpg'
// import Mishva from '../../../assets/Mishva.jpg'

const HeadingContainer = tw.div`-mt-20`
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`


const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-12 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-3 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

const Team = ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  cards = [
    {
      imageSrc: Yagnik,
      position: "Lead Backend developer",
      name: "Yagnik Varu",
      links: [
        {
          url: "https://www.linkedin.com/in/yagnik-varu-41216a22a",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/yagnik-varu",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Panthee,
      position: "Lead Frontend developer",
      name: "Panthee Patel",
      links: [
        {
          url: "https://www.linkedin.com/in/panthee-patel-55751b226/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/pantheepatel",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "Het",
      position: "Designer",
      name: "Het Sojitra",
      links: [
        {
          url: "https://www.linkedin.com/in/het-sojitra-4442b2228",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com/het4399",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Yash,
      position: "Frontend Developer & designer",
      name: "Yash Padaria",
      links: [
        {
          url: "https://www.linkedin.com/in/yash-padariya-22273a229",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "Mishva",
      position: "Sr. Developer",
      name: "Troye Sivan",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}

        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage style={{objectFit:'cover'}} imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
export default Team