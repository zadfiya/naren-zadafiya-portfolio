import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const StyledLink = styled(NextLink)`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .9;
  }
`;

// eslint-disable-next-line import/prefer-default-export
const Link = ({ children, href, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledLink href={href} {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
