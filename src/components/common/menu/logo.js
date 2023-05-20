import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Box from '../../foundation/box';
import Link from '../link/link';

function Logo() {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.svg.main;

  return (
    <Box
      zIndex="15"
    >
      <Link href="/" title="Home">
        <svg width="45" height="37" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M16.8671 10.4975C15.4142 10.4975 14.2129 10.6931 13.263 11.0842C12.3689 11.4195 11.6704 11.8945 11.1676 12.5091C10.6647 13.1238 10.3015 13.8781 10.0779 14.7722C9.91031 15.6103 9.82649 16.5323 9.82649 17.5381V33.7984C9.82649 39.2144 5.43597 43.6049 0.019989 43.6049V16.3945C0.019989 13.8441 0.652852 11.3336 1.86184 9.08804C2.86868 7.21794 4.2912 5.60381 6.0199 4.36989L6.60937 3.94914L8.13298 3.02176L9.83965 2.26324C11.7954 1.53684 13.8776 0.942466 16.1127 0.942466H20.4712C22.9298 0.942466 25.109 1.36155 27.0088 2.19971C28.9087 3.03787 30.4732 4.15542 31.7025 5.55236C32.9877 6.89342 33.9376 8.45799 34.5523 10.2461C35.2228 11.9783 35.5581 13.7384 35.5581 15.5265V23.881L25.7516 29.7595V17.5381C25.7516 16.5323 25.6678 15.6103 25.5001 14.7722C25.3325 13.8781 24.9972 13.1238 24.4943 12.5091C24.0473 11.8945 23.3768 11.4195 22.4827 11.0842C21.5887 10.6931 20.3873 10.4975 18.8786 10.4975H16.8671Z"
            fill="black"
          />
          <path
            d="M63.98 6.75001C63.98 8.90093 63.2363 10.9857 61.8748 12.6509L44.4508 33.9636H54.3411C59.6645 33.9636 63.98 38.2791 63.98 43.6025H39.061C35.6033 43.6025 32.8003 40.7995 32.8003 37.3418C32.8003 35.482 33.4414 33.679 34.6155 32.2366L52.2457 10.5789H37.9048C37.1574 7.30363 35.6288 4.25781 33.4493 1.70128L32.8003 0.940002H58.17C61.3788 0.940002 63.98 3.54123 63.98 6.75001Z"
            fill="black"
           />
        </svg>
      </Link>
    </Box>
  );
}

export default Logo;
