import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Link from '../../common/link/link'; 
import Container, { Description, Channels, Image, Info
} from './style';

const AboutMe = () =>{
    return (
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
            <Text tag="p" variant="paragraph3">
            </Text>
          </Description>
        </Info>
        <Image>
          <img src="https://media.licdn.com/dms/image/D4E03AQE3_Ii7IadzoA/profile-displayphoto-shrink_800_800/0/1695646628584?e=1725494400&v=beta&t=T38Xu0kpBUqNv0CTyh19aRpPHZJaAb0ItYJ-2SsUgFw" alt="" />
        </Image>
      </Box>
      <Description>
        <Link href="https://drive.google.com/file/d/1ZEOs3z8H-UA3xiLQIqN6FvYqfweofsMV/view?usp=sharing" target="_blank" className="resume">
            <Text tag="span" variant="paragraph2" color="fonts.main">
            Resume
            <span className='svgicon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="25" viewBox="0 0 24 24">
                
                <title/>
                <g id="Complete">
                    <g id="download">
                    <g>
                        <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <g>
                        <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2"/>
                        </g>
                    </g>
                    </g>
                </g>
            </svg>
            </span> 
                    
                </Text>
        </Link>
      </Description>
      <div class="container">
        <div class="left-column">
          <Text tag="h1" variant="title">Work Experience</Text>
            <div class="section_content">
            <Text tag="h3" variant="subTitle">Software Developer Intern- Cloud</Text>
                <div>
                   Genetec, Montreal
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date">Sep 2023 - Present</div>
                <div class="work_description">
                    <ul>
                        <li>Led the backend team in the making backend more Scalable, Secure, and Reliable in Node.js.</li>
                        <li>Programmed a cron job to Synchronously fetched data from Google Cloud API, reducing manual data entry by 70%.</li>
                        <li>Connected 2 interaction panels, user web panel (Next.JS) with admin panel (React) in the nginx.</li>
                        <li>Implemented a functionality of user segmentation for targeting specific users, resulting 25% surge in engagement.</li>
                        <li>Handled recurring payments & 1-time charges by implementing The Stripe Payment Gateway service system.</li>
                        <li>Prepared different React component in MVC micro architecture framework which internally use various design pattern (2+)
                        such as singleton, factory.</li>
                    </ul>
                </div>
            </div>
            <Text tag="h1" variant="title">Internship Experience</Text>
            <div class="section_content">
                <div class="work_title">Software Developer - Cloud</div>
                <div>
                    Genetec, Montreal, Canada
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date">September 2023 - Present</div>
                <div class="work_description">
                    <ul>
                        <li>Designed a Microservice architecture and implemented 3 distinct services, leading to improvement in system uptime.</li>
                        <li>Developed RESTful APIs using .NET Core, ensuring data integrity and security, with 0 data breaches during my tenure.</li>
                        <li>Applied Dependency Injection pattern in projects, improving code modularity and accelerating development to 1.3x.</li>
                        <li>Enhanced Genetec cloud service deployments with automation techniques and scripts in powershell.</li>
                    </ul>
                </div>
            </div>
            <div class="section_content">
                <div class="work_title">Software Developer</div>
                <div>
                    Rentech Digital, New York, USA
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date"> 2023 - Present</div>
                <div class="work_description">
                    <ul>
                        <li>Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the
                        websites to 1.5 sec.</li>
                        <li>Improved initial loading time of the web page of the existing site from 7 Sec to under 3 Sec by caching data on UI, reducing
                        server call and stopping re-rendering of components.</li>
                        <li>Integrated the application with third-party services and external APIs, Utilized TanStack queries, as part of the implementation.</li>
                    </ul>
                </div>
            </div>
            <div class="section_content">
                <div class="work_title">Mobile Application Developer</div>
                <div>
                    Zibma Infotech, Surat, India
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date"> 2023 - Present</div>
                <div class="work_description">
                    <ul>
                        <li>Build an elegant UI by utilizing various android widgets with webview in order to load webpage for The Ranch Simulator Game.</li>
                        <li>Parsed JSON data and handle API for data loading, used Firestore for storing realtime data.</li>
                        <li>Contributed to the deployment process, including app submission to app stores (Google Play), ensuring successful releases.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right-column">
        <Text tag="h1" variant="title">Education</Text>
            <div class="section_content">
                <div class="work_title">Masters Of Applied Computer Science</div>
                <div>
                   Concordia University, Montreal, Canada
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date">September 2022 - Present</div>
                <div class="work_title">B.Tech Computer Engineering</div>
                <div>
                   Chorotar University of Science & Technology, Anand, India
                    <a href="https://www.linkedin.com/company/motorolasolutions/" class="external_link">
                        <svg
                            stroke="#fff"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
                <div class="date">July 2018 - April 2022</div>
            </div>
            <Text tag="h1" variant="title">Skills</Text>
            <div class="section_content">
                <div class="work_title">Languages</div>
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
              <div class="section_content">
                <div class="work_title">Technologies</div>
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
              <div class="section_content">
                <div class="work_title">Database</div>
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
              <div class="section_content">
                <div class="work_title">Event Driven Architecture - AMQT</div>
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
              <div class="section_content">
                <div class="work_title">DevOps/Cloud</div>
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
    </Container>
        </>
    );
};

export default AboutMe;