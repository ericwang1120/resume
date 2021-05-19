import React from 'react'
import { Helmet } from 'react-helmet'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import styled from 'styled-components'

const Div = styled.div`
  margin: 0.4em 0 0.6em 0;
  & > p {
    margin: 0 0 0 0;
  }
`

const Section = styled.section`
  margin: 0.8em 0;
`
const ListItemTitle = styled.span`
  font-weight: bold;
  margin: 0;
`
const Ul = styled.ul`
  padding: 0em;
  list-style-type: square;
  margin: 0;
`

const Li = styled.li`
  margin: 0 0 0 0;
  padding-left: 0pt;
  list-style-position: inside;
  & > ul {
    margin: 0em;
  }
`

const A = styled.a`
  color: #41addd;

  &:hover {
    color: #6cc0e5;
  }
`

const Resume: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Resume Page</title>
        <meta name="description" content="Resume of Eric Wang" />
      </Helmet>
      <H1>Eric Wang</H1>
      <Div>
        High-quality professional with 5 years of IT experience in analysis, design, implementation,
        and maintenance of applications using object-oriented and database technologies. Willing to
        accept challenges and follow best practices in software development. Experienced with
        cutting edge tools and industry standards. Able to effectively self-manage during
        independent projects, as well as collaborate as part of a productive team.
      </Div>

      <Section>
        <H2>PROFESSIONAL EXPERIENCE</H2>
        <Div>
          <ListItemTitle>Wine-Searcher (01/2018 - Present)</ListItemTitle>
          <p>
            Wine-Searcher is a web search engine enabling users to locate the price and availability
            of a given wine, spirit or beer globally. I am working as a Java developer in scripting
            team, responsible for developing java crawler and improving our infructructure.
          </p>
          <Ul>
            <Li>
              Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development
            </Li>
            <Li>
              Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development
            </Li>
            <Li>
              Kendo UI, JQuery, Bootstrap, Semantic UI and handlebars on client-side development
            </Li>
          </Ul>
        </Div>
        <Div>
          <ListItemTitle>
            Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018){' '}
          </ListItemTitle>
          <p>Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) </p>
          <Ul>
            <Li>Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) </Li>
            <Li>Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) </Li>
            <Li>Central Station Software (Full-Stack Developer, Internship, 10/2017 – 01/2018) </Li>
          </Ul>
        </Div>
        <Div>
          <ListItemTitle>Guo Chuang Software (Software Engineer, 09/2012 – 07/2015) </ListItemTitle>
          <p>
            GuoChuang Software is a cloud-based software solution provider. I worked as a software
            engineer at the department of the power industry, participated in designing and
            developing for our data integration web applications, data integration database systems,
            and report systems.
          </p>
          <Ul>
            <Li>Developed java web application and report service </Li>
            <Li>Developed java web application and report service </Li>
            <Li>Developed java web application and report service </Li>
            <Li>Developed java web application and report service </Li>
          </Ul>
        </Div>
      </Section>

      <Section>
        <H2>TECHNICAL EXPERTISE </H2>
        <Div>
          <Ul>
            <Li>Design pattern, Data Structure and Algorithms, DevSecOps, OAuth </Li>
            <Li>React, Angular, JQuery, Bootstrap, Semantic UI, Font Awesome, MVVM </Li>
            <Li>C#, ASP.NET MVC, RESTful, Entity Framework, Java, Spring Boot </Li>
            <Li>Microsoft SQL Server, T-SQL, Oracle, PL/SQL </Li>
            <Li>Visual Studio, Visual Studio Code, Git, Node.js, Webpack, Eclipse </Li>
          </Ul>
        </Div>
      </Section>

      <Section>
        <H2>Education </H2>
        <Div>
          <ListItemTitle>Massey University (02/2016-12/2016) </ListItemTitle>
          <p>Graduate Diploma in Information Science, Average A </p>
        </Div>
        <Div>
          <ListItemTitle>Central South University (09/2008-07/2012) </ListItemTitle>
          <p>Bachelor Diploma in Software Engineering </p>
        </Div>
      </Section>

      <Section>
        <H2>GITHUB/NPM CONTRIBUTIONS </H2>
        <Div>
          <ListItemTitle>
            Generate-Ngrx{' '}
            <A href="https://github.com/ericwang1120/generate-ngrx" target="_blank">
              GitHub
            </A>{' '}
            <A href="https://www.npmjs.com/package/generate-ngrx" target="_blank">
              Npm
            </A>
          </ListItemTitle>
          <p>
            A code generator based on node environment. It can be used to generate code of
            Angular-Ngrx automatically.
          </p>
        </Div>
        <Div>
          <ListItemTitle>
            My Personal Homepage:{' '}
            <A href="https://github.com/ericwang1120/persoal-homepage" target="_blank">
              GitHub
            </A>{' '}
            <A href="https://ericwangkiwi.github.io/" target="_blank">
              Demo
            </A>
          </ListItemTitle>
          <p>This is my personal homepage, written in React, Redux and Semantic-UI. </p>
        </Div>
      </Section>

      <Section>
        <H2>REFEREES </H2>
        <p>Available on request </p>
      </Section>
    </div>
  )
}

export default Resume
