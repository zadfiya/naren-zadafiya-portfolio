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
              Hi, I`m Naren, Graduate Student of
              <a href="https://www.concordia.ca/" className="external_link">
                Concordia University
              </a>
              {' '}
              and, a passionate software engineer with a knack for creating
              innovative and efficient solutions. With a background in
              <b>Full Stack Development </b>
              and interest in
              {' '}
              <b>cloud technologies</b>
              , I thrive in collaborative environments
              where continuous learning and problem-solving are key. Currently, I`m completing
              my internship at Genetec.
            </Text>
            <Text tag="p" variant="paragraph3">
              My technical expertise includes proficiency in
              {' '}
              <b>Java, Python, .Net, Node</b>
              , and relational
              databases. I`m also highly skilled in front-end development with a focus on
              React. Additionally, I have hands-on experience with designing and implementing
              microservices, developing RESTful APIs, and enhancing CI/CD pipelines. I enjoy
              working with modern tech stacks and am always eager to expand my
              knowledge and tackle new challenges.
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
          <svg
            className="circle"
            viewBox="0 0 252 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M125.817 10.7636C150.363 10.4164 175.31 14.7627 195.304 28.9866C215.412 43.2918 227.727 65.5071 235.61 88.8719C243.566 112.452 247.691 137.881 240.032 161.559C232.366 185.261 214.275 203.717 193.844 218.004C173.704 232.088 150.404 241.611 125.817 241.431C101.349 241.252 78.2295 231.481 58.5104 217.013C38.8747 202.606 23.334 183.331 15.3138 160.354C7.16821 137.018 5.79539 111.538 13.4957 88.0516C21.1845 64.6001 37.3989 44.9335 57.7463 30.9325C77.7247 17.1855 101.558 11.1068 125.817 10.7636Z" stroke="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M128.887 1.00302C155.912 1.19495 182.082 10.5003 203.441 26.4615C224.335 42.0752 238.677 64.2 246.16 88.6404C253.489 112.581 252.049 137.706 244.837 161.68C237.425 186.32 225.607 210.079 204.812 226.092C183.404 242.577 156.28 251.615 128.887 250.967C101.911 250.329 77.2381 238.13 55.6222 222.563C34.2532 207.173 16.0053 187.75 7.34179 163.432C-1.41975 138.84 -0.835607 112.082 7.44507 87.3348C15.739 62.5482 31.7847 40.8556 53.5304 25.3969C75.3902 9.85695 101.725 0.810134 128.887 1.00302Z" stroke="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M124.234 8.0829C149.327 8.63835 172.62 19.5518 192.754 34.519C212.695 49.3431 228.956 68.6247 237.186 92.0508C245.555 115.873 246.529 141.841 238.914 165.913C231.255 190.123 215.867 211.478 194.876 225.802C174.282 239.855 149.174 244.528 124.234 244.17C99.591 243.816 75.0172 238.225 55.0528 223.794C35.0647 209.345 21.4212 187.972 13.9846 164.476C6.59336 141.123 6.62336 116.282 13.5928 92.8006C20.7059 68.8346 33.6075 46.6455 53.4711 31.436C73.68 15.9621 98.7748 7.51936 124.234 8.0829Z" stroke="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M125.181 6.38451C150.056 6.67557 173.388 16.3048 193.925 30.3246C214.974 44.6941 234.534 62.5617 242.772 86.6592C251.078 110.957 247.354 137.471 238.833 161.694C230.47 185.467 215.675 206.336 195.397 221.33C174.981 236.427 150.581 245.318 125.181 245.731C99.4805 246.15 74.2547 238.483 53.2817 223.643C32.1281 208.676 15.0229 187.76 8.02016 162.832C1.1829 138.493 7.12516 113.08 15.5231 89.2335C23.7393 65.9031 35.507 43.6232 55.2563 28.7021C75.2601 13.5887 100.099 6.09104 125.181 6.38451Z" stroke="black" />
          </svg>

          <img src="https://media.licdn.com/dms/image/D4E03AQE3_Ii7IadzoA/profile-displayphoto-shrink_800_800/0/1695646628584?e=1725494400&v=beta&t=T38Xu0kpBUqNv0CTyh19aRpPHZJaAb0ItYJ-2SsUgFw" alt="" />
          <Text tag="h5" variant="title">
            VolleyBall🏐 - Cricket🏏 - Badminton🏸 Enthusiast
          </Text>
          <Text tag="h5" variant="title">
            Photographer📸 - Mountainer🏞️ - Coder🧑🏻‍💻 Freak
          </Text>
        </Image>
      </Box>
      <div className="container">
        <div className="left-column">
          <Text tag="h1" variant="title" className="title">Work Experience</Text>
          <div className="section_content">
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
                  <b> Node.js</b>
                  .
                </li>
                <li>
                  Programmed a cron job to Synchronously fetched data from Google Cloud API,
                  reducing manual data entry by
                  <b> 70%.</b>
                </li>
                <li>
                  Connected 2 interaction panels, user web panel (Next.JS) with admin panel
                  (React) in the nginx.
                </li>
                <li>
                  Implemented a functionality of
                  <b> user segmentation</b>
                  {' '}
                  for targeting specific users, resulting 25% surge in engagement.
                </li>
                <li>
                  Handled recurring payments & 1-time charges by implementing
                  <b> The Stripe Payment Gateway service system</b>
                  .
                </li>
                <li>
                  Prepared different React component in
                  <b> MVC micro architecture</b>
                  {' '}
                  framework which internally use various design patterns (2+)
                  such as
                  <b> singleton, factory</b>
                  .
                </li>
              </ul>
            </div>
          </div>
          <Text tag="h1" variant="title" className="title">Internship Experience</Text>
          <div className="section_content">
            <div className="work_title">Software Developer - Cloud</div>
            <div>
              Genetec, Montreal, Canada
              <a href="https://www.genetec.com/" className="external_link">
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
                  <b> Microservice architecture</b>
                  {' '}
                  and implemented
                  <b> 3</b>
                  {' '}
                  distinct services, leading to improvement in system uptime.
                </li>
                <li>
                  Developed
                  <b> RESTful APIs</b>
                  {' '}
                  using .NET Core, ensuring data integrity and security, with
                  <b> zero data breaches</b>
                  {' '}
                  during my tenure.
                </li>
                <li>
                  Applied
                  <b> Dependency Injection pattern</b>
                  {' '}
                  in projects, improving code modularity and accelerating development to 1.3x.
                </li>
                <li>
                  Enhanced
                  <b> Genetec`s</b>
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
            <div className="date"> June 2021 - August 2021</div>
            <div className="work_description">
              <ul>
                <li>
                  Experienced in working with Redux architecture using complex
                  <b> Object-Oriented concepts</b>
                  {' '}
                  in improving the performance of the
                  websites to 1.5 sec.
                </li>
                <li>
                  Improved initial loading time of the web page of the existing site from
                  <b> 7 Sec to under 3 Sec</b>
                  {' '}
                  by caching data on UI, reducing
                  server call and stopping re-rendering of components.
                </li>
                <li>
                  Integrated the application with third-party services and external APIs, Utilized
                  <b> TanStack queries</b>
                  , as part of the implementation.
                </li>
              </ul>
            </div>
          </div>
          <div className="section_content">
            <div className="work_title">Mobile Application Developer</div>
            <div>
              Zibma Infotech, Surat, India
              <a href="https://www.linkedin.com/company/zibma/" className="external_link">
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
                  Build an elegant UI by utilizing various android widgets with
                  webview in order to load webpage for
                  <b> The Ranch Simulator Game</b>
                  .
                </li>
                <li>
                  <b>Parsed JSON</b>
                  {' '}
                  data and handle API for data loading, used
                  {' '}
                  <b> Firestore</b>
                  {' '}
                  for storing realtime data.
                </li>
                <li>
                  Contributed to the deployment process, including app
                  submission to app stores (Google Play)
                  , ensuring successful releases.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-column">
          <Text tag="h1" variant="title" className="title">Education</Text>
          <div className="section_content">
            <div className="work_title">Masters Of Applied Computer Science</div>
            <div>
              Concordia University, Montreal, Canada
              <a href="https://www.concordia.ca/" className="external_link">
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
              <a href="https://www.charusat.ac.in/" className="external_link">
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
          <Text tag="h1" variant="title" className="title">Skills</Text>
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
                <b>
                  Detecting Credit Card Frauds Using Isolation Forest And Local
                  Outlier Factor - Analytical Insights
                </b>
                ,
                2022 4th International Conference on Smart Systems
                and Inventive Technology (ICSSIT), Tirunelveli, India,
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
                2021 5th International Conference on Electronics, Communication and
                Aerospace Technology (ICECA), Coimbatore, India,
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
