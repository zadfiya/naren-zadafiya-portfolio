import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Link from '../../common/link/link';
import Container, { Description, Image, Info } from './style';

const AboutMe = () => (
  <>
    <Container>
      <Text tag="h1" variant="titleXS">About Me</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Info>
          <Description>
            <Text tag="p" variant="paragraph3">
              A versatile software engineer with a passion for leadership, seeking
              a challenging role to leverage technical prowess and deliver
              exceptional software solutions. Proficient at quickly adapting to
              diverse technologies and environments, I excel with mentorship and
              embrace new opportunities. Committed to continuous learning and
              driving innovation, I aspire to make a meaningful impact by
              optimizing processes, elevating organizational performance, and
              staying at the forefront of technology trends.
            </Text>
          </Description>
          <Description>
            <Link href="https://drive.google.com/file/d/1ZEOs3z8H-UA3xiLQIqN6FvYqfweofsMV/view?usp=sharing" target="_blank" className="resume">
              <Text tag="span" variant="paragraph2" color="fonts.main">
                Resume
                      <span className="svgicon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 24 24">

                    <title />
                    <g id="Complete">
                      <g id="download">
                        <g>
                          <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <g>
                            <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2.7" y2="14.2" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                      </span>

              </Text>
            </Link>
          </Description>
        </Info>
        <Image>
          <img src="https://media.licdn.com/dms/image/D4E03AQE3_Ii7IadzoA/profile-displayphoto-shrink_800_800/0/1695646628584?e=1725494400&v=beta&t=T38Xu0kpBUqNv0CTyh19aRpPHZJaAb0ItYJ-2SsUgFw" alt="" />
        </Image>
      </Box>
      <div className="container">
        <div className="left-column">
          <div className="section_content">
            <Text tag="h1" variant="title">Work Experience</Text>
            <Text tag="h3" variant="subTitle">Full Stack Developer</Text>
            <div>
              Renetech Digital, New York, USA
              <a href="https://rentechdigital.com/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date">Jan 2022 - Augus 2022</div>
            <div className="work_description">
              <ul>
                <li>
                        <b>Led the backend team</b>
                        {' '}
                        in the making backend more Scalable, Secure, and Reliable in
                        {' '}
                        <b>Node.js</b>
                        .
                      </li>
                <li>
                        Programmed a cron job to Synchronously fetched data from Google Cloud API, reducing manual data entry by
                        <b>70%.</b>
                      </li>
                <li>Connected 2 interaction panels, user web panel (Next.JS) with admin panel (React) in the nginx.</li>
                <li>
                        Implemented a functionality of
                        <b>user segmentation</b>
                        {' '}
                        for targeting specific users, resulting 25% surge in engagement.
                      </li>
                <li>
                        Handled recurring payments & 1-time charges by implementing
                        <b>The Stripe Payment Gateway service system</b>
                        .
                      </li>
                <li>
                        Prepared different React component in
                        <b>MVC micro architecture</b>
                        {' '}
                        framework which internally use various design patterns (2+)
                        such as
                        <b>singleton, factory</b>
                        .
                      </li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <Text tag="h1" variant="title">Internship Experience</Text>
            <div className="work_title">Software Developer - Cloud</div>
            <div>
              Genetec, Montreal, Canada
              <a href="https://www.linkedin.com/company/motorolasolutions/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date">September 2023 - Present</div>
            <div className="work_description">
              <ul>
                <li>
                        Designed a
                        <b>Microservice architecture</b>
                        {' '}
                        and implemented
                        <b>3</b>
                        {' '}
                        distinct services, leading to improvement in system uptime.
                      </li>
                <li>
                        Developed
                        <b>RESTful APIs</b>
                        {' '}
                        using .NET Core, ensuring data integrity and security, with
                        <b>zero data breaches</b>
                        {' '}
                        during my tenure.
                      </li>
                <li>
                        Applied
                        <b>Dependency Injection pattern</b>
                        {' '}
                        in projects, improving code modularity and accelerating development to 1.3x.
                      </li>
                <li>
                        Enhanced
                        <b>Genetec's</b>
                        {' '}
                        cloud service deployments with automation techniques and scripts in powershell.
                      </li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Software Developer</div>
            <div>
              Rentech Digital, New York, USA
              <a href="https://www.linkedin.com/company/motorolasolutions/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date"> June 2021 - August 2021</div>
            <div className="work_description">
              <ul>
                <li>
                        Experienced in working with Redux architecture using complex
                        <b>Object-Oriented concepts</b>
                        {' '}
                        in improving the performance of the
                        websites to 1.5 sec.
                      </li>
                <li>
                        Improved initial loading time of the web page of the existing site from
                        <b>7 Sec to under 3 Sec</b>
                        {' '}
                        by caching data on UI, reducing
                        server call and stopping re-rendering of components.
                      </li>
                <li>
                        Integrated the application with third-party services and external APIs, Utilized
                        <b>TanStack queries</b>
                        , as part of the implementation.
                      </li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Mobile Application Developer</div>
            <div>
              Zibma Infotech, Surat, India
              <a href="https://www.linkedin.com/company/motorolasolutions/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date"> May 2020 - August 2020</div>
            <div className="work_description">
              <ul>
                <li>
                        Build an elegant UI by utilizing various android widgets with webview in order to load webpage for
                        <b>The Ranch Simulator Game</b>
                        .
                      </li>
                <li>
                        <b>Parsed JSON</b>
                        {' '}
                        data and handle API for data loading, used
                        {' '}
                        <b>Firestore</b>
                        {' '}
                        for storing realtime data.
                      </li>
                <li>Contributed to the deployment process, including app submission to app stores (Google Play), ensuring successful releases.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-column">
          <Text tag="h1" variant="title">Education</Text>
          <div className="section_content">
            <div className="work_title">Masters Of Applied Computer Science</div>
            <div>
              Concordia University, Montreal, Canada
              <a href="https://www.linkedin.com/company/motorolasolutions/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date">September 2022 - Present</div>
            <div className="work_title">B.Tech Computer Engineering</div>
            <div>
              Chorotar University of Science & Technology, Anand, India
              <a href="https://www.linkedin.com/company/motorolasolutions/" className="external_link">
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
            </div>
            <div className="date">July 2018 - April 2022</div>
          </div>
          <Text tag="h1" variant="title">Skills</Text>
          <div className="section_content">
            <div className="work_title">Languages</div>
            <div>
              <ul>
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
                <li>C++</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>GoLang</li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Technologies</div>
            <div>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>.Net core</li>
                <li>SpringBoot</li>
                <li>Django</li>
                <li>Flask</li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Database</div>
            <div>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MS SQL Server</li>
                <li>MySQL</li>
                <li>Azure Tables/CosmosDB</li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Event Driven Architecture - AMQT</div>
            <div>
              <ul>
                <li>Microservice</li>
                <li>RabitMQ</li>
                <li>SignalR</li>
                <li>Azure Bus Service</li>
                <li>Mass Transit</li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">DevOps/Cloud</div>
            <div>
              <ul>
                <li>Nginx</li>
                <li>Azure</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Text tag="h1" variant="title">Publications</Text>
        <div className="work_description">
          <ul>
            <li>
              <Text tag="p" variant="paragraph1" href="https://ieeexplore.ieee.org/document/9716541" target="_blank">
                <b>Detecting Credit Card Frauds Using Isolation Forest And Local Outlier Factor - Analytical Insights</b>
                ,
                2022 4th International Conference on Smart Systems and Inventive Technology (ICSSIT), Tirunelveli, India,
                2022, pp. 1588-1594, doi: 10.1109/ICSSIT53264.2022.9716541.
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
              </Text>
            </li>
            <li>
              <Text tag="p" variant="paragraph1" href="https://ieeexplore.ieee.org/document/9676008" target="_blank">
                <b>A Ratiocinative Concept of Algorithmic Trading using MACD Indicator</b>
                ,
                2021 5th International Conference on Electronics, Communication and Aerospace Technology (ICECA), Coimbatore, India,
                2021, pp. 369-376, doi: 10.1109/ICECA52323.2021.9676008.
                      <svg
                        stroke="#fff"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </>
);

export default AboutMe;
