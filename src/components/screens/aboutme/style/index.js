import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/util/breakpoints/breakpoints';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 82vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
    &::-webkit-scrollbar-thumb:active {
      background: #000000;
    }
    &::-webkit-scrollbar-button {
      width: 12px;
      height: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border: 17px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border: 16px none #ffffff;
      border-radius: 50px;
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  ${breakpointsMedia({
    md: css`
      padding: 0 40px;
      
      h1 {
        margin-bottom: 50px;
      }
      
      &::-webkit-scrollbar {
        display: none;
      }
    `,
  })}

  .container {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 20px;
    padding: 20px;
}

.left-column {
    padding: 20px;
    border-radius: 10px;
}

.right-column {
    padding: 20px;
    border-radius: 10px;
}

.section_title {
    font-size: 24px;
    margin-bottom: 10px;
}

.section_content::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #212121;
  border: 2px solid #2977d1;
}

.section_content {
  border-left: 2px solid black;
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  font-size: 0.95rem;
  margin-top: 10px;
}

.work_title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}

.external_link {
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
}

.date {
    font-size: 14px;
    color: #ccc;
    margin: 10px 0;
}

.work_description ul {
    list-style: none;
    padding: 0;
}

.work_description li {
    margin-bottom: 10px;
}

  
`;

export const Info = styled.div`
  order: 2;
  padding-right: 0;

  ${breakpointsMedia({
    md: css`
      order: 1;
      padding-right: 30px; 
    `,
  })}
`;

export const Description = styled.div`
  margin-bottom: 40px;

  p {
    line-height: 1.3;
    letter-spacing: 1px;
    text-align: justify;
    max-width: 600px;
    padding: 15px 0;
    margin: 0 auto;

    ${breakpointsMedia({
    md: css`
      gap: 25px;
      margin: 0 auto;
    `,
  })}
  }
  
  .resume {
      width: 130px;
      margin-bottom: 15px;
      position: relative;
      padding: 8px 12px;
      transition: all .2s ease;
      cursor: pointer;
      display: inline;

    ${breakpointsMedia({
    md: css`
    padding: 8px 12px;
    `,
  })}
      &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          border-radius: 28px;
          background: ${({ theme }) => theme.colors.details.main.color};
          width: 35px;
          height: 35px;
          transition: all .3s ease;
      }
      span {
          position: relative;
          font-weight: 500;
          line-height: 18px;
          letter-spacing: 2px;
          text-transform: uppercase;
          vertical-align: middle;
      }
      &:hover {
          &:before {
          width: 100%;
          background: ${({ theme }) => theme.colors.details.main.color};
          }
      }
      &:active {
          transform: scale(.96);
      }
  }
`;

export const Channels = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: start;
  gap: 18px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  ${breakpointsMedia({
    md: css`
      gap: 25px;
  `,
  })}
  
  a {
    position: relative;
  }

  img {
    display: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    &:hover {
      display: none;
    }
  }

  a:hover img {
    display: initial;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -150%);
  }
`;

export const Image = styled.div`
  order: 1;
  margin: 0 auto;

  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;

    ${breakpointsMedia({
    md: css`
      width: 320px;
      height: 320px;
      border-radius: 50%;
    `,
  })}
  }
`;

export default Container;