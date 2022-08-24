/* eslint-disable */
import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
/* import Link from '../../common/link/link'; */
import ArrowCircle from './animation/arrowCircle';
import ContainerProjetos, { ProjetoPrincipal, ListaProjetos } from './style';

const repositoriosId = {
  390006089: '/images/LPinstalura.webp',
  371118356: '/images/LPlayouts.webp',
  380740837: '/images/LPjavascriptprojetos.webp',
  385367528: '/images/LPalurakut.webp',
  396137846: '/images/LPtemplate.webp',
};
// const repositorioIdPrincipal = [397245461];
const repoArrObj = [{
  html_url: '#',
  id: 390006089,
  name: 'Temp',
  stargazers_count: 1,
  forks: 1,
  description: 'Temp XYZ',
},
{
  html_url: '#',
  id: 371118356,
  name: 'Temp',
  stargazers_count: 1,
  forks: 1,
  description: 'Temp XYZ',
},
{
  html_url: '#',
  id: 380740837,
  name: 'Temp',
  stargazers_count: 1,
  forks: 1,
  description: 'Temp XYZ',
},
{
  html_url: '#',
  id: 385367528,
  name: 'Temp',
  stargazers_count: 1,
  forks: 1,
  description: 'Temp XYZ',
}];
function Projetos({  }) {
  /* const repos = repositorios.filter((repo) => repositoriosId[repo.id]);
  const reposPrincipal = repositorios.filter((repo) => repositorioIdPrincipal.includes(repo.id));
  console.log(repos) */
  return (
    <ContainerProjetos>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
        minHeight={{
          xs: 'auto',
          md: '75vh',
        }}
        marginBottom={{
          xs: '0',
          md: '50px',
        }}
        alignItems="flex-end"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
          height="100%"
          width="100%"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
          paddingRight={{
            xs: '0',
            md: '20px',
          }}
        >
          <Text tag="h1" variant="titleXS" color="fonts.main" marginBottom="50px" textAlign="left">
            Selected Projects
          </Text>
          <ArrowCircle />
        </Box>
        <Box
          flexBasis="100%"
        >
          <ProjetoPrincipal>
            <li>
              <Box
                display="flex"
                flexDirection="column"
                className="ProjetoPrincipal"
              >
                <img
                  src="https://i.postimg.cc/RZRVSN6v/personal-portfolio.jpg"
                  alt="N A R E N"
                />
                <Box
                  display="flex"
                  justifyContent={{
                    xs: 'center',
                    md: 'space-between',
                  }}
                  width="100%"
                  alignItems="center"
                >
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      width="100%"
                    >
                      <Text
                        tag="h2"
                        variant="paragraph1XS"
                        color="fonts.main"
                      >
                        Naren Portfolio
                      </Text>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="80px"
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          title="Star"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" /></svg>
                          <Text tag="p" variant="paragraph3" color="fonts.main">22</Text>
                        </Box>
                        <Box
                          display="flex"
                          alignItems="center"
                          title="Fork"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z" /></svg>
                          <Text tag="p" variant="paragraph3" color="fonts.main">8</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Text tag="p" variant="paragraph3" color="fonts.main">
                      It is my personal website which defines my professional works.
                      It is single page Application, which was developed using Next.js
                    </Text>
                  </Box>
                  <svg className="arrow" width="65" height="60" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Box>
              </Box>
            </li>
          </ProjetoPrincipal>
        </Box>
      </Box>
      <Box>
        <ListaProjetos id="listaProjetos">
          {repoArrObj.map((item) => (
            <li key={item.id}>
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                title="Repositorio Github"
                className="itemsProjetos"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                >
                  <img
                    src={repositoriosId[item.id]}
                    alt={item.name}
                    loading="lazy"
                  />
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Text
                      tag="h2"
                      variant="paragraph1XS"
                      color="fonts.main"
                    >
                      {item.name}
                    </Text>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="80px"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        title="Star"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
                        </svg>
                        <Text tag="p" variant="paragraph3" color="fonts.main">{item.stargazers_count}</Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        title="Fork"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065 2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5 21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313-.146.735-.565 1.791-1.778 2.252-1.192.452-2.053.953-2.646 1.536-.593-.583-1.453-1.084-2.646-1.536-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5 10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355zM17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7 16 6.327 16 5.5 16.673 4 17.5 4zm-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5.673-1.5 1.5-1.5 1.5.673 1.5 1.5zM6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7 5 6.327 5 5.5 5.673 4 6.5 4z" />
                        </svg>
                        <Text tag="p" variant="paragraph3" color="fonts.main">{item.forks}</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Text tag="p" variant="paragraph3" color="fonts.main">
                    {item.description}
                  </Text>
                </Box>
                <svg className="arrow" width="75" height="70" viewBox="0 0 75 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.875 49.5834L53.125 20.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21.875 20.4167H53.125V49.5834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ListaProjetos>
      </Box>
      <Box
        textAlign="center"
        padding="40px"
        paddingTop="60px"
      >
        <Text
          tag="a"
          variant="paragraph1XS"
          color="fonts.main"
          href="https://github.com/carolandrade1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veja outros projetos
        </Text>
      </Box>
    </ContainerProjetos>
  );
}

export default Projetos;
