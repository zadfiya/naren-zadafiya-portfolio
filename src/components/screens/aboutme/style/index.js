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

.title {
  margin: 20px 0px;
}

.section_content {
  border-left: 2px solid black;
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  font-size: 0.95rem;
  margin-top: 10px;
}

.section_content::before {
  content: "O";
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -40px;
  background: black 
}

.external_link {
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
}

.date {
    font-size: 14px;
    color: #FFFFFF;
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

export const Image = styled.div`
  position: relative;
  order: 1;
  margin: 0 auto;
  animation: none;

  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}

  .circle {
    display:none;
    position: absolute;
    top: -3%;
    left: -3%;
    width: 345px;
    height: 345px;

    ${breakpointsMedia({
    md: css`
      display: initial;
      animation: rotation 10s infinite linear;
    `,
  })}
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
  }


  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;

    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);

    ${breakpointsMedia({
    md: css`
      width: 320px;
      height: 320px;
      border-radius: 50%;
    `,
  })}
  }

  img:hover{
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
  }
`;

export default Container;
