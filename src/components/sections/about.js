import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${colors.green};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledSkills = styled.div`
  position: relative;
  width: 40%;
  margin-left: 60px;
  word-break: break-word;
  ${media.tablet`width: 100%; margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }

  i {
    font-size: 50px;
    margin-right: 25px;
    margin-bottom: 20px;
    filter: grayscale(1);
    transition: all 300ms;
  }

  i:hover {
    filter: grayscale(0);
  }

  @media (max-width: 1250px) {
    i {
      font-size: 35px;
      margin-right: 20px;
    }
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
        </StyledContent>
        {
          <StyledSkills>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-typescript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-vuejs-plain colored"></i>
            <i className="devicon-angularjs-plain colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-nestjs-plain colored"></i>
            <i className="devicon-php-plain colored"></i>
            <i className="devicon-python-plain colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-d3js-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-csharp-plain colored"></i>
            <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
            <i className="devicon-babel-plain colored"></i>
            <i className="devicon-heroku-plain-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-mysql-plain-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
            <i className="devicon-sass-original colored"></i>
            <i className="devicon-vscode-plain colored"></i>
            <i className="devicon-docker-plain-wordmark colored"></i>
            <i className="devicon-solidity-plain colored"></i>
          </StyledSkills>
        }
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
